<template>
  <!-- TODO: test isStaffBc in breadcrumb -->
  <v-container fluid class="py-12">
    <h1 class="dash-header">{{ isStaffSbc ? 'SBC Staff' : 'BC' }} Registries Dashboard</h1>

    <p class="dash-header-info ma-0 pt-3">Access to your BC Registries account product and services</p>

    <h3 class="dash-sub-header">
      My Products and Services
      <span style="font-weight: normal;">({{ subscribedProducts.length  }})</span>
    </h3>

    <v-row no-gutters>
      <div class="col-md-8 col-sm-12">
        <UserProduct
          v-for="product in subscribedProducts"
          :key="product.code"
          class="mt-5"
          :product="getProductInfo($config, product.code)"
        />
      </div>

      <div class="pl-6 col-md-4 col-sm-12">
        <v-container fluid rounded class="dash-container-info mt-5 white">
          <h4>Add Product and Services</h4>
          <p class="ma-0 pt-3">
            To request access to additional products and services, contact the account
            Administrator of your BC Registries account.
          </p>
        </v-container>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import { SessionStorageKeys } from 'sbc-common-components/src/util/constants'
// local
import UserProduct from '@/components/UserProduct.vue'
import { ProductCode, ProductStatus } from '@/enums'
import { getAccountProducts, getKeycloakRoles, getProductInfo } from '@/utils'

export default {
  components: {
    UserProduct
  },
  // Called every time before loading page components.
  // TODO: need to start Token Service to refresh KC token periodically?
  asyncData(context) {
    if (!sessionStorage.getItem(SessionStorageKeys.KeyCloakToken)) {
      context.redirect('/signin')
    }
  },
  data() {
    return {
      getProductInfo,
      roles: getKeycloakRoles(),
      isStaffSbc: false,
      subscribedProducts: [],
    }
  },
  async mounted() {
    if (this.roles.includes('staff')) {
      const redirectURL = this.$config.authURL + 'staff/dashboard/active'
      window.location.href = redirectURL
    }
    let products = []
    // title logic
    if (this.roles.includes('gov_account_user')) {
      this.isStaffSbc = true
      // get products / services
      products = [
        {
          code: ProductCode.BUSINESS,
          subscriptionStatus: ProductStatus.ACTIVE
        },
        {
          code: ProductCode.PPR,
          subscriptionStatus: ProductStatus.ACTIVE
        },
      ]
    } else {
      products = await getAccountProducts()
    }
    this.subscribedProducts = products.filter(
      product => product.subscriptionStatus === ProductStatus.ACTIVE)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/theme.scss';
.dash-container-info {
  padding: 30px;

  p {
    color: $gray7;
    font-size: 0.875rem;
    line-height: 1.375rem;
  }
}

.dash-header {
  color: $gray9;
}

.dash-header-info {
  color: $gray7;
  font-size: 1rem;
}

.dash-sub-header {
  color: $gray9;
  font-size: 1.125rem;
  padding-top: 50px;
}
</style>
