<template>
  <v-menu bottom width="300" transition="slide-y-transition">
    <template #activator="{ on, attrs }">
      <v-btn
        large
        class="button-login"
        aria-label="log in"
        v-bind="attrs"
        v-on="on"
      >
        <span>Log in to my BC Registries Account</span>
        <v-icon class="mr-n1 ml-2">mdi-menu-down</v-icon>
      </v-btn>
    </template>

    <v-card class="menu-card pa-0">
      <div>
        <v-card-title class="menu-card-title pt-2 pb-2 pr-0">
          Select login method
        </v-card-title>
        <v-divider></v-divider>
      </div>

      <v-list tile dense class="menu-card-item">
        <v-list-item
          key="bcsc"
          class="menu-card-item"
          :href="
            $config.authURL +
            'signin/bcsc/' +
            encodeURIComponent($config.baseURL) +
            'dashboard'
          "
        >
          <v-list-item-icon left class="pl-0 pr-0">
            <v-icon>mdi-card-account-details-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="menu-card-item pl-0">
            BC Services Card
          </v-list-item-title>
        </v-list-item>

        <v-list-item
          key="bceid"
          class="pr-6"
          :href="
            $config.authURL +
            'signin/bceid/' +
            encodeURIComponent($config.baseURL) +
            'dashboard'
          "
        >
          <v-list-item-icon left class="pl-0">
            <v-icon>mdi-two-factor-authentication</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="menu-card-item pl-0">
            BCeID
          </v-list-item-title>
        </v-list-item>

        <v-list-item
          key="idir"
          class="pr-6"
          :href="
            $config.authURL +
            'signin/idir/' +
            encodeURIComponent($config.baseURL) +
            'dashboard'
          "
        >
          <v-list-item-icon left class="pl-0">
            <v-icon>mdi-account-group-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="menu-card-item pl-0">
            IDIR
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<style lang="scss" scoped>
@import '../assets/scss/theme.scss';

.menu-card {
  background: white !important;
  color: $gray7;
}

.menu-card-title {
  background: white !important;
  color: $gray7 !important;
  font-weight: bold;
  font-size: 0.875em;
  max-height: 1.25 em !important;
}

.menu-card-item {
  background: white !important;
  color: $gray7 !important;
  font-size: 0.875rem !important;
  text-align: left;
}

.menu-card-divider {
  background: $gray7 !important;
  color: $gray7 !important;
  padding: 0em !important;
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
</style>
