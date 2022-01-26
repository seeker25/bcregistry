<template>
  <v-app id="app">
    <SbcHeader class="sbc-header" />
    <Breadcrumb v-if="isShowBreadcrumb" />
    <nuxt class="app-body" />
    <SbcFooter />
  </v-app>
</template>

<script lang="ts">
import SbcFooter from 'sbc-common-components/src/components/SbcFooter.vue'
import SbcHeader from 'sbc-common-components/src/components/SbcHeader.vue'
import Breadcrumb from '~/components/Breadcrumb.vue'
import { isLoginRoute } from '@/utils'

export default {
  components: {
    SbcFooter,
    SbcHeader,
    Breadcrumb,
  },
  // run "syncSession" before rendering any pages
  // NB: cannot be run as a plugin
  middleware: ['syncSession'],
  computed: {
    isShowBreadcrumb (): boolean {
      return !isLoginRoute()
    }
  },
}
</script>

<style lang="scss">
// this imports these SCSS file app-wide
@import '@/assets/scss/base.scss';
@import '@/assets/scss/layout.scss';

#warning-modal .row {
  // it looks like the Vuetify used by NUXT sets row margins
  // to -12px all around, which breaks the SbcHeader layout,
  // so override top and bottom specifically here
  margin-top: 0;
  margin-bottom: 0; 
}
</style>
