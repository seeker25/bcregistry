<template>
  <v-container fluid class="py-12">
    <h1 class="dash-header">{{ isSbcStaff ? 'SBC Staff' : 'BC' }} Registries Dashboard</h1>

    <p class="dash-header-info ma-0 pt-3">Access to your BC Registries account product and services</p>

    <h3 class="dash-sub-header">
      My Products and Services
      <span class="font-weight-regular">({{ subscribedProducts.length }})</span>
    </h3>

    <v-row no-gutters>
      <div class="col-md-8 col-sm-12">
        <UserProduct
          v-for="product in subscribedProducts"
          :key="product.code"
          class="mt-5"
          :product="product"
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

<script lang="ts">
import Vue from 'vue'
import { SessionStorageKeys } from 'sbc-common-components/src/util/constants'
import { mapGetters } from 'vuex'
import UserProduct from '@/components/UserProduct.vue'
import { ProductCode, ProductStatus } from '@/enums'
import { fetchAccountProducts, fetchOrganization, getKeycloakRoles, getProductInfo, sleep } from '@/utils'

export default Vue.extend ({
  components: {
    UserProduct,
  },
  asyncData ({ $config, redirect, store }) {
    // if user is not logged in, redirect to home page
    const token = sessionStorage.getItem(SessionStorageKeys.KeyCloakToken)
    if (!token) {
      return redirect($config.baseURL)
    }

    // get roles
    let roles: string[]
    try {
      roles = getKeycloakRoles()
    } catch {
      roles = []
    }
    store.commit('setRoles', roles)

    // check if user is staff
    let isStaff: boolean
    try {
      isStaff = roles?.includes('staff') || false
    } catch {
      isStaff = false
    }
    store.commit('setStaff', isStaff)

    // if user is staff, redirect to Business Registry staff dashboard
    if (isStaff) {
      return redirect($config.businessRegistryStaffDashboard)
    }
  },
  data () {
    return {
      getProductInfo, // for use in template
      subscribedProducts: [],
    }
  },
  computed: {
    ...mapGetters(['isSbcStaff', 'getRoles', 'getAccountId']),
  },
  async mounted () {
    // get account id from object in session storage
    // wait up to 10 sec for current account to be synced (typically by SbcHeader)
    let accountId: number
    for (let i = 0; i < 100; i++) {
      const currentAccount = sessionStorage.getItem(SessionStorageKeys.CurrentAccount)
      const account = JSON.parse(currentAccount)
      accountId = account?.id as number
      if (accountId) break
      await sleep(100)
    }
    this.$store.commit('setAccountId', accountId)

    // check if user is SBC staff
    let isSbcStaff: boolean
    if (this.getRoles?.includes('gov_account_user')) {
      try {
        const org = await fetchOrganization(accountId)
        isSbcStaff = org?.branchName?.includes('Service BC') || false
      } catch {
        isSbcStaff = false
      }
    }
    this.$store.commit('setSbcStaff', isSbcStaff)

    let products = []
    if (this.isSbcStaff) {
      // static products list for SBC staff
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
      // get products list from API
      products = await fetchAccountProducts(this.getAccountId)
    }
    const currentProducts = products.filter(
      product => product.subscriptionStatus === ProductStatus.ACTIVE)
    // only show products with no placeholder
    for (let i = 0; i < currentProducts.length; i++) {
      const thisProduct = getProductInfo(this.$config, currentProducts[i].code)
      if (thisProduct.title !== 'placeholder_title') {
        this.subscribedProducts.push(thisProduct)
      }
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/theme.scss';

.dash-container-info {
  padding: 30px;

  p {
    color: $gray7;
    font-size: $px-14;
    line-height: 1.375rem;
  }
}

.dash-header {
  color: $gray9;
}

.dash-header-info {
  color: $gray7;
  font-size: $px-16;
}

.dash-sub-header {
  color: $gray9;
  font-size: $px-18;
  padding-top: 50px;
}
</style>
