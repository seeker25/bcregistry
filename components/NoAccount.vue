<template>
  <div
    id="no-account"
    class="container account-container"
    style="padding-bottom: 70px; padding-top: 70px"
  >
    <v-container fluid no-gutters class="pl-0 ma-0 pr-10">
      <div class="menu-title">No Account Required</div>
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="8" class="menu-info-bold">The following services do not require an account:</v-col>
        <v-col cols="2"></v-col>
      </v-row>

      <v-card
        flat
        class="justify-center d-md-flex flex-wrap bg-gray1"
        style="padding-top: 30px"
      >
        <v-card elevation="2" max-width="375px" class="mb-8 mr-5">
          <v-card-title class="menu-header pr-0 mr-0">
            <v-row>
              <v-col cols="9">
                <span class="menu-item-title">Name Requests (Beta)</span>
              </v-col>
              <v-col cols="3">
                <v-row>
                  <v-col cols="auto" class="menu-title-badge ml-3 mr-2 pt-0">NEW</v-col>
                </v-row>
                <v-row>
                  <v-col cols="auto"></v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-text class="menu-item pl-7 pr-7">
            <p class="ma-0 pt-8 pb-0">
              Research and request a name for your new or existing B.C. business.
            </p>
            <p class="pt-7 ma-0 pb-6">
              <a
                :href="$config.nameRequestURL"
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to Name Request
              </a>
              <v-icon class="pl-1" color="primary" dark dense>mdi-open-in-new</v-icon>
            </p>
          </v-card-text>
        </v-card>
      </v-card>

      <div class="payment pt-7 pb-7 mr-10">
        <v-row no-gutters class="ma-0 pa-0">
          <v-col cols="2"></v-col>
          <v-col cols="8" class="payment-info-bold">
            <v-icon medium color="#38598a">mdi-currency-usd-circle</v-icon>
            <span style="padding-left: 10px">Credit card payments</span>
          </v-col>
          <v-col cols="2"></v-col>
        </v-row>

        <v-row no-gutters class="ma-0 pa-0">
          <v-col cols="2"></v-col>
          <v-col cols="8" class="payment-info">Credit card payments are accepted for these services.</v-col>
          <v-col cols="2"></v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/theme.scss';

a {
  color: $BCgovLink !important;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: underline;
}

.bg-gray1 {
  background-color: $gray1;
}
</style>
