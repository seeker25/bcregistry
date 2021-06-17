<template>
  <!-- div id="app" class="app-container" -->
  <v-app id="app" class="app-container">
    <SbcHeaderStatic />
    <div class="app-body">
      <nuxt />
    </div>
    <ContactInfo />
    <SbcFooterStatic />
  </v-app>
  <!-- /div -->
</template>
<script>
// import SbcHeader from 'sbc-common-components/src/components/SbcHeader.vue'
import SbcHeaderStatic from '~/components/SbcHeaderStatic.vue'
import SbcFooterStatic from '~/components/SbcFooterStatic.vue'
import ContactInfo from '~/components/ContactInfo.vue'
export default {
  components: {
    // SbcHeader,
    SbcHeaderStatic,
    SbcFooterStatic,
    ContactInfo,
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

.container,
.nuxt-content {
  margin: 0 auto;
  width: 100%;
  max-width: 1400px;
  padding: 0 2rem;
}

.nuxt-content {
  max-width: 100%;
  padding-top: 3rem;
  padding-bottom: 3rem;
}
</style>
