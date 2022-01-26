<template>
  <v-container class="view-container d-flex justify-center py-16">
    <div>
      <h1 class="text-center">BC Registries Account Login</h1>

      <v-card max-width="460" class="mt-10 pa-7">
        <v-card-title class="pa-0">
          <v-img
            max-height="260"
            src="/img/BCReg_Generic_Login_image.jpg"
            alt="Generic Login Image">
          </v-img>
        </v-card-title>

        <v-card-text class="px-0 py-7">
          <SbcSigninButton />
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { SessionStorageKeys } from 'sbc-common-components/src/util/constants'
import SbcSigninButton from '~/components/SbcSigninButton.vue'

/**
 * This "login page" is shown after user has signed out of the dashboard, so that
 * they know they have successfully logged out. This page can also be bookmarked
 * for future use.
 */
export default Vue.extend ({
  components: {
    SbcSigninButton,
  },
  asyncData ({ $config, redirect }) {
    // if user is already logged in, redirect to dashboard page
    const token = sessionStorage.getItem(SessionStorageKeys.KeyCloakToken)
    if (token) {
      return redirect($config.registryDashboard)
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/theme.scss';

::v-deep .sbc-signin-button {
  width: 100%;
}
</style>
