<template>
  <div>
    <article>
      <header class="ppr-bg auth d-flex align-center">
        <v-container>
          <v-row>
            <v-col cols="6">
              <h1 class="text--left">
                Register or search for legal claims on personal property
              </h1>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="5">
              The Personal Property Registry records security interests and
              liens against personal property in British Columbia, whether the
              property belongs to a business or individual.
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <SbcSigninButton />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              New to BC Registries?
              <a class="font-weight-bold" href="/"
                >Create a BC Registries Account</a
              >
            </v-col>
          </v-row>
        </v-container>
      </header>
    </article>

    <v-container>
      <h1 class="text--center" style="padding-top: 100px">Coming Soon...</h1>
      <v-row class="pt-3 pb-8">
        <v-col cols="12" class="text--center">
          In early 2022, the BC Personal Property Registry will be launching an
          all-new application.
        </v-col>
      </v-row>
      <v-row style="padding-bottom: 100px">
        <v-col class="text--center" cols="3">
          <img class="pr-1" src="@/assets/svgs/table-search.svg" />
          <v-icon medium color="#38598a">mdi-currency-usd-circle</v-icon
          ><br /><br />
          <h4>User Friendly Tools</h4>
          <p>
            A new, easy-to-use application that offers improved searching and
            registering.
          </p>
        </v-col>
        <v-col class="text--center" cols="3">
          <img
            class="pr-1"
            src="@/assets/svgs/monitor-dashboard.svg"
          /><br /><br />
          <h4>Organized Records</h4>
          <p>
            Registrations, searches and downloadable documents are saved to your
            dashboard.
          </p></v-col
        >
        <v-col class="text--center" cols="3">
          <img
            class="pr-1"
            src="@/assets/svgs/account-circle.svg"
          /><br /><br />
          <h4>Account Integration</h4>
          <p>
            Access to all of your BC Registries products and services from one
            location.
          </p></v-col
        >
        <v-col class="text--center" cols="3">
          <img class="pr-1" src="@/assets/svgs/table-key.svg" /><br /><br />
          <h4>API Services</h4>
          <p>
            Are you a high-volume account user? Ask about our Personal Property
            Registry APIs.
          </p></v-col
        >
      </v-row>
    </v-container>
    <div class="whitebg full-width">
      <v-container class="padding-100">
        <v-row>
          <v-col cols="6" class="search-bg"></v-col>
          <v-col cols="6">
            <h3 class="pb-4">
              Search for Registered Security Agreements and Liens
            </h3>
            <ul>
              <li>
                Search for legal claims on personal property as well as the
                people, businesses, and organizations associated with these
                claims.
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
              Note: The Personal Property Reigstry includes interests in
              fixtures and coprs (personal property attached to land), but does
              not include ownership and interests in real property (land). Find
              real property interests in the
              <a href="https://www.ltsa.ca" target="_blank"
                >Land Title Surveyor Authority (LTSA).</a
              >
            </div>
          </v-col>
        </v-row>
        <v-row class="padding-100">
          <v-col cols="6">
            <h3 class="pb-4">Get Detailed Search Result Reports</h3>
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
          </v-col>
          <v-col cols="6" class="report-bg"></v-col>
        </v-row>
        <v-row>
          <v-col cols="6" class="register-bg"></v-col>
          <v-col cols="6">
            <h3 class="pb-4">Register Security Agreements and Liens</h3>
            <ul>
              <li>Register legal claims on personal property.</li>
              <li>
                Look up Secured Parties based on a BC business name or
                incorporation number or enter them manually.
              </li>
              <li>
                Save drafts of your financing statements before registering.
              </li>
              <li>Review your registration for accuracy prior to payment.</li>
              <li>
                Manage and find your draft and registered financing statements
                easily.
              </li>
              <li>
                See if your registrations are due to expire or if they have been
                discharged.
              </li>
              <li>Amend, Renew, or Discharge registrations.</li>
              <li>Re-register expired or discharged registrations.</li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-container class="padding-100">
      <h2 class="text--center pb-5">Helpful Links</h2>
      <v-row>
        <v-col></v-col>
        <v-col cols="3">
          <v-card class="text--center pa-5">
            <v-row
              ><v-col class="font-weight-bold">MORE INFORMATION</v-col></v-row
            >
            <v-row
              ><v-col
                ><img
                  class="pr-1"
                  src="@/assets/svgs/file-document-box-search-icon.svg" /></v-col
            ></v-row>
            <v-row
              ><v-col
                >Find detailed information about the Personal Property Registry.
                <br /><a href="#">Learn More</a></v-col
              ></v-row
            >
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card class="text--center pa-5"
            ><v-row
              ><v-col class="font-weight-bold"
                >VEHICLE CLAIMS REPORT</v-col
              ></v-row
            >
            <v-row
              ><v-col
                ><img
                  class="pr-1"
                  src="@/assets/svgs/vehicle-claim-icon.svg" /></v-col
            ></v-row>
            <v-row
              ><v-col
                >Vehicle claim history reports are available from ICBC and
                Carfax. <br /><a href="#">Order a Report</a></v-col
              ></v-row
            ></v-card
          >
        </v-col>
        <v-col cols="3">
          <v-card class="text--center pa-5"
            ><v-row
              ><v-col class="font-weight-bold">LEGAL SERVICES</v-col></v-row
            >
            <v-row
              ><v-col
                ><img
                  class="pr-1"
                  src="@/assets/svgs/legal-services-icon.svg" /></v-col
            ></v-row>
            <v-row
              ><v-col
                >Get professional support filling out forms and filling
                documents. <br /><a href="#">Contact Dye & Durham</a></v-col
              ></v-row
            ></v-card
          >
        </v-col>
        <v-col></v-col>
      </v-row>
    </v-container>
    <div class="whitebg full-width">
      <v-container class="padding-100">
        <h1 class="text--center">Create an Account to get started</h1>
        <v-row class="pt-4 pb-6"
          ><v-col class="text--center"
            >Log in securely using your mobile BC Services Card, government's
            trusted way to access online services.</v-col
          >
        </v-row>
        <v-row>
          <v-col cols="6">
            <h3 class="pb-4">It's Secure</h3>
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
          </v-col>
          <v-col cols="6">
            <h3 class="pb-4">It's Quick and Easy</h3>
            <ul>
              <li>
                It normally takes about 5 minutes to set up a mobile card.
              </li>
              <li>
                You can verify your identity by video right from your mobile
                device. You don't need to go in person unless you can't verify
                by video.
              </li>
            </ul>
          </v-col>
        </v-row>
        <div class="mt-10 text--center">
          <template v-if="!userProfile">
            <v-btn
              large
              color="bcgovgold"
              class="button-login font-weight-bold mr-2"
              to="/choose-authentication-method"
            >
              Create a BC Registries Account
            </v-btn>
          </template>
          <v-btn
            large
            outlined
            color="bcgovblue"
            class="learn-more-btn font-weight-bold"
            href="https://www2.gov.bc.ca/gov/content/governments/government-id/bc-services-card/log-in-with-card/mobile-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </v-btn>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script lang="ts">
import SbcSigninButton from '~/components/SbcSigninButton.vue'
export default {
  components: {
    SbcSigninButton,
  },
  data() {
    return {
      /** Whether the user is logged in. */
      userProfile: false,
    }
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
  color: $gray9;
  background-color: #fff;
  background-image: url(../assets/img/PPR_homebanner_image_x2.jpg);
  background-position: right center;
  background-size: 50%;
  background-repeat: no-repeat;
}

.report-bg {
  background-color: #fff;
  background-image: url(../assets/img/PPR_reportpaper_x2.jpg);
  background-position: center center;
  background-size: 75%;
  background-repeat: no-repeat;
}

.search-bg {
  background-color: #fff;
  background-image: url(../assets/img/PPR_search_screenshot.png);
  background-position: center center;
  background-size: 60%;
  background-repeat: no-repeat;
}

.register-bg {
  background-color: #fff;
  background-image: url(../assets/img/PPR_register_screenshot.png);
  background-position: center center;
  background-size: 60%;
  background-repeat: no-repeat;
}

.whitebg {
  background-color: #fff;
}

.padding-100 {
  padding-top: 100px;
  padding-bottom: 100px;
}

.note {
  padding-top: 20px;
  padding-left: 20px;
  font-style: italic;
}

@media (min-width: 960px) {
  .container {
    max-width: 900px;
  }
  .ppr-bg {
    height: 30rem;
    background-size: 900px;
  }
}

@media (min-width: 1200px) {
  .ppr-bg {
    height: 30rem;
  }
}

@media (min-width: 1920px) {
  .ppr-bg.auth {
    background-size: 50%;
    background-position-x: right;
  }
}

.container {
  max-width: 1360px; // should match auth-web, etc
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

a, .learn-more-btn {
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
</style>
