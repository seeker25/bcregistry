<template>
  <div
    id="bconline-account"
    class="container account-container"
    style="padding-bottom: 70px; padding-top: 70px"
  >
    <v-container fluid no-gutters class="pl-0 ma-0 pr-10">
      <div class="menu-title">BC OnLine Accounts</div>
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="8" class="menu-info"
          >BC OnLine provides convenient online access to government
          information products, filings and registrations for private and
          public sector business customers.</v-col
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
            <p class="ma-0 pt-8 pb-6">
              Incorporate, register, and manage B.C. or extraprovincial
              corporations except for benefit companies.
            </p>
          </v-card-text>
        </v-card>

        <v-card elevation="2" max-width="375px" class="mr-5 mb-8">
          <v-card-title class="menu-header">
            <span class="menu-item-title">Name Request Online (NRO)</span>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text class="menu-item pl-7 pr-7">
            <p class="ma-0 pt-8 pb-6">
              Research or request a name for your new or existing B.C. business.
            </p>
          </v-card-text>
        </v-card>

        <v-card elevation="2" max-width="375px" class="mr-5 mb-8">
          <v-card-title class="menu-header">
            <span class="menu-item-title">Personal Property Registry</span>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text class="menu-item pl-7 pr-7">
            <p>
              Personal property registrations and search for existing
              registrations.
            </p>
          </v-card-text>
        </v-card>

        <v-card elevation="2" max-width="375px" class="mr-5 mb-8">
          <v-card-title class="menu-header">
            <span class="menu-item-title">Manufactured Homes Registry</span>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text class="menu-item pl-7 pr-7">
            <p class="ma-0 pt-8 pb-6">
              Registrations and search for manufactured and mobile homes.
            </p>
          </v-card-text>
        </v-card>

        <v-card elevation="2" max-width="375px" class="mr-5 mb-8">
          <v-card-title class="menu-header">
            <span class="menu-item-title">Wills Registry</span>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text class="menu-item pl-7 pr-7">
            <p class="ma-0 pt-8 pb-6">
              File a Wills Notice or search for an existing Wills Notice.
              <span style="font-weight: bold"
                >Wills Registry will also be available through the BC
                Registries account soon.</span
              >
            </p>
          </v-card-text>
        </v-card>

        <v-card
          elevation="2"
          max-width="375px"
          class="mr-5 mb-8 justify-center"
        >
          <v-card-title class="menu-header">
            <span class="menu-item-title">Address Change BC</span>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text class="menu-item pl-7 pr-7">
            <p class="ma-0 pt-8 pb-6">
              Update your personal and/or business records with provincial and
              local government organizations.
            </p>
          </v-card-text>
        </v-card>
      </v-card>

      <div class="payment ma-0 pt-7 pb-7 mr-10">
        <v-row no-gutters class="ma-0 pa-0">
          <v-col cols="2"></v-col>
          <v-col cols="8" class="payment-info-bold"
            ><v-icon medium color="#38598a">mdi-currency-usd-circle</v-icon
            ><span style="padding-left: 10px">BC OnLine payments</span></v-col
          >
          <v-col cols="2"> </v-col>
        </v-row>
        <v-row no-gutters class="ma-0 pa-0">
          <v-col cols="3"></v-col>
          <v-col cols="6" class="payment-info" style="max-width: 850px"
            >All payments for BC OnLine accounts are made using pre-authorized
            BC OnLine account payments.
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
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/theme.scss';

.bg-gray1 {
  background-color: $gray1;
}
</style>
