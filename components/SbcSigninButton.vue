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
        <span>Log in to my Service BC Connect Account</span>
        <v-icon class="mr-n1 pl-2">mdi-menu-down</v-icon>
      </v-btn>
    </template>
    <SbcAuthMenu />
  </v-menu>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SbcAuthMenu from 'sbc-common-components/src/components/SbcAuthMenu.vue'

@Component({
  components: {
    SbcAuthMenu
  }
})
export default class SbcSigninButton extends Vue {}
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
