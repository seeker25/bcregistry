<template>
  <v-app id="app">
    <SbcHeader class="sbc-header" />

    <!-- Alert banner -->
    <v-alert
      v-if="bannerText"
      tile dense
      type="warning"
      class="mb-0 text-center color-dk-text"
      v-html="bannerText"
    />

    <Breadcrumb v-if="isShowBreadcrumb" />
    <nuxt class="app-body" />
    <SbcFooter />
  </v-app>
</template>

<script lang="ts">
import SbcFooter from 'sbc-common-components/src/components/SbcFooter.vue'
import SbcHeader from 'sbc-common-components/src/components/SbcHeader.vue'
import Breadcrumb from '~/components/Breadcrumb.vue'
import { getFeatureFlag } from '~/utils'
import { isLoginRoute } from '@/utils'

export default {
  components: {
    SbcFooter,
    SbcHeader,
    Breadcrumb,
  },
  // initialize Keycloak before rendering any pages
  middleware: ['initKeycloak'],
  computed: {
    isShowBreadcrumb (): boolean {
      return !isLoginRoute()
    },
    bannerText (): string {
      const bannerText: string = getFeatureFlag('banner-text')

      // remove spaces so that " " becomes falsy
      return bannerText?.trim()
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
