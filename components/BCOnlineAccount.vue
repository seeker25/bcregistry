<template>
  <div
    class="account-container"
    style="padding-bottom: 70px; padding-top: 70px"
  >
    <v-container no-gutters style="padding-bottom: 30px">
      <div class="menu-title">BC OnLine Accounts</div>
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="8" class="menu-info"
          >BC OnLine provides convenient online access to government information
          products, filings and registrations for private and public sector
          business customers.</v-col
        >
        <v-col cols="2"></v-col>
      </v-row>
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="8" class="menu-info-bold"
          >Your BC OnLine account supports the following services:</v-col
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
              Incorporate, register, and manage BC or extraprovincial
              corporations except for benefit companies.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4" style="pr-5">
          <v-card>
            <v-card-title class="menu-header">
              <span class="menu-item-title">Name Request Online (NRO)</span>
              <v-spacer></v-spacer>
            </v-card-title>
            <v-card-text class="menu-item">
              Research or request a name for your new or existing BC business.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4" style="pr-5">
          <v-card>
            <v-card-title class="menu-header">
              <span class="menu-item-title">Personal Property Registry</span>
              <v-spacer></v-spacer>
            </v-card-title>
            <v-card-text class="menu-item">
              Personal property registrations and search for existing
              registrations.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="padding-top:30px">
        <v-col cols="4" style="pr-5">
          <v-card>
            <v-card-title class="menu-header">
              <span class="menu-item-title">Manufactured Homes Registry</span>
              <v-spacer></v-spacer>
            </v-card-title>
            <v-card-text class="menu-item">
              Registrations and search for manufactured and mobile homes.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4" style="pr-5">
          <v-card>
            <v-card-title class="menu-header">
              <span class="menu-item-title">Wills Registry</span>
              <v-spacer></v-spacer>
            </v-card-title>
            <v-card-text class="menu-item">
              File a Wills Notice or search for an existing Wills Notice.
              <span style="font-weight: bold"
                >Wills Registry will also be available through the BC Registries
                Account soon.</span
              >
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4" style="pr-5">
          <v-card>
            <v-card-title class="menu-header">
              <span class="menu-item-title">Address Change BC</span>
              <v-spacer></v-spacer>
            </v-card-title>
            <v-card-text class="menu-item">
              Update your personal and/or business records with provincial and
              local government organizations.
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
          ><span style="padding-left: 10px">BC OnLine payments</span></v-col
        >
        <v-col cols="2"> </v-col>
      </v-row>
      <v-row>
        <v-col cols="3"></v-col>
        <v-col cols="6" class="payment-info" style="max-width: 850px"
          >All payments for BC OnLine accounts are made using pre-authorized BC
          OnLine account payments.
        </v-col>
        <v-col cols="3"></v-col>
      </v-row>
      <v-row class="button-row">
        <v-col cols="12">
          <v-btn class="button-blue" :href="$config.bcolURL"
            >Log in to my BC OnLine Account</v-btn
          >
        </v-col>
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
  color: $BCgovLink;
  font-size: 16px;
  font-weight: bold;
  text-decoration: underline;
}
</style>
