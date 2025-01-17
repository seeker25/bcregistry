<template>
  <v-container fluid class="py-12">
    <v-overlay v-model="loadingProducts">
      <v-progress-circular color="primary" size="50" indeterminate />
    </v-overlay>
    <h1 class="dash-header">{{ isSbcStaff ? 'SBC Staff' : 'BC' }} Registries Dashboard</h1>

    <p class="dash-header-info ma-0 pt-3">Access to your BC Registries account product and services</p>

    <template v-if="!loadingProducts">
      <h3 class="dash-sub-header">
        My Products and Services
        <span class="font-weight-regular">({{ subscribedProducts.length }})</span>
      </h3>

      <v-row v-if="subscribedProducts.length > 0" no-gutters>
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
          <a
          class="text-decoration-none"
          target="_blank"
          rel="noopener noreferrer"
          :href="'https://www2.gov.bc.ca/gov/content/employment-business/business/managing-a-business/'
            +'permits-licences/news-updates/modernization-updates/modernization-resources'">
            <v-container fluid rounded class="dash-container-info service-container mt-5 white">
              <h4>Help with How to Use BC Registries Products and Services</h4>
              <p class="ma-0 pt-3">
                Learn about the registries and how to use the applications through step-by-step guides,
                online videos, and downloadable quick guides.
              </p>
              <v-row no-gutters class="align-bottom pt-7">
                <span class="appBlue--text font-weight-bold">Go to the Registry Application Help Page</span>
                <v-icon color="appBlue" small right>mdi-open-in-new</v-icon>
              </v-row>
            </v-container>
          </a>
        </div>
      </v-row>
    </template>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { SessionStorageKeys } from 'sbc-common-components/src/util/constants'
import { mapGetters } from 'vuex'
import UserProduct from '@/components/UserProduct.vue'
import { ProductCode, ProductStatus } from '@/enums'
import {
  fetchAccountProducts, fetchOrganization,
  getFeatureFlag, getKeycloakRoles,
  getProductInfo, sleep, setLogoutUrl,
  getMhrPprTileInfo, hasDefaultValue,
  hasMhrAndPprProducts, setSiteMinderLogoutUrl
} from '@/utils'

export default Vue.extend ({
  components: {
    UserProduct,
  },
  asyncData ({ $config, redirect, store }) {
    // if user is not logged in, redirect to login page
    const token = sessionStorage.getItem(SessionStorageKeys.KeyCloakToken)
    if (!token) {
      return redirect($config.registryLogin)
    }

    // get roles
    let roles: string[]
    try {
      roles = getKeycloakRoles()
    } catch {
      roles = []
    }
    store.commit('setRoles', roles)

    // check if user is staff or contact centre staff
    let isStaff: boolean
    try {
      isStaff = roles?.some(role => ['staff', 'contact_centre_staff'].includes(role)) || false
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
      loadingProducts: true,
      subscribedProducts: [],
    }
  },
  computed: {
    ...mapGetters(['isSbcStaff', 'getRoles']),
  },
  async mounted () {
    // if user logs out from this page, go to login page
    setLogoutUrl(this.$config.registryLogin)

    setSiteMinderLogoutUrl(this.$config.siteMinderLogoutUrl)

    // get account id from object in session storage
    // wait up to 10 sec for current account to be synced (typically by SbcHeader)
    this.loadingProducts = true
    let accountId: number
    for (let i = 0; i < 100; i++) {
      const currentAccount = sessionStorage.getItem(SessionStorageKeys.CurrentAccount)
      const account = JSON.parse(currentAccount)
      accountId = account?.id as number
      if (accountId) break
      await sleep(100)
    }

    // fetch data only if we have account id
    if (accountId) {
      // check if user is SBC staff
      let isSbcStaff = false
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

      // get products list from API
      products = await fetchAccountProducts(accountId)

      const currentProducts = products.filter(
        product => product.subscriptionStatus === ProductStatus.ACTIVE
      )

      // only show products with no placeholder
      for (let i = 0; i < currentProducts.length; i++) {
        const enabledFF = `bcregistry-ui-${currentProducts[i].code}-enabled`.toLowerCase()
        // ensure has a default (otherwise it might not have an enabled flag set in LD)
        if (hasDefaultValue(enabledFF) && !getFeatureFlag(enabledFF)) {
          // skip disabled products
          continue
        }

        let thisProduct = getProductInfo(this.$config, currentProducts[i].code)

        if (thisProduct.title === 'placeholder_title') {
          console.error('Product tile not implemented:', currentProducts[i].code)
          continue
        }

        // block for MHR/PPR special rules
        if (hasMhrAndPprProducts(currentProducts)) {
          if (currentProducts[i].code === ProductCode.PPR) {
            // replace ppr tile with assets
            thisProduct = getMhrPprTileInfo(this.$config)
          } else if (currentProducts[i].code === ProductCode.MHR) {
            // skip mhr product (included with assets tile)
            continue
          }
        }

        this.subscribedProducts.push(thisProduct)
      }
    }

    // wait 250ms so it doesn't look glitchy if products come back immediately
    setTimeout(() => { this.loadingProducts = false }, 250)
  },
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

.service-container {
  cursor: pointer;

  span {
    font-size: $px-14;
  }

  &:hover {
    box-shadow: 1px 1px 6px 0px $gray6;
  }
}
</style>
