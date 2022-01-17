<template>
  <v-container id="bcregistries-account" fluid class="account-container">
    <h2 class="account-title">BC Registries Account</h2>

    <v-row no-gutters class="mt-3">
      <v-col cols="2"></v-col>
      <v-col cols="8" class="account-info">
        As we work to modernize our digital registries services, features
        from other account types are gradually being moved to the new BC
        Registries account system.
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>

    <v-row no-gutters class="mt-4">
      <v-col cols="2"></v-col>
      <v-col cols="8" class="account-info-bold">
        The new BC Registries account supports the following services:
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>

    <div class="d-flex justify-center flex-wrap bg-gray1 pt-4 pb-7">
      <!-- Business Registry -->
      <v-card elevation="2">
        <v-card-title>Business Registry</v-card-title>

        <v-card-text>
          <p>
            Manage the incorporation, registration and
            listing of businesses and organizations in B.C.
            Here you are currently able to:
          </p>

          <ul>
            <li>Incorporate and manage benefit companies and cooperative associations.</li>
          </ul>

          <div>
            <a
              class="link"
              :href="$config.businessURL"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to BC Business Registry
            </a>
            <v-icon class="pl-1" color="primary" dark dense>mdi-open-in-new</v-icon>
          </div>
        </v-card-text>
      </v-card>

      <!-- Name Request -->
      <v-card elevation="2">
        <v-card-title>Name Request</v-card-title>

        <v-card-text>
          <p>
            Research and request a name for your new or
            existing B.C. business. Here you are able to:
          </p>

          <ul>
            <li>Search for a business name.</li>
            <li>Manage your existing Name Request.</li>
          </ul>

          <div>
            <a
              class="link"
              :href="$config.nameRequestURL"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to Name Request
            </a>
            <v-icon class="pl-1" color="primary" dark dense>mdi-open-in-new</v-icon>
          </div>
        </v-card-text>
      </v-card>

      <!-- Wills Registry -->
      <v-card elevation="2">
        <v-card-title>
          <span class="word-break-normal">Wills Registry</span>
          <span class="card-title-badge-container">
            <div class="card-title-badge">COMING SOON</div>
          </span>
        </v-card-title>

        <v-card-text>
          <p>
            <span class="font-weight-bold">Coming soon</span> to BC
            Registries account, Wills Registry allows solicitors, notaries
            and title search companies to do the following:
          </p>

          <ul>
            <li>File a wills notice.</li>
            <li>Search for an existing wills notice.</li>
          </ul>

          <div>
            <a
              class="link"
              :href="$config.willsURL"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to Wills Registry
            </a>
            <v-icon class="pl-1" color="primary" dark dense>mdi-open-in-new</v-icon>
          </div>
        </v-card-text>
      </v-card>

      <!-- Personal Property Registry -->
      <v-card elevation="2">
        <v-card-title>
          <span class="word-break-normal">Personal Property Registry</span>
          <span class="card-title-badge-container">
            <div class="card-title-badge">COMING SOON</div>
          </span>
        </v-card-title>

        <v-card-text>
          <p>
            Record security interests and liens against
            personal property belonging to British Columbia
            businesses and individuals. Here you can:
          </p>

          <ul>
            <li>Register security agreements and liens.</li>
            <li>Search for registered security agreements and liens.</li>
          </ul>

          <div>
            <a
              class="link"
              href="/ppr-marketing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to Personal Property Registry
            </a>
            <v-icon class="pl-1" color="primary" dark dense>mdi-open-in-new</v-icon>
          </div>
        </v-card-text>
      </v-card>
    </div>

    <div class="payment py-7">
      <div class="payment-info-title text-center">
        <img src="@/assets/svgs/currency-usd-circle.svg" />
        <span style="padding-left: 10px">Multiple payment types:</span>
      </div>

      <v-row no-gutters class="mt-2">
        <v-col class="col-1 col-md-2"></v-col>
        <v-col class="col-10 col-md-8 payment-info-text">
          The BC Registries account supports multiple payment options
          depending on the account and transaction type, including credit
          card, online banking, BC OnLine, and pre-authorized debit (PAD).
        </v-col>
        <v-col class="col-1 col-md-2"></v-col>
      </v-row>

      <div v-if="!loggedIn" class="mt-5 mr-4 d-sm-flex flex-wrap justify-center">
        <SbcSigninButton />

        <v-btn
          large
          class="button-blue-on-white"
          :href="$config.regAccountCreateURL"
        >
          Create a BC Registries Account
        </v-btn>
      </div>

      <div v-if="loggedIn" class="text-center mt-5 mr-4">
        <v-btn
          large
          class="button-white-on-blue"
          href="/dashboard"
        >
          Go to BC Registries Dashboard
        </v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
import { SessionStorageKeys } from 'sbc-common-components/src/util/constants'
import SbcSigninButton from '~/components/SbcSigninButton.vue'

export default {
  components: {
    SbcSigninButton,
  },
  computed: {
    loggedIn() {
      if (sessionStorage.getItem(SessionStorageKeys.KeyCloakToken)) {
        return true
      }
      return false
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/theme.scss';

.link {
  color: $BCgovLink !important;
  font-weight: bold;
}

img {
  margin-bottom: -6px;
}

.v-btn,
::v-deep .sbc-signin-button {
  margin: 0.5rem;
}

// "sm" breakpoint
@media (max-width: 599px) {
  ::v-deep .sbc-signin-button {
    width: 100%;
  }

  .v-btn {
    width: 100%;
  }
}
</style>
