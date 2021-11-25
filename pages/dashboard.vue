<template>
  <v-container class="pa-12" fluid>
    <h1 class="dash-header">BC Registries Dashboard</h1>
    <p class="dash-header-info ma-0 pt-3">Access to your BC Registries account product and services</p>
    <h3 class="dash-sub-header">My Products and Services ({{ subscribedProducts.length  }})</h3>
    <v-row no-gutters>
      <v-col cols="8">
        <user-product
          v-for="product in subscribedProducts"
          :key="product.code"
          class="mt-5"
          :product="productInfo[product.code]"
        />
      </v-col>
      <v-col class="pl-6" cols="4">
        <v-container class="dash-container-info mt-5 white" fluid>
          <h4>Add Product and Services</h4>
          <p class="ma-0 pt-3">
            To request access to additional products and services, contact the account
            Administrator of your BC Registries account.
          </p>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { SessionStorageKeys } from 'sbc-common-components/src/util/constants'
// local
import UserProduct from '@/components/UserProduct.vue'
import { ProductStatus } from '@/enums'
import { ProductInfo } from '@/resources'
import { getAccountProducts } from '@/utils'
export default {
  components: {
    UserProduct
  },
  asyncData(context) {
    if (!sessionStorage.getItem(SessionStorageKeys.KeyCloakToken)) {
      context.redirect('/signin')
    }
  },
  data() {
    return {
      productInfo: { ...ProductInfo },
      subscribedProducts: []
    }
  },
  async mounted() {
    const products = await getAccountProducts()
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
