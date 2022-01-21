<template>
  <v-app id="app">
    <SbcHeader class="sbc-header" />
    <Breadcrumb />
    <nuxt class="app-body" />
    <SbcFooter />
  </v-app>
</template>

<script lang="ts">
import SbcFooter from 'sbc-common-components/src/components/SbcFooter.vue'
import SbcHeader from 'sbc-common-components/src/components/SbcHeader.vue'
import Breadcrumb from '~/components/Breadcrumb.vue'

export default {
  components: {
    SbcFooter,
    SbcHeader,
    Breadcrumb,
  },
  // run "syncSession" before rendering any pages
  // NB: cannot be run as a plugin
  middleware: ['syncSession'],
}
</script>

<style lang="scss">
// this imports these SCSS file app-wide
@import '@/assets/scss/base.scss';
@import '@/assets/scss/layout.scss';
</style>
