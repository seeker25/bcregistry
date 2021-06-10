<template>
  <div class="account-container">
    <v-container no-gutters>
      <div class="menu-title">BC Registries Account</div>
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="8" class="menu-info"
          >As we work to modernize our digital registries services, features
          from other account types are gradually being moved to the new BC
          Registries account system.</v-col
        >
        <v-col cols="2"></v-col>
      </v-row>
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="8" class="menu-info-bold"
          >The new BC Registries account supports the following services:</v-col
        >
        <v-col cols="2"></v-col>
      </v-row>
      <v-row class="padding-top:30px">
        <v-col cols="4" style="pr-5">
          <v-card>
            <v-card-title class="menu-header">
              <span class="text-h5">BC Business Registry</span>
              <v-spacer></v-spacer>
            </v-card-title>
            <v-card-text class="menu-item">
              <p>
                Manage the incorporation, registration, and listing of
                businesses and organizations in BC. Here you are currently able
                to:
              </p>
              <ul>
                <li>
                  <span class="menu-list-text"
                    >Incorporate or manage benefit companies</span
                  >
                </li>
                <li>
                  <span class="menu-list-text"
                    >Manage cooperative associations</span
                  >
                </li>
              </ul>
              <p style="padding-top: 30px">
                <a
                  href="https://www.bcregistry.ca/business/auth/home/decide-business"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go to BC Business Registry
                </a>
                <v-icon medium color="blue">mdi-link</v-icon>
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4" style="pr-5">
          <v-card>
            <v-card-title class="menu-header">
              <span class="text-h5">Name Requests (Beta)</span>
              <v-spacer></v-spacer>
            </v-card-title>
            <v-card-text class="menu-item">
              <p>
                A new way to research and request a name for your new or
                existing BC business. Here you will be able to:
              </p>
              <ul>
                <li>
                  <span class="menu-list-text">Search for a business name</span>
                </li>
                <li>
                  <span class="menu-list-text"
                    >Manage your existing name request</span
                  >
                </li>
              </ul>
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
        <v-col cols="4" style="pr-5">
          <v-card>
            <v-card-title class="menu-header">
              <span class="text-h5">Wills Registry</span>
              <v-spacer></v-spacer>
            </v-card-title>
            <v-card-text class="menu-item">
              <p>
                <span style="font-weight: bold">Coming soon</span> to BC
                Registries Account, Wills Registry allows solicitors, notaries,
                and title search companies to do the following:
              </p>
              <ul>
                <li><span class="menu-list-text">File a wills notice</span></li>
                <li>
                  <span class="menu-list-text"
                    >Search for an existing wills notice</span
                  >
                </li>
              </ul>
              <p style="padding-top: 30px">
                <a
                  href="https://www.bcregistry.ca/business/auth/home/decide-business"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go to Wills Registry
                </a>
                <v-icon medium color="blue">mdi-link</v-icon>
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="padding-top:30px">
        <v-col cols="4" style="pr-5">
          <v-card>
            <v-card-title class="menu-header">
              <span class="text-h5">Personal Property Registry</span>
              <v-spacer></v-spacer>
            </v-card-title>
            <v-card-text class="menu-item">
              <p>
                A private alpha release of the new Personal Property Registry is
                available to a select group of users. Current functionality
                includes:
              </p>
              <ul>
                <li><span class="menu-list-text">Registration Search</span></li>
                <li>
                  <span class="menu-list-text"
                    >Download PDF search reports</span
                  >
                </li>
              </ul>
              <p style="padding-top: 30px">
                <nuxt-link to="/ppr-marketing"
                  >Go to Personal Property Registry</nuxt-link
                >
                <v-icon medium color="blue">mdi-link</v-icon>
              </p>
            </v-card-text>
          </v-card>
        </v-col>
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
