<template>
  <div
    id="no-account"
    class="account-container"
    style="padding-bottom: 70px; padding-top: 70px"
  >
    <v-container no-gutters style="padding-bottom: 30px">
      <div class="menu-title">No Account Required</div>
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="8" class="menu-info-bold"
          >The following services do not require an account:</v-col
        >
        <v-col cols="2"></v-col>
      </v-row>

      <v-card
        flat
        class="justify-center d-md-flex flex-wrap"
        style="background-color: #f1f3f5; padding-top: 30px"
      >
        <v-card flat max-width="350px" class="mr-5">
          <v-card-title class="menu-header">
            <v-row>
              <v-col cols="9"
                ><span class="menu-item-title"
                  >Name Requests (Beta)</span
                ></v-col
              >
              <v-col cols="3">
                <v-row>
                  <v-col cols="auto" class="menu-title-badge">NEW</v-col>
                </v-row>
                <v-row>
                  <v-col cols="auto"></v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-text class="menu-item">
            <p>
              Research and request a name for your new or existing BC existing
              BC business.
            </p>
            <p style="padding-top: 30px">
              <a
                :href="$config.nameRequestURL"
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to Name Request
              </a>
              <v-icon class="pl-1" color="primary" dark dense
                >mdi-open-in-new</v-icon
              >
            </p>
          </v-card-text>
        </v-card>
      </v-card>
    </v-container>
    <div class="payment">
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="8" class="payment-info-bold"
          ><v-icon medium color="#38598a">mdi-currency-usd-circle</v-icon
          ><span style="padding-left: 10px">Credit card payments</span></v-col
        >
        <v-col cols="2"> </v-col>
      </v-row>
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="8" class="payment-info"
          >Credit card payments are acceped for these services.
        </v-col>
        <v-col cols="2"></v-col>
      </v-row>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
@import '../assets/scss/theme.scss';

a {
  color: $BCgovLink !important;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: underline;
}
</style>
