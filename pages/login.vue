<template>
  <v-container class="view-container d-flex justify-center py-16">
    <div>
      <h1 class="text-center">Service BC Connect Account Login</h1>

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
import { setLoginUrl } from '@/utils'

const RETURN_PARAM = 'return'

/**
 * This is a generic login page. It can be displayed after the user has signed out
 * so that they know they have successfully logged out. It can be bookmarked for
 * future use. Other Service BC Connect Account apps can redirect here (with an optional
 * "return" URL parameter) so they don't have to implement this themselves.
 */
export default Vue.extend ({
  components: {
    SbcSigninButton,
  },
  asyncData ({ $config, redirect, query }) {
    // check if user is already logged in
    const token = sessionStorage.getItem(SessionStorageKeys.KeyCloakToken)
    if (token) {
      // redirect to return URL if specified, else dashboard
      const loginUrl = (query[RETURN_PARAM] || $config.registryDashboard) as string
      return redirect(loginUrl)
    }
  },
  mounted () {
    // after login, go to specified return URL, if specified
    const loginUrl = (this.$route.query[RETURN_PARAM] as string) || ''
    setLoginUrl(loginUrl)
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/theme.scss';

::v-deep .sbc-signin-button {
  width: 100%;
}
</style>
