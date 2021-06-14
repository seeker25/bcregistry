<template>
  <div class="account-container">
    <v-container no-gutters>
      <div class="menu-title">PPR Marketing Page (In Progress)</div>
      <v-row class="button-row">
        <v-col cols="12">
          <SbcSigninButton />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SbcSigninButton from '~/components/SbcSigninButton.vue'
export default {
  components: {
    SbcSigninButton,
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/theme.scss';

.menu-title {
  font-size: 32px;
  font-weight: bold;
  color: #212529;
  padding-top: 100px;
  text-align: center;
}
.button-login {
  color: #fff !important;
  background: #38598a !important;
  font-weight: bold;
  font-size: 12px;
  border-radius: 0.25rem;
}
</style>
