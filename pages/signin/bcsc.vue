<template>
  <div></div>
</template>

<script lang="ts">
// This component is loaded when user selects menu option to login using BCSC.
export default {
  asyncData ({ $config, redirect }) {
    // redirect to Auth to sign in and then return to dashboard
    const redirectURL = $config.authURL + 'signin/bcsc/' +
      encodeURIComponent($config.baseURL + 'dashboard')
    redirect(redirectURL)
  },
}
</script>
