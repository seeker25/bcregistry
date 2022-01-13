<template>
  <v-container id="bconline-account" fluid class="account-container">
    <h2 class="account-title">BC OnLine Accounts</h2>

    <v-row no-gutters class="mt-3">
      <v-col cols="2"></v-col>
      <v-col cols="8" class="account-info">
        BC OnLine provides convenient online access to government
        information products, filings and registrations for private
        and public sector business customers.
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>

    <v-row no-gutters class="mt-4">
      <v-col cols="2"></v-col>
      <v-col cols="8" class="account-info-bold">
        Your BC OnLine account supports the following services:
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>

    <div class="d-flex flex-wrap justify-center bg-gray1 pt-4 pb-7">
      <!-- Corporate Registry -->
      <v-card elevation="2">
        <v-card-title>Corporate Registry</v-card-title>

        <v-card-text>
          <p>
            Incorporate, register, and manage B.C. or extraprovincial
            corporations except for benefit companies.
          </p>
        </v-card-text>
      </v-card>

      <!-- Name Request Online (NRO) -->
      <v-card elevation="2" max-width="390px" class="ma-4 deactivated">
        <v-card-title>
          <span class="word-break-normal">Name Request Online (NRO)</span>
          <span class="card-title-badge-container">
            <div class="card-title-badge">MOVED</div>
          </span>
        </v-card-title>

        <v-card-text>
          <p>
            Name Request Online is now Name Request and is
            accessed through your BC Registries account.
          </p>
        </v-card-text>
      </v-card>

      <!-- Personal Property Registry -->
      <v-card elevation="2">
        <v-card-title>Personal Property Registry</v-card-title>

        <v-card-text>
          <p>
            Personal property registrations and search for existing registrations.
            <span class="font-weight-bold">The Personal Property Registry will be
              moved to the BC Registries account soon.</span>
          </p>
        </v-card-text>
      </v-card>

      <!-- Manufactured Homes Registry -->
      <v-card elevation="2">
        <v-card-title>Manufactured Homes Registry</v-card-title>

        <v-card-text>
          <p>
            Registrations and search for manufactured and mobile homes.
          </p>
        </v-card-text>
      </v-card>

      <!-- Wills Registry -->
      <v-card elevation="2">
        <v-card-title>Wills Registry</v-card-title>

        <v-card-text>
          <p>
            File a Wills Notice or search for an existing Wills Notice.
            <span class="font-weight-bold"> Wills Registry will also be
              available through the BC Registries account soon.</span>
          </p>
        </v-card-text>
      </v-card>

      <!-- BC Assessment -->
      <v-card elevation="2">
        <v-card-title>BC Assessment</v-card-title>

        <v-card-text>
          <p>
            Search the BC Assessment database for information about BC
            properties and property assessments.
          </p>
        </v-card-text>
      </v-card>

      <!-- Rural Property Tax -->
      <v-card elevation="2">
        <v-card-title>Rural Property Tax</v-card-title>

        <v-card-text>
          <p>
            Search property tax records for rural properties in B.C.
            (excluding municipal properties, indigenous lands and charges
            levied by a Regional District or Improvement District).
          </p>
        </v-card-text>
      </v-card>

      <!-- Site Registry -->
      <v-card elevation="2">
        <v-card-title>Site Registry</v-card-title>

        <v-card-text>
          <p>
            Search for information retained by the provincial government on
            the environmental condition of land as a routine part of due
            diligence searches by land transaction professionals.
          </p>
        </v-card-text>
      </v-card>

      <!-- Court Services Online (CSO) -->
      <v-card elevation="2">
        <v-card-title>Court Services Online (CSO)</v-card-title>

        <v-card-text>
          <p>
            Perform court file searches and electronically file court
            documents in all courts in B.C. Customers can also purchase
            court documents through BC OnLine.
          </p>
        </v-card-text>
      </v-card>
    </div>

    <div class="payment py-7">
      <v-row no-gutters>
        <v-col class="col-3"></v-col>
        <v-col cols="6" class="payment-info-title">
          <img src="@/assets/svgs/currency-usd-circle.svg" />
          <span style="padding-left: 10px">BC OnLine payments:</span>
        </v-col>
        <v-col class="col-3"> </v-col>
      </v-row>

      <v-row no-gutters class="mt-2">
        <v-col class="col-3"></v-col>
        <v-col cols="6" class="payment-info-text">
          All payments for BC OnLine accounts are made using pre-authorized
          BC OnLine account payments.
        </v-col>
        <v-col class="col-3"></v-col>
      </v-row>

      <div class="text-center mt-5">
        <v-btn large class="button-white-on-blue" :href="$config.bcolURL">
          Log in to my BC OnLine Account
        </v-btn>
      </div>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
@import '../assets/scss/theme.scss';

img {
  margin-bottom: -6px;
}

.v-card.deactivated {
  .v-card__title {
    background-color: $app-lt-blue;
  }

  .v-card__text {
    background-color: $gray0;
  }
}

// "sm" breakpoint
@media (max-width: 599px) {
  .v-btn {
    width: 100%;
  }
}
</style>
