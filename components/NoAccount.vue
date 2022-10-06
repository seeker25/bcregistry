<template>
  <v-container id="no-account" fluid class="account-container">
    <h2 class="account-title">Account Not Required</h2>

    <v-row no-gutters class="mt-4">
      <v-col cols="2"></v-col>
      <v-col cols="8" class="account-info-bold">
        The following services do not require an account:
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>

    <div class="d-flex justify-center flex-wrap bg-gray1 pt-4 pb-7">
      <!-- Name Requests -->
      <v-card elevation="2">
        <v-card-title>Name Requests</v-card-title>

        <v-card-text>
          <p>
            Research and request a name for your new or existing B.C. business.
          </p>

          <div>
            <a
              class="link"
              :href="$config.nameRequestURL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Go to Name Request</span>
            </a>
            <v-icon dense color="primary">mdi-open-in-new</v-icon>
          </div>
        </v-card-text>
      </v-card>

      <!-- Business BCeID -->
      <v-card elevation="2">
        <v-card-title>Business BCeID</v-card-title>

        <v-card-text>
          <p>
            Provides you secure online access to services that accept Business BCeID.
            It proves who you are and which business you're associated with.
          </p>

          <div>
            <a
              class="link"
              :href="$config.bceidURL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Go to BCeID</span>
            </a>
            <v-icon dense color="primary">mdi-open-in-new</v-icon>
          </div>
        </v-card-text>
      </v-card>
    </div>

    <div class="payment py-7">
      <div class="payment-info-title text-center">
        <img src="@/assets/svgs/currency-usd-circle.svg" />
        <span style="padding-left: 10px">Credit card payments:</span>
      </div>

      <v-row no-gutters class="mt-2">
        <v-col class="col-1 col-md-2"></v-col>
        <v-col class="col-10 col-md-8 payment-info-text">
          Credit card payments are accepted for these services.
        </v-col>
        <v-col class="col-1 col-md-2"></v-col>
      </v-row>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/theme.scss';

img {
  margin-bottom: -6px;
}
</style>
