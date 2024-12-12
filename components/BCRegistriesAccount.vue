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
            Start a B.C. based business and keep business records up to date.
            Here you are currently able to:
          </p>

          <ul>
            <li>Incorporate and manage benefit companies and cooperative associations.</li>
            <li>Register and manage general partnerships and sole proprietorships
              (including "Doing Business As"  / DBA names).</li>
          </ul>

          <div>
            <a
              class="link"
              :href="appendAccountId($config.businessURL)"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Go to BC Business Registry</span>
            </a>
            <v-icon dense color="primary">mdi-open-in-new</v-icon>
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
              :href="appendAccountId($config.nameRequestURL)"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Go to Name Request</span>
            </a>
            <v-icon dense color="primary">mdi-open-in-new</v-icon>
          </div>
        </v-card-text>
      </v-card>

      <!-- Business Search -->
      <v-card elevation="2">
        <v-card-title>Business Search</v-card-title>
        <span v-if="showBetaFlagBusSearch" class="card-title-badge-container">
          <div class="card-title-badge font-weight-bold pt-2">BETA</div>
        </span>
        <span v-if="showComingSoonFlagBusSearch" class="card-title-badge-container">
          <div class="card-title-badge font-weight-bold pt-2">COMING SOON</div>
        </span>
        <v-card-text>
          <p>
            Search for businesses registered in B.C. and request copies of business
            documents.
          </p>

          <ul>
            <li>Search for businesses by name or number.</li>
            <li>Search for firms by their owner.</li>
            <li>Download business documents.</li>
          </ul>

          <div>
            <a
              class="link"
              :href="$config.busSrchLearnMoreURL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Learn more about Business Search</span>
            </a>
            <v-icon dense color="primary">mdi-open-in-new</v-icon>
          </div>
        </v-card-text>
      </v-card>

      <!-- Personal Property Registry -->
      <v-card elevation="2">
        <v-card-title>Personal Property Registry</v-card-title>
        <span v-if="showNewFlagPPR" class="card-title-badge-container">
          <div class="card-title-badge font-weight-bold pt-2">NEW</div>
        </span>
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
              :href="pprMarketing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Go to Personal Property Registry</span>
            </a>
            <v-icon dense color="primary">mdi-open-in-new</v-icon>
          </div>
        </v-card-text>
      </v-card>

      <!-- Manufactured Home Registry -->
      <v-card v-if="showMhrFlag" elevation="2">
        <v-card-title>Manufactured Home Registry</v-card-title>
        <v-card-text>
          <p>
            In the Manufactured Home Registry, you are able to:
          </p>

          <ul>
            <li>Search and download reports for manufactured homes and personal property
              liens on manufactured homes.</li>
            <li>Qualified Suppliers can file transport permits, initial registrations, or ownership transfers.
            </li>
          </ul>

          <div>
            <a
              class="link"
              :href="$config.mhrLearnMoreURL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Learn more about Manufactured Home Registry</span>
            </a>
            <v-icon dense color="primary">mdi-open-in-new</v-icon>
          </div>
        </v-card-text>
      </v-card>

      <!-- Rural Property Tax Search -->
      <v-card elevation="2">
        <v-card-title>Rural Property Tax Search</v-card-title>
        <span v-if="showNewFlagRPT" class="card-title-badge-container">
          <div class="card-title-badge font-weight-bold pt-2">NEW</div>
        </span>
        <v-card-text>
          <p>
            Search property tax records for rural properties or leased crown land in B.C.
            (excluding municipal properties and Indigenous lands). Here you can find the
            following for a property:
          </p>

          <ul>
            <li>Tax amounts over the last 10 years.</li>
            <li>Tax-paid status.</li>
            <li>Legal description.</li>
          </ul>

          <div>
            <a
              class="link"
              :href="$config.rptLearnMoreURL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Learn more about Rural Property Tax Search</span>
            </a>
            <v-icon dense color="primary">mdi-open-in-new</v-icon>
          </div>
        </v-card-text>
      </v-card>

      <!-- Wills Registry -->
      <v-card elevation="2">
        <v-card-title>
          <span>Wills Registry</span>
        </v-card-title>
        <span v-if="showNewFlagWills" class="card-title-badge-container">
          <div class="card-title-badge font-weight-bold pt-2">NEW</div>
        </span>
        <v-card-text>
          <p>
            Wills Registry allows solicitors, notaries
            and title search companies to do the following:
          </p>

          <ul>
            <li>File a wills notice.</li>
            <li>Search for an existing wills notice.</li>
          </ul>

          <div>
            <a
              class="link"
              :href="$config.willsLearnMoreURL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Learn more about Wills Registry</span>
            </a>
            <v-icon dense color="primary">mdi-open-in-new</v-icon>
          </div>
        </v-card-text>
      </v-card>

       <!-- BC Assessment -->
      <v-card v-if="showBCAFlag" elevation="2">
        <v-card-title>BC Assessment</v-card-title>
        <span v-if="showNewFlagBCA" class="card-title-badge-container">
          <div class="card-title-badge font-weight-bold pt-2">NEW</div>
        </span>
        <v-card-text>
          <p>
            Search the BC Assessment database for information about real property in B.C. Here you
            are able to:
          </p>

          <ul>
            <li>Find property ownership and location information.</li>
            <li>Obtain property assessment information.</li>
            <li>Obtain residential property inventory details.</li>
          </ul>

          <div>
            <a
              class="link"
              :href="$config.bcaLearnMoreURL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Learn more about BC Assessment</span>
            </a>
            <v-icon dense color="primary">mdi-open-in-new</v-icon>
          </div>
        </v-card-text>
      </v-card>

        <!-- Site Registry -->
      <v-card v-if="showESRAFlag" elevation="2">
        <v-card-title>Site Registry</v-card-title>
        <span v-if="showNewFlagESRA" class="card-title-badge-container">
          <div class="card-title-badge font-weight-bold pt-2">NEW</div>
        </span>
        <v-card-text>
          <p>
            The Site Registry retains provincial government information on the
            environmental condition of land. The Site Registry can be a helpful
            resource for anyone interested in purchasing or developing a property.
            Here you can:
          </p>

          <ul>
            <li>Search the Site Registry to identify properties with environmental records submitted
              under Part 4 of B.C.'s Environmental Management Act.</li>
          </ul>

          <div>
            <a
              class="link"
              :href="$config.siteRegistryLearnMoreURL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Learn more about Site Registry</span>
            </a>
            <v-icon dense color="primary">mdi-open-in-new</v-icon>
          </div>
        </v-card-text>
      </v-card>

      <!-- Court Services Online -->
      <v-card v-if="showCSOFlag" elevation="2">
        <v-card-title>Court Services Online (CSO)</v-card-title>
        <span v-if="showNewFlagCSO" class="card-title-badge-container">
          <div class="card-title-badge font-weight-bold pt-2">NEW</div>
        </span>
        <v-card-text>
          <p>
            Court Services Online is British Columbia's electronic court registry. Here you can:
          </p>

          <ul>
            <li>Make applications or file any other court documents in any B.C. court registry.</li>
            <li>Browse daily court listings across the province.</li>
            <li>Search court file information.</li>
          </ul>

          <div>
            <a
              class="link"
              :href="$config.csoLearnMoreURL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="reduced-letter-spacing">Learn more about Court Services Online</span>
            </a>
            <v-icon dense color="primary">mdi-open-in-new</v-icon>
          </div>
        </v-card-text>
      </v-card>

      <!-- API Gateway -->
      <v-card elevation="2">
        <v-card-title>API Gateway</v-card-title>

        <v-card-text>
          <p>
            Leverage the API Gateway
            & Management Services to accelerate your digital transformation.
          </p>

          <ul>
            <li>User Account Management and Authentication</li>
            <li>Payment Services</li>
            <li>Access APIs: Business Registry, Personal Property Registry, and more</li>
          </ul>

          <div>
            <a
              class="link"
              :href="$config.regApiGatewayURL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Go to the API Gateway</span>
            </a>
            <v-icon dense color="primary">mdi-open-in-new</v-icon>
          </div>
        </v-card-text>
      </v-card>

      <!-- Short-Term Rental Registry -->
      <v-card elevation="2">
        <v-card-title>Short-Term Rental Registry</v-card-title>
        <span v-if="showNewFlagSTRR" class="card-title-badge-container">
          <div class="card-title-badge font-weight-bold pt-2">NEW</div>
        </span>
        <v-card-text>
          <p>
            Apply for and manage your registrations to comply with
            B.C.'s new rules for short-term rentals. Here you can:
          </p>

          <ul>
            <li>Register a short-term rental property</li>
            <li>Register a platform service provider</li>
            <li>Register a strata-titled hotel or motel</li>
            <li>Manage and renew registrations</li>
          </ul>

          <div>
            <a
              class="link"
              :href="$config.strrURL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Go to the Short-Term Rental Registry to get started.</span>
            </a>
            <v-icon dense color="primary">mdi-open-in-new</v-icon>
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

      <div v-if="!isLoggedIn" class="mt-5 mr-4 d-sm-flex flex-wrap justify-center">
        <SbcSigninButton />

        <v-btn
          large
          class="button-blue-on-white"
          :href="$config.regAccountCreateURL"
        >
          Create a BC Registries Account
        </v-btn>
      </div>

      <div v-if="isLoggedIn" class="text-center mt-5 mr-4">
        <v-btn
          large
          class="button-white-on-blue"
          :to="dashboard"
        >
          Go to BC Registries Dashboard
        </v-btn>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { SessionStorageKeys } from 'sbc-common-components/src/util/constants'
import { appendAccountId } from 'sbc-common-components/src/util/common-util'
import SbcSigninButton from '~/components/SbcSigninButton.vue'
import { Routes } from '@/enums'
import { getFeatureFlag } from '~/utils'

@Component({
  components: {
    SbcSigninButton
  }
})
export default class BCRegistriesAccount extends Vue {
  readonly appendAccountId = appendAccountId // for use in template

  get isLoggedIn (): boolean {
    const token = sessionStorage.getItem(SessionStorageKeys.KeyCloakToken)
    return !!token
  }

  get showBetaFlagBusSearch (): boolean {
    return getFeatureFlag('bcregistry-ui-bus-search-beta-chip') as boolean
  }

  get showComingSoonFlagBusSearch (): boolean {
    return getFeatureFlag('bcregistry-ui-bus-search-coming-soon-chip') as boolean
  }

  get showNewFlagWills (): boolean {
    return getFeatureFlag('bcregistry-ui-wills-new-chip') as boolean
  }

  get showNewFlagRPT (): boolean {
    return getFeatureFlag('bcregistry-ui-rpt-new-chip') as boolean
  }

  get showNewFlagBCA (): boolean {
    return getFeatureFlag('bcregistry-ui-bca-new-chip') as boolean
  }

  get showNewFlagESRA (): boolean {
    return getFeatureFlag('bcregistry-ui-esra-new-chip') as boolean
  }

  get showNewFlagCSO (): boolean {
    return getFeatureFlag('bcregistry-ui-cso-new-chip') as boolean
  }

  get showNewFlagPPR (): boolean {
    return getFeatureFlag('bcregistry-ui-ppr-new-chip') as boolean
  }

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

  get showBetaMhr (): boolean {
    return getFeatureFlag('bcregistry-ui-mhr-beta-chip') as boolean
  }

  get showNewFlagSTRR (): boolean {
    return getFeatureFlag('bcregistry-ui-strr-new-chip') as boolean
  }

  get dashboard (): string {
    return `${Routes.DASHBOARD}`
  }

  get pprMarketing (): string {
    return `${Routes.PPR_MARKETING}`
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/theme.scss';

img {
  margin-bottom: -6px;
}

.tool-tip-text {
  cursor: default;
  text-decoration-line: underline;
  text-decoration-style: dotted;
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

.reduced-letter-spacing {
  letter-spacing: -0.5px;
}
</style>
