<template>
  <SbcSignout :redirect-url="logoutUrl" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SbcSignout from 'sbc-common-components/src/components/SbcSignout.vue'
import { getLogoutUrl } from '@/utils'

/**
 * When the user clicks "Log out", they are are redirected to THIS page, which
 * renders the SbcSignout component that actually performs the signout process.
 */
@Component({
  components: {
    SbcSignout
  }
})
export default class Signout extends Vue {
  /** The URL to redirect to when the signout process completes. */
  get logoutUrl (): string {
    return getLogoutUrl() || this.$config.registryLogin
  }
}
</script>
