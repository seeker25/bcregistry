<template>
  <v-app id="app" class="app-container">
    <sbc-header class="sbc-header" :in-auth="false" :show-actions="true" />
    <Breadcrumb />
    <div class="app-body">
      <nuxt />
    </div>
    <ContactInfo />
    <SbcFooter />
  </v-app>
</template>

<script>
import SbcFooter from 'sbc-common-components/src/components/SbcFooter.vue'
import SbcHeader from 'sbc-common-components/src/components/SbcHeader.vue'
import ContactInfo from '~/components/ContactInfo.vue'
import Breadcrumb from '~/components/Breadcrumb.vue'
export default {
  components: {
    SbcFooter,
    SbcHeader,
    ContactInfo,
    Breadcrumb,
  },
  middleware: ['commonHeaderSetup'],
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

.app-header {
  flex: 0 0 auto;
  height: 70px;
  z-index: 2;
}

.theme--light.v-application {
  background-color: var(--v-background-base, #f1f3f5) !important;
}

.app-body {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  position: relative;
}

.app-footer {
  flex: 0 0 auto;
}

#__nuxt,
#__layout {
  min-height: 100vh;
}

.app-container .app-header {
  position: sticky;
  top: 0;
}

.nuxt-content {
  margin: 0;
  width: 100%;
  padding-top: 3rem;
  padding-bottom: 3rem;
}
</style>
