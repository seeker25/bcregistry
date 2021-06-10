<template>
  <div class="account-container">
    <v-container no-gutters>
      <div class="menu-title">PPR Marketing Page (In Progress)</div>
      <!--
      <v-row class="button-row">
        <v-col cols="12">
          <v-btn
            class="button-login"
            href="https://ppr-ui-dev.apps.silver.devops.gov.bc.ca/ppr"
            >BC Services Card</v-btn
          >
        </v-col>
      </v-row>
      <v-row class="button-row">
        <v-col cols="12">
          <v-btn
            class="button-login"
            href="https://ppr-ui-dev.apps.silver.devops.gov.bc.ca/ppr"
            >BCeID</v-btn
          >
        </v-col>
      </v-row>
      <v-row class="button-row">
        <v-col cols="12">
          <v-btn
            class="button-login"
            href="https://ppr-ui-dev.apps.silver.devops.gov.bc.ca/ppr"
            >IDIR</v-btn
          >
        </v-col>
      </v-row>
      -->
      <v-row class="button-row">
        <v-col cols="12">
          <v-btn
            class="button-login"
            href="https://ppr-ui-dev.apps.silver.devops.gov.bc.ca/ppr"
            >Go to the Personal Property Registry</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
@import '@/assets/scss/theme.scss';

.menu-title {
  font-size: 32px;
  font-weight: bold;
  color: #212529;
  padding-top: 100px;
  text-align: center;
}
.button-row {
  width: 100%;
  padding-top: 30px;
  text-align: center;
}

.button-login {
  color: #fff !important;
  background: #38598a !important;
  font-weight: bold;
  font-size: 12px;
}
</style>
