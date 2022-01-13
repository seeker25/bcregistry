<template>
  <v-app id="app" class="app-container">
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
@import '@/assets/scss/base.scss';
@import '@/assets/scss/layout.scss';

.app-container {
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
}

.theme--light.v-application {
  background-color: var(--v-background-base, $gray1) !important;
}

.app-body {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  position: relative;
}

// #__nuxt,
// #__layout {
//   min-height: 100vh;
// }

.nuxt-content {
  margin: 0;
  width: 100%;
  padding-top: 3rem;
  padding-bottom: 3rem;
}
</style>
