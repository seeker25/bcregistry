<template>
  <div></div>
</template>

<script lang="ts">
// This component is loaded when user selects menu option to login using IDIR.
export default {
  asyncData ({ $config, redirect }) {
    // redirect to Auth to sign in and then return to dashboard
    const url = $config.signinIdirUrl + encodeURIComponent($config.registryDashboard)
    redirect(url)
  },
}
</script>
