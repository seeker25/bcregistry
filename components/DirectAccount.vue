<template>
  <v-container id="direct-account" fluid class="account-container">
    <h2 class="account-title">Individual / Direct Accounts</h2>

    <v-row no-gutters class="mt-3">
      <v-col cols="2"></v-col>
      <v-col cols="8" class="account-info">
        Specific sites dedicated to incorporating, registering and
        maintaining corporations, businesses and societies. In the future,
        these services will be moved to the new BC Registries account
        system.
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>

    <v-row no-gutters class="mt-4">
      <v-col cols="2"></v-col>
      <v-col cols="8" class="account-info-bold">
        Individual accounts are available for the following services:
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>

    <div class="d-flex flex-wrap justify-center bg-gray1 pt-4 pb-7">
      <!-- Corporate Registry -->
      <v-card elevation="2">
        <v-card-title>Corporate Registry</v-card-title>

        <v-card-text>
          <p>
            Incorporate, register and manage B.C. or extraprovincial
            corporations except for benefit companies.
          </p>

          <div>
            <a
              :href="$config.colinURL"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to Corporate Online
            </a>
            <v-icon class="pl-1" color="primary" dark dense>mdi-open-in-new</v-icon>
          </div>
        </v-card-text>
      </v-card>

      <!-- OneStop Business Registry -->
      <v-card elevation="2">
        <v-card-title>OneStop Business Registry</v-card-title>

        <v-card-text>
          <p>
            Registration for sole proprietorships, general partnerships, and
            "Doing business as" (DBA) names.
          </p>

          <div>
            <a
              :href="$config.onestopURL"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to OneStop
            </a>
            <v-icon class="pl-1" color="primary" dark dense>mdi-open-in-new</v-icon>
          </div>
        </v-card-text>
      </v-card>

      <!-- Societies Online -->
      <v-card elevation="2">
        <v-card-title>Societies Online</v-card-title>

        <v-card-text>
          <p>
            Registration and management of B.C. and extraprovincial societies.
          </p>

          <div>
            <a
              :href="$config.societiesURL"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to Societies Online
            </a>
            <v-icon class="pl-1" color="primary" dark dense>mdi-open-in-new</v-icon>
          </div>
        </v-card-text>
      </v-card>

      <!-- Address Change BC -->
      <v-card elevation="2">
        <v-card-title>Address Change BC</v-card-title>

        <v-card-text>
          <p>
            Update your personal and/or business records with provincial and
            local government organizations.
          </p>

          <div>
            <a
              :href="$config.addressChangeURL"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to Address Change BC
            </a>
            <v-icon class="pl-1" color="primary" dark dense>mdi-open-in-new</v-icon>
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
          Credit card payments are accepted for these individual/direct accounts.
        </v-col>
        <v-col class="col-1 col-md-2"></v-col>
      </v-row>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/theme.scss';

a {
  color: $BCgovLink !important;
  font-size: $px-16;
  font-weight: bold;
  text-decoration: underline;
}

img {
  margin-bottom: -6px;
}
</style>
