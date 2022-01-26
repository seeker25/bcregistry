<template>
  <!-- don't display component errors -->
  <v-app dark>
    <template v-if="error.statusCode !== 500">
      <h1 v-if="error.statusCode === 404">
        {{ pageNotFound }}
      </h1>
      <h1 v-else>
        {{ otherError }}
      </h1>
      <NuxtLink to="/"> Home page </NuxtLink>
    </template>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head () {
    switch (this.error.statusCode) {
      case 404: return { title: this.pageNotFound }
      case 500: return {}
      default: return { title: this.otherError }
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/theme.scss';

h1 {
  font-size: $px-20;
}
</style>
