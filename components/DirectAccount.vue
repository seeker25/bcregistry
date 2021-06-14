<template>
  <div
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
      <v-row class="padding-top:30px">
        <v-col cols="4" style="pr-5">
          <v-card>
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
                <v-icon color="#212529" size="16px">mdi-open-in-new</v-icon>
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4" style="pr-5">
          <v-card>
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
                <v-icon color="#212529" size="16px">mdi-open-in-new</v-icon>
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4" style="pr-5">
          <v-card>
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
                <v-icon color="#212529" size="16px">mdi-open-in-new</v-icon>
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
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
@import '@/assets/scss/theme.scss';

ul {
  list-style: square;
  /* list-style-type: square; /* Remove default bullets */
  padding-left: 30px;
}

ul li::before {
  /* content: '\2022'; /* Add content: \2022 is the CSS Code/unicode for a bullet */
  color: $gray3; /* Change the color */
  font-weight: bold; /* If you want it to be bold */
  display: inline-block; /* Needed to add space between the bullet and the text */
  width: 1em; /* Also needed for space (tweak if needed) */
  margin-left: -1em; /* Also needed for space (tweak if needed) */
}

a {
  color: $gray9;
  font-size: 16px;
  font-weight: bold;
  text-decoration: underline;
}
</style>
