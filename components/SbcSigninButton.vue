<template>
  <div data-app>
    <v-menu bottom width="330" transition="slide-y-transition">
      <template #activator="{ on, attrs }">
        <v-btn
          large
          class="button-login mr-4"
          aria-label="log in"
          v-bind="attrs"
          v-on="on"
        >
          <span>Log in to my BC Registries Account</span>
          <v-icon class="mr-n1 ml-2">mdi-menu-down</v-icon>
        </v-btn>
      </template>
      <v-card class="menu-card">
        <div>
          <v-card-title class="menu-card-title"
            >Select login method</v-card-title
          >
          <v-divider class="menu-card-divider"></v-divider>
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
            <v-list-item-icon left>
              <v-icon color="#38598a">mdi-card-account-details-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="menu-card-item"
              >BC Services Card</v-list-item-title
            >
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
            <v-list-item-icon left>
              <v-icon color="#38598a">mdi-two-factor-authentication</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="menu-card-item">BCeID</v-list-item-title>
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
            <v-list-item-icon left>
              <v-icon color="#38598a">mdi-account-group-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="menu-card-item">IDIR</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/theme.scss';

.button-login {
  color: #fff !important;
  background: #38598a !important;
  font-weight: bold;
  font-size: 0.75em;
  text-decoration: none;
  text-transform: none;
  text-align: center;
  border-radius: 0.25rem;
  flex: auto;
}
.menu-card {
  background: #fff !important;
  color: $gray7;
}
.menu-card-title {
  background: #fff !important;
  color: $gray7;
  font-weight: bold;
  font-size: 14px;
}
.menu-card-item {
  background: #fff !important;
  color: $gray7 !important;
  font-size: 14px;
  text-align: left;
  padding-left: 15px;
}
.menu-card-divider {
  background: $gray7 !important;
  color: $gray7 !important;
}
</style>
