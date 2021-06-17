<template>
  <div
    id="direct-account"
    class="account-container"
    style="padding-bottom: 70px; padding-top: 70px"
  >
    <v-container no-gutters style="padding-bottom: 30px">
      <div class="menu-title">Individual / Direct Accounts</div>
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="8" class="menu-info"
          >Specific sites dedicated to incorporating, registering and
          maintaining corporations, businesses and societies. In the future,
          these services will be moved to the new BC Registries account
          system.</v-col
        >
        <v-col cols="2"></v-col>
      </v-row>
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="8" class="menu-info-bold"
          >Individual accounts are available for the following services:</v-col
        >
        <v-col cols="2"></v-col>
      </v-row>

      <v-card
        flat
        class="d-md-flex flex-wrap"
        style="background-color: #f1f3f5; padding-top: 30px"
      >
        <v-card flat max-width="350px" class="mr-5 mb-7">
          <v-card-title class="menu-header">
            <span class="menu-item-title">Corporate Registry</span>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text class="menu-item">
            <p>
              Incorporate, register, and manage BC or extraprovincial
              corporations except for benefit companies.
            </p>
            <p style="padding-top: 30px">
              <a
                :href="$config.colinURL"
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to Corporate Online
              </a>
              <v-icon class="pl-1" color="primary" dark dense
                >mdi-open-in-new</v-icon
              >
            </p>
          </v-card-text>
        </v-card>
        <v-card flat max-width="350px" class="mr-5 mb-7">
          <v-card-title class="menu-header">
            <span class="menu-item-title">OneStop Business Registry</span>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text class="menu-item">
            <p>
              Registration for sole proprietorships, general partnerships, and
              "Doing business as" (DBA) names.
            </p>
            <p style="padding-top: 30px">
              <a
                :href="$config.onestopURL"
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to OneStop
              </a>
              <v-icon class="pl-1" color="primary" dark dense
                >mdi-open-in-new</v-icon
              >
            </p>
          </v-card-text>
        </v-card>
        <v-card flat max-width="350px" class="mr-5 mb-7">
          <v-card-title class="menu-header">
            <span class="menu-item-title">Societies Online</span>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text class="menu-item">
            <p>
              Registration and management of BC and extraprovincial societies.
            </p>
            <p style="padding-top: 30px">
              <a
                :href="$config.societiesURL"
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to Societies Online
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
          >Credit card payments are acceped for these individual/direct
          accounts.
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
