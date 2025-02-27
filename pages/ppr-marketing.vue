<template>
  <div>
    <header class="hero-banner d-flex align-center">
      <v-container>
        <v-row no-gutters>
          <v-col class="col-md-6 col-xl-7">
            <h1 class="bigger-h1">
              Register or search for legal claims on personal property
            </h1>
          </v-col>
        </v-row>

        <v-row no-gutters>
          <v-col class="col-md-4 col-lg-5 col-xl-7 pt-6 body-text">
            The Personal Property Registry records security interests and
            liens against personal property belonging to British Columbia businesses
            and individuals.
          </v-col>
        </v-row>

        <v-row v-if="!isLoggedIn" class="pt-6" no-gutters>
          <v-col class="col-md-6 col-12">
            <SbcSigninButton />
          </v-col>
        </v-row>

        <v-row v-if="!isLoggedIn" class="py-6" no-gutters>
          <v-col class="body-text">
            New to Service BC Connect?
            <a
              class="link"
              :href="$config.createBcRegistriesAccount"
            >
              <span>Create a Service BC Connect Account</span>
            </a>
          </v-col>
        </v-row>

        <v-row v-if="isLoggedIn" class="py-6" no-gutters>
          <v-col>
            <v-btn
              large
              class="button-white-on-blue"
              :to="Routes.DASHBOARD"
            >
              Go to Service BC Connect Dashboard
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </header>

    <v-container class="body-text">
      <h1 class="text-center" style="padding-top: 80px">
        A Modern Personal Property Registry for B.C.
      </h1>

      <v-row class="pt-3 pb-8">
        <v-col cols="12" class="text-center">
          The Personal Property Registry is now one of Service BC Connect new modernized applications.
        </v-col>
      </v-row>

      <v-row style="padding-bottom: 80px">
        <v-col class="text-center px-6 col-12 col-md-3">
          <img class="pr-1" src="@/assets/svgs/table-search.svg" />
          <br />
          <br />
          <h4>User Friendly Tools</h4>
          <p>
            A new, easy-to-use application that offers improved searching and
            registering.
          </p>
        </v-col>

        <v-col class="text-center px-6 col-12 col-md-3">
          <img class="pr-1" src="@/assets/svgs/monitor-dashboard.svg" />
          <br />
          <br />
          <h4>Organized Records</h4>
          <p>
            Registrations, searches and downloadable documents are saved to your
            dashboard.
          </p>
        </v-col>

        <v-col class="text-center px-6 col-12 col-md-3">
          <img class="pr-1" src="@/assets/svgs/account-circle.svg" />
          <br />
          <br />
          <h4>Account Integration</h4>
          <p>
            Access to all of your Service BC Connect products and services from one
            location.
          </p>
        </v-col>

        <v-col class="text-center px-6 col-12 col-md-3">
          <img class="pr-1" src="@/assets/svgs/table-key.svg" />
          <br />
          <br />
          <h4>API Services</h4>
          <p>
            Are you a high-volume account user? Ask about our Personal Property
            Registry APIs.
          </p>
        </v-col>
      </v-row>
    </v-container>

    <div class="white-bg padding-100">
      <v-container class="body-text">
        <!-- SEARCH -->
        <v-row class="search-row">
          <v-col class="search-bg white-bg col-12 col-md-6"><!-- background image here --></v-col>
          <v-col class="col-12 col-md-6 d-flex align-center">
            <div>
              <h2 class="pb-6">
                Search for Registered Security Agreements and Liens
              </h2>
              <ul>
                <li>
                  Search for 
                  <v-tooltip
                    top
                    content-class="top-tooltip pa-2 mr-2"
                    transition="fade-transition"
                  >
                    <template #activator="{ on }">
                      <span class="bb-gray9" v-on="on"> 
                        legal claims on personal property
                      </span>
                    </template>
                    <div class="pa-2" style="width: 250px">
                      Legal claims on personal property (also called security interests
                      or property interests) include security agreements, liens, and more.
                    </div>
                  </v-tooltip>
                  as well as the people, businesses, and organizations associated with these claims.
                </li>
                <li>
                  Select registrations to download and view the secured parties,
                  debtors, and collateral in each.
                </li>
                <li>View and manage your search history.</li>
                <li>
                  Download copies of your Search Result Reports for your records
                  or for use in court.
                </li>
              </ul>

              <div class="note pt-5 pl-5">
                Note: The Personal Property Registry includes interests in
                fixtures and crops (personal property attached to land), but does
                not include ownership and interests in real property (land). Find
                real property interests in the
                <a
                  href="https://www.ltsa.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Land Title Surveyor Authority (LTSA)</span>
                </a>
                <v-icon small color="primary">mdi-open-in-new</v-icon>.
              </div>
            </div>
          </v-col>
        </v-row>

        <!-- REPORT -->
        <v-row class="report-row margin-100">
          <v-col class="col-12 col-md-6 d-flex align-center">
            <div>
              <h2 class="pb-6">Get Detailed Search Result Reports</h2>
              <ul>
                <li>
                  Get a detailed report containing the list of registrations that
                  match your criteria.
                </li>
                <li>
                  See the current information and complete history of each
                  registration in your report.
                </li>
                <li>Easily find a particular registration in your report.</li>
                <li>
                  Use your Search Result Report as evidence of a claim, or lack of
                  a claim, on personal property.
                </li>
              </ul>
            </div>
          </v-col>
          <v-col class="report-bg white-bg col-12 col-md-6"><!-- background image here --></v-col>
        </v-row>

        <!-- REGISTER -->
        <v-row class="register-row">
          <v-col class="register-bg white-bg col-12 col-md-6"><!-- background image here --></v-col>
          <v-col class="col-12 col-md-6 d-flex align-center">
            <div>
              <h2 class="pb-6">Register Security Agreements and Liens</h2>
              <ul>
                <li>Register legal claims on personal property.</li>
                <li>
                  Look up Secured Parties based on a B.C. business name or
                  incorporation number or enter them manually.
                </li>
                <li>
                  Save drafts of your financing statements before registering.
                </li>
                <li>Review your registration for accuracy prior to payment.</li>
                <li>
                  Manage and find your draft and registered financing statements easily.
                </li>
                <li>
                  See if your registrations are due to expire or if they have been discharged.
                </li>
                <li>Amend, Renew, or Discharge registrations.</li>
              </ul>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <v-container class="padding-100 body-text">
      <v-row>
        <v-col cols="12">
          <h2 class="text-center pb-5">Helpful Links</h2>
        </v-col>
      </v-row>

      <v-row class="justify-center">
        <!-- MORE INFORMATION -->
        <v-col class="col-auto">
          <v-card class="text-center px-5 py-8 square-card">
            <v-row>
              <v-col class="font-weight-bold"><h4>MORE INFORMATION</h4></v-col>
            </v-row>
            <v-row>
              <v-col>
                <img class="pr-1" src="@/assets/svgs/file-document-box-search-icon.svg" />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                Find detailed information about the Personal Property Registry.
                <a
                  class="link d-inline-block mt-6"
                  :href="PPR_HREF"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Learn More</span>
                </a>
                <v-icon dense color="primary">mdi-open-in-new</v-icon>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <!-- VEHICLE CLAIMS REPORT -->
        <v-col class="col-auto">
          <v-card class="text-center px-5 py-8 square-card">
            <v-row>
              <v-col class="font-weight-bold">
                <h4>VEHICLE CLAIMS REPORT</h4>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <img class="pr-1" src="@/assets/svgs/vehicle-claim-icon.svg" />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                Vehicle claim history reports are available from ICBC and Carfax.
                <br />
                <a
                  class="link d-inline-block mt-6"
                  :href="VEH_HIST_RPTS_HREF"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Order a Report</span>
                </a>
                <v-icon dense color="primary">mdi-open-in-new</v-icon>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <!-- LEGAL SERVICES -->
        <v-col class="col-auto">
          <v-card class="text-center px-5 py-8 square-card">
            <v-row>
              <v-col class="font-weight-bold">
                <h4>LEGAL SERVICES</h4>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <img class="pr-1" src="@/assets/svgs/legal-services-icon.svg" />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                Get professional support filling out forms and filling documents.
                <br />
                <a
                  class="link d-inline-block mt-6"
                  href="https://dyedurham.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Contact Dye &amp; Durham</span>
                </a>
                <v-icon dense color="primary">mdi-open-in-new</v-icon>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <div class="white-bg padding-100">
      <v-container class="body-text">
        <h1 class="text-center">Create an Account to Get started</h1>

        <v-row class="pt-4 pb-6">
          <v-col class="text-center">
            Log in securely using your mobile BC Services Card, government's
            trusted way to access online services.
          </v-col>
        </v-row>

        <v-row>
          <v-col class="col-12 col-md-6">
            <h2 class="pb-4">It's Secure</h2>
            <ul>
              <li>
                A mobile card is a representation of your BC Services Card on
                your mobile device. It's used to prove who you are when you log
                in to access government services online.
              </li>
              <li>
                Only your name and a unique identifier is stored on the mobile device.
              </li>
            </ul>
          </v-col>

          <v-col class="col-12 col-md-6">
            <h2 class="pb-4">It's Quick and Easy</h2>
            <ul>
              <li>
                It normally takes about 5 minutes to
                <a 
                  href="https://www2.gov.bc.ca/gov/content/governments/government-id/bcservicescardapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>set up a mobile card</span>
                </a>
                <v-icon small color="primary">mdi-open-in-new</v-icon>.
              </li>
              <li>
                You can verify your identity by video right from your mobile
                device. You don't need to go in person unless you can't verify
                by video.
              </li>
            </ul>
          </v-col>
        </v-row>

        <div class="mt-10 mr-4 d-sm-flex justify-center">
          <template v-if="!isLoggedIn">
            <v-btn
              large
              class="button-white-on-blue"
              :href="$config.createBcRegistriesAccount"
            >
              Create a Service BC Connect Account
            </v-btn>
          </template>
          <v-btn
            large
            class="button-blue-on-white"
            href="https://www2.gov.bc.ca/gov/content/governments/government-id/bcservicescardapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </v-btn>
        </div>
      </v-container>
    </div>

    <ContactInfo />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { SessionStorageKeys } from 'sbc-common-components/src/util/constants'
import ContactInfo from '~/components/ContactInfoPpr.vue'
import SbcSigninButton from '~/components/SbcSigninButton.vue'
import { Routes } from '@/enums'
import { setLoginUrl, setLogoutUrl } from '@/utils'

/*
 * This is the PPR marketing page.
 */
export default Vue.extend ({
  components: {
    SbcSigninButton,
    ContactInfo,
  },
  data () {
    return {
      PPR_HREF: 'https://www2.gov.bc.ca/gov/content/employment-business/business/managing-a-business/' +
        'bc-registry-services-personal-property-registry',
      VEH_HIST_RPTS_HREF: 'https://www.icbc.com/vehicle-registration/buy-vehicle/buy-a-used-vehicle/' +
        'Pages/Vehicle-history-reports.aspx',
      Routes, // for use in template
    }
  },
  head: {
    title: 'BC Personal Property Registry',
  },
  computed: {
    isLoggedIn (): boolean {
      const token = sessionStorage.getItem(SessionStorageKeys.KeyCloakToken)
      return !!token
    },
  },
  mounted () {
    // if user logs in from this page, go to dashboard
    setLoginUrl(this.$config.registryDashboard)
    // if user logs out from this page, return here
    setLogoutUrl(this.$config.registryPprMarketing)
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/theme.scss';

.hero-banner {
  background-color: white;
  background-image: none;
}

.search-bg {
  background-image: url(../assets/img/PPR_search_screenshot.png);
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
}

.report-bg {
  background-image: url(../assets/img/PPR_reportpaper_x2.jpg);
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
}

.register-bg {
  background-image: url(../assets/img/PPR_register_screenshot.png);
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
}

// height of background images at minimum screen width
.search-bg,
.report-bg,
.register-bg {
  min-height: 340px;
}

.white-bg {
  background-color: white;
}

.bigger-h1 {
  line-height: 1.25;
  font-size: $px-40;
}

.padding-100 {
  padding-top: 100px;
  padding-bottom: 100px;
}

.margin-100 {
  margin-top: 100px;
  margin-bottom: 100px;
}

.note {
  font-style: italic;
  color: $gray7;
}

ul {
  list-style: square;

  li {
    color: $gray7;
    font-size: $px-16;
    font-weight: normal;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-left: -8px;
  }

  li::marker {
    color: $gray4;
  }
}

.body-text .col, .col.body-text {
  color: $gray7;
  line-height: 22px;
}

.v-btn__content {
  letter-spacing: normal;
}

.square-card {
  height: 300px;
  width: 300px;
  padding: 15px;
  border-radius: 4px;
  background-color: white;
}

.bb-gray9 {
  border-bottom: 1px dotted $gray9;
}

// "md" breakpoint
@media (min-width: 960px) {
  .hero-banner {
    height: 30rem;
    background-image: url(../assets/img/PPR_homebanner_image_v2_x2.jpg);
    background-position: bottom right;
    background-repeat: no-repeat;
    background-size: 836px;
  }

  // height of rows at 960px screen width and higher
  .search-row,
  .report-row,
  .register-row {
    height: 450px;
  }
}

// "lg" breakpoint
@media (min-width: 1264px) {
  .hero-banner {
    background-size: 1010px;
  }
}

// "xl" breakpoint
@media (min-width: 1904px) {
  .hero-banner {
    height: 35rem;
    background-size:1130px;
  }
}

.v-btn {
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
