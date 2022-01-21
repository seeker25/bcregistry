<template>
  <v-menu bottom transition="slide-y-transition">
    <template #activator="{ on, attrs }">
      <v-btn
        large
        class="sbc-signin-button button-white-on-blue"
        aria-label="log in"
        v-bind="attrs"
        v-on="on"
      >
        <span>Log in to my BC Registries Account</span>
        <v-icon class="mr-n1 pl-2">mdi-menu-down</v-icon>
      </v-btn>
    </template>
    <!-- TODO: do we need ":fromLogin" and ":redirectOnLoginSuccess" here? -->
    <SbcAuthMenu />
  </v-menu>
</template>

<script lang="ts">
import SbcAuthMenu from 'sbc-common-components/src/components/SbcAuthMenu.vue'

export default {
  components: {
    SbcAuthMenu,
  },
}
</script>


<style lang="scss" scoped>
@import '@/assets/scss/theme.scss';

.v-card {
  background: white !important;
}

.v-card__title {
  color: $gray9 !important;
  font-weight: bold;
  font-size: $px-14;
  line-height: 20px;
}

.v-list-item__title {
  color: $gray9 !important;
  font-size: $px-14 !important;
}
</style>
