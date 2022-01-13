<template>
  <v-menu bottom width="300" transition="slide-y-transition">
    <template #activator="{ on, attrs }">
      <v-btn
        large
        class="sbc-signin-button button-white-on-blue"
        aria-label="log in"
        v-bind="attrs"
        v-on="on"
      >
        <span>Log in to my BC Registries Account</span>
        <v-icon class="mr-n1 ml-2">mdi-menu-down</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-card-title>Select login method</v-card-title>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          key="bcsc"
          :href="
            $config.authURL +
            'signin/bcsc/' +
            encodeURIComponent($config.baseURL) +
            'dashboard'
          "
        >
          <v-list-item-icon class="mr-4">
            <v-icon>mdi-card-account-details-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>BC Services Card</v-list-item-title>
        </v-list-item>

        <v-list-item
          key="bceid"
          :href="
            $config.authURL +
            'signin/bceid/' +
            encodeURIComponent($config.baseURL) +
            'dashboard'
          "
        >
          <v-list-item-icon class="mr-4">
            <v-icon>mdi-two-factor-authentication</v-icon>
          </v-list-item-icon>
          <v-list-item-title>BCeID</v-list-item-title>
        </v-list-item>

        <v-list-item
          key="idir"
          :href="
            $config.authURL +
            'signin/idir/' +
            encodeURIComponent($config.baseURL) +
            'dashboard'
          "
        >
          <v-list-item-icon class="mr-4">
            <v-icon>mdi-account-group-outline</v-icon>
            </v-list-item-icon>
          <v-list-item-title>IDIR</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<style lang="scss" scoped>
@import '../assets/scss/theme.scss';

.v-card {
  background: white !important;
}

.v-card__title {
  color: $gray9 !important;
  font-weight: bold;
  font-size: 0.875em;
  line-height: 20px;
}

.v-list-item__title {
  color: $gray9 !important;
  font-size: 0.875rem !important;
}
</style>
