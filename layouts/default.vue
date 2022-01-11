<template>
  <v-app id="app" class="app-container">
    <SbcHeader class="sbc-header" :in-auth="false" :show-actions="true" />
    <Breadcrumb class="wide-10" />
    <div class="app-body">
      <nuxt />
    </div>
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

@media (min-width: 960px) {
  .app-header {
    flex: 0 0 auto;
    height: 70px;
    z-index: 2;
  }
}

@media (max-width: 960px) {
  .app-header {
    height: 100px !important;
    padding: 0 10px;
  }
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

@media (min-width: 960px) {
  .wide-10 {
    padding-right: 40px;
    padding-left: 40px;
  }
}
</style>
