<template>
  <v-container class="breadcrumb-row pa-0">
    <div class="container pa-0">
      <v-row no-gutters style="padding: 6px 0">
        <v-col cols="auto">
          <v-row no-gutters>
            <v-col v-if="backDisabled" cols="auto">
              <v-btn
                id="breadcrumb-back-btn"
                class="back-btn-disabled"
                exact
                :href="backUrl"
                disabled
                icon
                small
              >
                <v-icon>mdi-arrow-left</v-icon>
              </v-btn>
            </v-col>
            <v-col v-else cols="auto">
              <v-btn
                id="breadcrumb-back-btn"
                class="back-btn"
                exact
                :href="backUrl"
                icon
                small
              >
                <v-icon>mdi-arrow-left</v-icon>
              </v-btn>
            </v-col>
            <v-col class="pl-3" cols="auto" style="padding-top: 2px">
              <div style="border-right: thin solid #ced4da; height: 28px" />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="auto" class="pl-3" style="padding-top: 6px">
          <v-breadcrumbs class="pa-0" :items="breadcrumbs">
            <v-breadcrumbs-item
              slot="item"
              slot-scope="{ item }"
              exact
              :href="item.href"
            >
              <span v-if="!item.disabled" class="underlined breadcrumb-text">
                {{ item.text }}
              </span>
              <span v-else class="breadcrumb-text">{{ item.text }}</span>
            </v-breadcrumbs-item>
            <v-breadcrumbs-divider slot="divider" class="px-1">
              <v-icon color="white">mdi-chevron-right</v-icon>
            </v-breadcrumbs-divider>
          </v-breadcrumbs>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<script lang="ts">
import { getKeycloakRoles } from '@/utils'
export default {
  data() {
    return {
      backUrl: '',
    }
  },
  computed: {
    backDisabled() {
      // @ts-ignore - not sure why typescript isn't picking $route up
      if (this.$route.path === '/dashboard') {
        return true
      }
      return false
    },
    breadcrumbs() {
      // @ts-ignore - not sure why typescript isn't picking $route up
      if (this.$route.path === '/ppr-marketing') {
        return [
          {
            disabled: false,
            href: '/dashboard',
            text: 'BC Registries Dashboard',
          },
          {
            disabled: true,
            href: '',
            text: 'My Personal Property Registry',
          },
        ]
      }
      // @ts-ignore - not sure why typescript isn't picking $route up
      if (this.$route.path === '/dashboard') {
        const keycloakRoles = getKeycloakRoles()
        if (keycloakRoles && keycloakRoles.includes('gov_account_user')) {
          return [
            {
              disabled: true,
              href: '',
              text: 'Staff Dashboard',
            },
          ]
        }
        return [
          {
            disabled: true,
            href: '',
            text: 'BC Registries Dashboard',
          },
        ]
      }
      // @ts-ignore - not sure why typescript isn't picking $route up
      if (this.$route.path === '/') {
        return [
          {
            disabled: true,
            href: '',
            text: 'Access and manage your BC Registries and Online services',
          },
        ]
      }
      return []
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/theme.scss';
.back-btn {
  background-color: white;
  color: $primary-blue !important;
  min-height: 32px !important;
  min-width: 32px !important;
}
.back-btn-disabled {
  background-color: white;
  color: $primary-blue !important;
  min-height: 32px !important;
  min-width: 32px !important;
  opacity: 0.4 !important;
}
.breadcrumb-row {
  background-color: $BCgovBlue3-5;
  color: white;
  max-width: none;
}
.breadcrumb-text {
  color: white !important;
  font-size: 0.8125rem !important;
}
.underlined {
  color: white !important;
  text-decoration: underline;
}
</style>
