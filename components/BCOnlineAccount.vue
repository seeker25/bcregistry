<template>
  <v-container id="bconline-account" fluid class="account-container">
    <h2 class="account-title">BC OnLine Account</h2>

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
      <v-card elevation="2" class="disabled">
        <v-card-title>
          <span>Name Request Online (NRO)</span>
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
      <v-card elevation="2" class="disabled">
        <v-card-title>
          <span>Personal Property Registry</span>
          <span class="card-title-badge-container">
            <div class="card-title-badge">MOVED</div>
          </span>
        </v-card-title>

        <v-card-text>
          <p>
            Personal property registrations and search for existing
            registrations. The Personal Property Registry has been moved
            to the BC Registries account.
          </p>
        </v-card-text>
      </v-card>

      <!-- Manufactured Homes Registry -->
      <v-card elevation="2">
        <v-card-title>Manufactured Homes Registry</v-card-title>

        <v-card-text>
          <p>
            Manage manufactured home registrations, and search for manufactured
            homes and personal property liens on homes.
          </p>
          <p v-if="showMhrFlag" class="mt-3">
            <strong>Note: </strong>A beta version of Manufactured Home Registry
            search is now available through the BC Registries account.
          </p>
        </v-card-text>
      </v-card>

      <!-- Wills Registry -->
      <v-card elevation="2" class="disabled">
        <v-card-title>Wills Registry
          <span class="card-title-badge-container">
            <div class="card-title-badge">MOVED</div>
          </span>
        </v-card-title>
        <v-card-text>
          <p>
            File a Wills Notice or search for an existing Wills Notice.
            The Wills Registry has been moved to the BC Registries account.
          </p>
        </v-card-text>
      </v-card>

      <!-- BC Assessment -->
      <v-card elevation="2" :class="showBCAFlag ? 'disabled': ''">
        <v-card-title>BC Assessment
          <span v-if="showBCAFlag" class="card-title-badge-container">
            <div class="card-title-badge">MOVED</div>
          </span>
        </v-card-title>
        <v-card-text>
          <p>
            Generate a BC Assessment report to find real property ownership or location information,
             obtain property assessment information or obtain residential property inventory details
             for properties within British Columbia.
            <span v-if="showBCAFlag">
              BC Assessment has been moved to the BC Registries account.
            </span>
          </p>
        </v-card-text>
      </v-card>

      <!-- Rural Property Tax Search -->
      <v-card elevation="2" class="disabled">
        <v-card-title>
          <span> Rural Property Tax Search</span>
          <span class="card-title-badge-container">
            <div class="card-title-badge">MOVED</div>
          </span>
        </v-card-title>

        <v-card-text>
          <p>
            Search property tax records for rural properties in B.C.
            Rural Property Tax Search has been moved to the BC Registries account.
          </p>
        </v-card-text>
      </v-card>

      <!-- Site Registry -->
      <v-card elevation="2" :class="showESRAFlag ? 'disabled': ''">
        <v-card-title>Site Registry
          <span v-if="showESRAFlag" class="card-title-badge-container">
            <div class="card-title-badge">MOVED</div>
          </span>
        </v-card-title>
        <v-card-text>
          <p>
            Search for information retained by the B.C. government on
            the environmental condition of land. <span v-if="showESRAFlag">
            Site Registry has been moved to the BC Registries account.
            </span>
          </p>
        </v-card-text>
      </v-card>

      <!-- Court Services Online (CSO) -->
      <v-card elevation="2" :class="showCSOFlag ? 'disabled': ''">
        <v-card-title>Court Services Online (CSO)
          <span v-if="showCSOFlag" class="card-title-badge-container">
            <div class="card-title-badge">MOVED</div>
          </span>
        </v-card-title>
        <v-card-text>
          <p>
            Perform court file searches, purchase documents, and electronically file court
            documents in all courts in B.C. <span v-if="showCSOFlag">
            Court Services Online has been moved to the BC Registries account.
            </span>
          </p>
        </v-card-text>
      </v-card>
    </div>

    <div class="payment py-7">
      <div class="payment-info-title text-center">
        <img src="@/assets/svgs/currency-usd-circle.svg" />
        <span style="padding-left: 10px">BC OnLine payments:</span>
      </div>

      <v-row no-gutters class="mt-2">
        <v-col class="col-1 col-md-2"></v-col>
        <v-col class="col-10 col-md-8 payment-info-text">
          All payments for BC OnLine accounts are made using pre-authorized
          BC OnLine account payments.
        </v-col>
        <v-col class="col-1 col-md-2"></v-col>
      </v-row>

      <div class="text-center mt-5">
        <v-btn large class="button-white-on-blue" :href="$config.bcolURL">
          Log in to my BC OnLine Account
        </v-btn>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import { appendAccountId } from 'sbc-common-components/src/util/common-util'
  import { getFeatureFlag } from '~/utils'

  @Component({})
  export default class BCOnlineAccount extends Vue {
    readonly appendAccountId = appendAccountId // for use in template

    get showESRAFlag (): boolean {
      return getFeatureFlag('bcregistry-ui-esra-enabled') as boolean
    }

    get showCSOFlag (): boolean {
      return getFeatureFlag('bcregistry-ui-cso-enabled') as boolean
    }

    get showBCAFlag (): boolean {
      return getFeatureFlag('bcregistry-ui-bca-enabled') as boolean
    }

    get showMhrFlag (): boolean {
      return getFeatureFlag('bcregistry-ui-mhr-enabled') as boolean
    }
  }
  </script>

<style lang="scss" scoped>
@import '@/assets/scss/theme.scss';

img {
  margin-bottom: -6px;
}

.v-card.disabled {
  background-color: $gray0;

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
