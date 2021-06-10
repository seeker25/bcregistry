<template>
  <div class="account-container">
    <v-container no-gutters>
      <div class="menu-title">No Account Required</div>
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="8" class="menu-info-bold"
          >The following services do not require an account:</v-col
        >
        <v-col cols="2"></v-col>
      </v-row>
      <v-row class="padding-top:30px">
        <v-col cols="4" style="pr-5"></v-col>
        <v-col cols="4" style="pr-5">
          <v-card>
            <v-card-title class="menu-header">
              <span class="text-h5">Name Requests (Beta)</span>
              <v-spacer></v-spacer>
            </v-card-title>
            <v-card-text class="menu-item">
              <p>
                Research and request a name for your new or existing BC existing
                BC business.
              </p>
              <p style="padding-top: 30px">
                <a
                  href="https://www.bcregistry.ca/business/auth/home/decide-business"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go to Name Request
                </a>
                <v-icon medium color="blue">mdi-link</v-icon>
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4" style="pr-5"></v-col>
      </v-row>
    </v-container>
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
