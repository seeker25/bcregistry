<template>
  <div>
    <header class="hero-banner d-flex align-center">
      <v-container>
        <v-row no-gutters>
          <v-col class="col-md-6 col-xl-7">
            <h1>Access and manage your BC Registries and Online Services</h1>
          </v-col>
        </v-row>

        <v-row no-gutters>
          <v-col class="col-md-4 col-lg-5 col-xl-7">
            <p>
              All registrations of businesses, not-for-profit societies, cooperative
              associations, personal property and manufactured homes are administered
              and supported by BC Registries and Online Services.
            </p>
            <p>
              As our online modernization initiative continues, refer to this page for
              updates on ways to manage registration information.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </header>

    <v-divider class="h-divider"></v-divider>
    <AccountsFooter />
    <v-divider class="h-divider"></v-divider>

    <div class="container">
      <BCRegistriesAccount />
      <v-divider class="h-divider"></v-divider>
      <BCOnlineAccount />
      <v-divider class="h-divider"></v-divider>
      <DirectAccount />
      <v-divider class="h-divider"></v-divider>
      <NoAccount />
    </div>

    <ContactInfo />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AccountsFooter from '~/components/AccountsFooter.vue'
import BCOnlineAccount from '~/components/BCOnlineAccount.vue'
import BCRegistriesAccount from '~/components/BCRegistriesAccount.vue'
import DirectAccount from '~/components/DirectAccount.vue'
import NoAccount from '~/components/NoAccount.vue'
import ContactInfo from '~/components/ContactInfoBcros.vue'
import { setLoginUrl, setLogoutUrl } from '@/utils'

/*
 * This is the BCROS marketing page.
 */
export default Vue.extend ({
  components: {
    AccountsFooter,
    BCRegistriesAccount,
    BCOnlineAccount,
    DirectAccount,
    NoAccount,
    ContactInfo,
  },
  mounted () {
    // if user logs in from this page, go to dashboard
    setLoginUrl(this.$config.registryDashboard)
    // if user logs out from this page, return here
    setLogoutUrl(this.$config.baseURL)
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/theme.scss';

.hero-banner {
  background-color: white;
  background-image: none;
}

// "md" breakpoint
@media (min-width: 960px) {
  .hero-banner {
    height: 30rem;
    background-image: url(../assets/img/BCReg_homebanner_images_final_80compressed_032521.jpg);
    background-position: bottom right;
    background-repeat: no-repeat;
    background-size: 845px;
  }
}

// "lg" breakpoint
@media (min-width: 1264px) {
  .hero-banner {
    background-size: 955px;
  }
}

// "xl" breakpoint
@media (min-width: 1904px) {
  .hero-banner {
    height: 35rem;
    background-size: 1145px;
  }
}

h1 {
  line-height: 1.25;
  font-size: $px-40;
}

p {
  margin: 1.5rem 0;
  color: $gray7;
}
</style>
