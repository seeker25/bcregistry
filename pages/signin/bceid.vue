<template>
  <div></div>
</template>

<script>
// Required for generated site to work with header login.
export default {
  asyncData(context) {
    const redirectURL =
      context.$config.authURL +
      'signin/bceid/' +
      encodeURIComponent(context.$config.baseURL + 'dashboard')
    context.redirect(redirectURL)
  },
}
</script>
