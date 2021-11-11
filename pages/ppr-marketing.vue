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
              Ther Personal Property Registry records security interests and
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
              <a href="/">Create a BC Registries Account</a>
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
  </div>
</template>

<script>
import SbcSigninButton from '~/components/SbcSigninButton.vue'
export default {
  components: {
    SbcSigninButton,
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/theme.scss';

a {
  font-weight: 700;
}
.menu-title {
  font-size: 32px;
  font-weight: bold;
  color: #212529;
  padding-top: 100px;
  text-align: center;
}
.button-login {
  color: #fff !important;
  background: #38598a !important;
  font-weight: bold;
  font-size: 12px;
  border-radius: 0.25rem;
}
.ppr-bg {
  color: #212529;
  background-color: #fff;
  background-image: url(../assets/img/PPR_dashboard_thumbnail_image.jpg);
  background-position: right center;
  background-size: 50%;
  background-repeat: no-repeat;
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
/*
.ppr-bg {
  min-width: 960px;
  height: 30rem;
  color: #212529;
  background-color: #fff;
  background-image: url(../assets/img/PPR_dashboard_thumbnail_image.jpg);
  background-position: right center;
  background-size: 50%;
  background-repeat: no-repeat;
}
*/
</style>
