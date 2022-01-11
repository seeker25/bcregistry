<template>
  <div>
    <article>
      <header class="ppr-bg auth d-flex align-center">
        <v-container>
          <v-row no-gutters>
            <v-col class="col-md-6 col-sm-12">
              <h1 class="text--left bigger-h1">
                Register or search for legal claims on personal property
              </h1>
            </v-col>
          </v-row>

          <v-row no-gutters>
            <v-col class="col-md-5 col-sm-12 body-text">
              The Personal Property Registry records security interests and
              liens against personal property belonging to British Columbia businesses
              and individuals.
            </v-col>
          </v-row>

          <v-row v-if="!loggedIn" class="pt-6" no-gutters>
            <v-col class="col-md-6 col-sm-12">
              <SbcSigninButton />
            </v-col>
          </v-row>

          <v-row v-if="!loggedIn" class="pt-6" no-gutters>
            <v-col class="body-text">
              New to BC Registries?
              <a class="font-weight-bold" :href="$config.authURL + 'choose-authentication-method'">
                Create a BC Registries Account
              </a>
            </v-col>
          </v-row>

          <v-row v-if="loggedIn" class="pt-6" no-gutters>
            <v-col>
              <v-btn
                  large
                  class="button-login font-weight-bold mr-2"
                  href="/dashboard"
                >
                  Go to BC Registries Dashboard
                </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </header>
    </article>

    <v-container class="body-text">
      <h1 class="text--center" style="padding-top: 80px">Coming Soon...</h1>

      <v-row class="pt-3 pb-8">
        <v-col cols="12" class="text--center">
          In early 2022, the BC Personal Property Registry will be launching an
          all-new application.
        </v-col>
      </v-row>

      <v-row style="padding-bottom: 80px">
        <v-col class="text--center px-6 col-md-3 col-sm-6">
          <img class="pr-1" src="@/assets/svgs/table-search.svg" />
          <v-icon medium color="#38598a">mdi-currency-usd-circle</v-icon>
          <br />
          <br />
          <h4>User Friendly Tools</h4>
          <p>
            A new, easy-to-use application that offers improved searching and
            registering.
          </p>
        </v-col>

        <v-col class="text--center px-6 col-md-3 col-sm-6">
          <img class="pr-1" src="@/assets/svgs/monitor-dashboard.svg" />
          <br />
          <br />
          <h4>Organized Records</h4>
          <p>
            Registrations, searches and downloadable documents are saved to your
            dashboard.
          </p>
        </v-col>

        <v-col class="text--center px-6 col-md-3 col-sm-6">
          <img class="pr-1" src="@/assets/svgs/account-circle.svg" />
          <br />
          <br />
          <h4>Account Integration</h4>
          <p>
            Access to all of your BC Registries products and services from one
            location.
          </p>
        </v-col>

        <v-col class="text--center px-6 col-md-3 col-sm-6">
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

    <div class="whitebg full-width">
      <v-container class="padding-100 body-text">
        <v-row class="search-height">
          <div class="search-bg col-md-6 col-sm-12"></div>
          <div class="col-md-6 col-sm-12">
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
                  <template v-slot:activator="{ on }">
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

            <div class="note">
              Note: The Personal Property Registry includes interests in
              fixtures and crops (personal property attached to land), but does
              not include ownership and interests in real property (land). Find
              real property interests in the
              <a href="https://www.ltsa.ca" target="_blank">
                Land Title Surveyor Authority (LTSA).
                <v-icon class="pl-1" color="primary" style="font-size:16px">mdi-open-in-new</v-icon>
              </a>
            </div>
          </div>
        </v-row>

        <v-row class="padding-100 report-height">
          <div class="col-md-6 col-sm-12">
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
          <div class="report-bg col-md-6 col-sm-12"></div>
        </v-row>

        <v-row class="register-height">
          <div class="register-bg col-md-6 col-sm-12"></div>
          <div class="col-md-6 col-sm-12">
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
              <li>Re-register expired or discharged registrations.</li>
            </ul>
          </div>
        </v-row>
      </v-container>
    </div>

    <v-container class="padding-100 body-text">
      <v-row><v-col cols="12">
      <h2 class="text--center pb-5">Helpful Links</h2>
      </v-col></v-row>
      <v-row class="justify-center">

        <div class="col col-auto">
          <v-card class="text--center px-5 py-8 square-card">
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
                <br />
                <a target="_blank" :href="PPR_HREF">
                  Learn More
                  <v-icon class="pl-1" color="primary" style="font-size:16px">mdi-open-in-new</v-icon>
                </a>
              </v-col>
            </v-row>
          </v-card>
        </div>

        <div class="col col-auto">
          <v-card class="text--center px-5 py-8 square-card">
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
                Vehicle claim history reports are available from ICBC and
                Carfax.
                <br />
                <a target="_blank" :href="VEH_HIST_RPTS_HREF">
                  Order a Report
                  <v-icon class="pl-1" color="primary" style="font-size:16px">mdi-open-in-new</v-icon>
                </a>
              </v-col>
            </v-row>
          </v-card>
        </div>

        <div class="col col-auto">
          <v-card class="text--center px-5 py-8 square-card">
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
                Get professional support filling out forms and filling
                documents.
                <br />
                <a target="_blank" href="https://dyedurham.com/">
                  Contact Dye &amp; Durham
                  <v-icon class="pl-1" color="primary" style="font-size:16px">mdi-open-in-new</v-icon>
                </a>
              </v-col>
            </v-row>
          </v-card>
        </div>
      </v-row>
    </v-container>

    <div class="whitebg full-width">
      <v-container class="padding-100 body-text">
        <h1 class="text--center">Create an Account to Get started</h1>

        <v-row class="pt-4 pb-6">
          <v-col class="text--center">
            Log in securely using your mobile BC Services Card, government's
            trusted way to access online services.
          </v-col>
        </v-row>

        <v-row>
          <div class="col-md-6 col-sm-12">
            <h2 class="pb-4">It's Secure</h2>
            <ul>
              <li>
                A mobile card is a representation of your BC Services Card on
                your mobile device. It's used to prove who you are when you log
                in to access government services online.
              </li>
              <li>
                Only your name and a unique identifier is stored on the mobile
                device.
              </li>
            </ul>
          </div>

          <div class="col-md-6 col-sm-12">
            <h2 class="pb-4">It's Quick and Easy</h2>
            <ul>
              <li>
                It normally takes about 5 minutes to
                <a href="https://www2.gov.bc.ca/gov/content/governments/government-id/bcservicescardapp">
                set up a mobile card</a>.
              </li>
              <li>
                You can verify your identity by video right from your mobile
                device. You don't need to go in person unless you can't verify
                by video.
              </li>
            </ul>
          </div>
        </v-row>

        <div class="mt-10 text--center">
          <template v-if="!loggedIn">
            <v-btn
              large
              class="button-login font-weight-bold mr-2"
              to="/choose-authentication-method"
              style="margin-top:15px;"
            >
              Create a BC Registries Account
            </v-btn>
          </template>
          <v-btn
            large
            outlined
            color="bcgovblue"
            class="learn-more-btn font-weight-bold"
            href="https://www2.gov.bc.ca/gov/content/governments/government-id/bcservicescardapp"
            target="_blank"
            rel="noopener noreferrer"
            style="margin-top:15px;"
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
import { SessionStorageKeys } from 'sbc-common-components/src/util/constants'
import ContactInfo from '~/components/ContactInfo.vue'
import SbcSigninButton from '~/components/SbcSigninButton.vue'

export default {
  components: {
    SbcSigninButton,
    ContactInfo,
  },
  data() {
    return {
      PPR_HREF: 'https://www2.gov.bc.ca/gov/content/employment-business/business/managing-a-business/' +
        'bc-registry-services-personal-property-registry',
      VEH_HIST_RPTS_HREF: 'https://www.icbc.com/vehicle-registration/buy-vehicle/buy-a-used-vehicle/' +
        'Pages/Vehicle-history-reports.aspx',
    }
  },
  head: {
    title: 'BC Personal Property Registry',
  },
  computed: {
    loggedIn() {
      if (!sessionStorage.getItem(SessionStorageKeys.KeyCloakToken)) {
        return false
      }
      return true
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/theme.scss';

.full-width {
  width: 100%;
}
.menu-title {
  font-size: 32px;
  font-weight: bold;
  color: $gray9;
  padding-top: 100px;
  text-align: center;
}

.ppr-bg {
  background-color: white;
  background-image: url(../assets/img/PPR_homebanner_image_v2_x2.jpg);
  background-position: 100% 100%;
  background-repeat: no-repeat;
  background-size: 880px;
}

.report-bg {
  background-color: white;
  background-image: url(../assets/img/PPR_reportpaper_x2.jpg);
  background-position: top center;
  background-size: 110%;
  background-repeat: no-repeat;
}

.search-bg {
  background-color: white;
  background-image: url(../assets/img/PPR_search_screenshot.png);
  background-position: top center;
  background-size: 75%;
  background-repeat: no-repeat;
}

.register-bg {
  background-color: white;
  background-image: url(../assets/img/PPR_register_screenshot.png);
  background-position: top center;
  background-size: 75%;
  background-repeat: no-repeat;
}

.whitebg {
  background-color: white;
}
.bigger-h1 {
  margin-bottom: 1.5rem;
    color: inherit;
    letter-spacing: -.02rem;
    line-height: 1.25;
    font-size: 2.5rem;
}

.padding-100 {
  padding-top: 100px;
  padding-bottom: 100px;
}

.note {
  padding-top: 20px;
  padding-left: 20px;
  font-style: italic;
  color: $gray7;
}

@media (max-width: 960px) {
  .ppr-bg {
    background-image: none;
  }
  .report-bg, .search-bg, .register-bg {
    background-size:100%;
    width: 400px;
    height: 500px;
  }
  .row {
    margin: 2px;
  }
}

@media (max-width: 750px) {
  .report-bg, .search-bg, .register-bg {
    background-size:100%;
    width: 400px;
    height: 300px;
  }
}


@media (min-width: 960px) {

  .ppr-bg {
    height: 30rem;
  }
   
  .report-height {
    height: 650px;
  } 
  .search-height {
    height: 400px;
  }
  .register-height {
    height: 410px;
  }
}

@media (min-width: 1200px) {

  .ppr-bg {
    height: 30rem;
  }
}

@media (min-width: 1920px) {
  .ppr-bg.auth {
    background-size: 48%;
    background-position-x: right;
  }
}

li::marker {
  list-style: square;
  padding-left: 30px;
  color: $gray4;
}
li {
  color: $gray7;
  font-size: 1rem;
  padding-top: 5px;
  padding-bottom: 5px;
  font-weight: normal;
}

.body-text .col, .col.body-text {
  color: $gray7;
  line-height: 22px;
}

a,
.learn-more-btn {
  color: $BCgovLink;
}

.v-btn__content {
  letter-spacing: normal;
}

.learn-more-btn:hover {
  color: white !important;
  background: $BCgovBlue5;
  opacity: 0.8;
}

.button-login {
  color: white !important;
  background: $BCgovBlue5 !important;
  font-weight: bold;
  font-size: 0.875em;
  text-decoration: none;
  letter-spacing: normal;
  text-transform: none;
  text-align: center;
  border-radius: 0.25rem;
  flex: auto;
  -webkit-box-shadow: none;
	-moz-box-shadow: none;
	box-shadow: none;
  height: 44px;
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
</style>
