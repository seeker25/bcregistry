<template>
  <LoadingScreen :is-loading="true" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import KeycloakService from 'sbc-common-components/src/services/keycloak.services'
import LoadingScreen from 'sbc-common-components/src/components/LoadingScreen.vue'
import { getLogoutUrl } from '@/utils'

/**
 * When the user clicks the "Log out" button, they are are routed to this page,
 * which performs the signout process.
 */
@Component({
  components: {
    LoadingScreen
  }
})
export default class Signout extends Vue {
  private async mounted () {
    // get URL to redirect to when the signout process completes
    const redirectUrl = getLogoutUrl() || this.$config.registryLogin
    await KeycloakService.logout(decodeURIComponent(redirectUrl))
  }
}
</script>
