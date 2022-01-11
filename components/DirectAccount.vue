<template>
  <div
    id="direct-account"
    class="container account-container"
    style="padding-bottom: 70px; padding-top: 70px"
  >
    <v-container fluid no-gutters class="pl-0 ma-0 pr-10">
      <div class="menu-title">Individual / Direct Accounts</div>
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="8" class="menu-info">
          Specific sites dedicated to incorporating, registering and
          maintaining corporations, businesses and societies. In the future,
          these services will be moved to the new BC Registries account
          system.
        </v-col>
        <v-col cols="2"></v-col>
      </v-row>
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="8" class="menu-info-bold">
          Individual accounts are available for the following services:
        </v-col>
        <v-col cols="2"></v-col>
      </v-row>

      <v-card
        flat
        class="d-md-flex flex-wrap justify-center bg-gray1"
        style="padding-top: 30px"
      >
        <v-card elevation="2" max-width="375px" class="mr-5 mb-8">
          <v-card-title class="menu-header">
            <span class="menu-item-title">Corporate Registry</span>
            <v-spacer></v-spacer>
          </v-card-title>

          <v-card-text class="menu-item pl-7 pr-7">
            <p class="ma-0 pt-8 pb-0">
              Incorporate, register, and manage B.C. or extraprovincial
              corporations except for benefit companies.
            </p>
            <p class="pt-7 ma-0 pb-6">
              <a
                :href="$config.colinURL"
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to Corporate Online
              </a>
              <v-icon class="pl-1" color="primary" dark dense>mdi-open-in-new</v-icon>
            </p>
          </v-card-text>
        </v-card>

        <v-card elevation="2" max-width="375px" class="mr-5 mb-8">
          <v-card-title class="menu-header">
            <span class="menu-item-title">OneStop Business Registry</span>
            <v-spacer></v-spacer>
          </v-card-title>

          <v-card-text class="menu-item pl-7 pr-7">
            <p class="ma-0 pt-8 pb-0">
              Registration for sole proprietorships, general partnerships, and
              "Doing business as" (DBA) names.
            </p>
            <p class="pt-7 ma-0 pb-6">
              <a
                :href="$config.onestopURL"
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to OneStop
              </a>
              <v-icon class="pl-1" color="primary" dark dense>mdi-open-in-new</v-icon>
            </p>
          </v-card-text>
        </v-card>

        <v-card elevation="2" max-width="375px" class="mr-5 mb-8">
          <v-card-title class="menu-header">
            <span class="menu-item-title">Societies Online</span>
            <v-spacer></v-spacer>
          </v-card-title>

          <v-card-text class="menu-item pl-7 pr-7">
            <p class="ma-0 pt-8 pb-0">
              Registration and management of B.C. and extraprovincial societies.
            </p>
            <p class="pt-7 ma-0 pb-6">
              <a
                :href="$config.societiesURL"
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to Societies Online
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
          <v-col cols="8" class="payment-info">
            Credit card payments are accepted for these individual/direct accounts.
          </v-col>
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
