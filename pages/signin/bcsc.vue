<template>
  <div />
</template>

<script lang="ts">
import { getLoginUrl } from '@/utils'

// This component is loaded when user selects menu option to login using BCSC.
export default {
  asyncData ({ $config }) {
    // navigate to Auth signin page + set URL to go to after login
    const loginUrl = getLoginUrl() || $config.registryDashboard
    const url = $config.signinBcscUrl + encodeURIComponent(loginUrl)
    window.location.assign(url)
  },
}
</script>
