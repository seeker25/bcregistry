<template>
  <v-app id="app">
    <SbcHeader class="sbc-header" :in-auth="false" :show-actions="true" />
    <Breadcrumb />
    <nuxt class="app-body" />
    <SbcFooter />
  </v-app>
</template>

<script>
import SbcFooter from 'sbc-common-components/src/components/SbcFooter.vue'
import SbcHeader from 'sbc-common-components/src/components/SbcHeader.vue'
import Breadcrumb from '~/components/Breadcrumb.vue'

export default {
  components: {
    SbcFooter,
    SbcHeader,
    Breadcrumb,
  },
  middleware: ['commonHeaderSetup'],
  created () {
    console.log(`${this.$config.appName} v${this.$config.appVersion}`)
  },
}
</script>

<style lang="scss">
// this imports these SCSS file app-wide
@import '@/assets/scss/base.scss';
@import '@/assets/scss/layout.scss';
</style>
