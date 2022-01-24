<template>
  <div></div>
</template>

<script lang="ts">
// This component is loaded when user selects menu option to login using BCeID.
export default {
  asyncData ({ $config, redirect }) {
    // redirect to Auth to sign in and then return to dashboard
    const url = $config.signinBceidUrl + encodeURIComponent($config.registryDashboard)
    redirect(url)
  },
}
</script>
