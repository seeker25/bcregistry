<template>
  <SbcSignin @sync-user-profile-ready="onProfileReady()" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SbcSignin from 'sbc-common-components/src/components/SbcSignin.vue'
import { SessionStorageKeys } from 'sbc-common-components/src/util/constants'

/**
 * When the user clicks "Log in", they are are redirected to THIS page, which
 * renders the SbcSignin component that actually performs the signin process.
 */
@Component({
  components: {
    SbcSignin,
  }
})
export default class Signin extends Vue {
  /** Called when Keycloak session is ready. */
  onProfileReady (): void {
    // once user has signed in, go to dashboard
    if (sessionStorage.getItem(SessionStorageKeys.KeyCloakToken)) {
      this.$router.push({ path: '/dashboard' })
      return
    }
    // should not happen, but fall back gracefully
    this.$router.push({ path: '/' })
  }
}
</script>
