<template>
  <div id="breadcrumb">
    <v-container>
      <v-row no-gutters>
        <v-col cols="auto">
          <v-btn
            id="breadcrumb-back-btn"
            class="back-btn"
            exact
            :href="backUrl"
            icon small
            :disabled="isBackDisabled"
          >
            <v-icon color="primary">mdi-arrow-left</v-icon>
          </v-btn>
        </v-col>

        <v-divider class="mx-3" color="white" vertical />

        <v-col cols="auto" class="breadcrumb-col">
          <v-breadcrumbs :items="breadcrumbs" class="pa-0 ma-0">
            <template #divider>
              <v-icon color="white" class="mx-n2">mdi-chevron-right</v-icon>
            </template>

            <v-breadcrumbs-item
              slot="item"
              slot-scope="{ item }"
              exact
              :href="item.href"
            >
              <span
                class="breadcrumb-text"
                :class="item.disabled ? 'inactive-crumb' : 'active-crumb'"
              >
                {{ item.text }}
              </span>
            </v-breadcrumbs-item>
          </v-breadcrumbs>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import { Routes } from '@/enums'

@Component({})
export default class Breacrumb extends Vue {
  @Getter isSbcStaff!: boolean

  /** Whether the back button should be disabled. */
  get isBackDisabled (): boolean {
    switch (this.$route.path) {
      case `${Routes.HOME}`:
      case `${Routes.DASHBOARD}`:
      case `${Routes.DASHBOARD}/`: return true
    }
    return false
  }

  /** The list of breadcrumbs for the current route. */
  get breadcrumbs (): any[] {
    switch (this.$route.path) {
      case `${Routes.PPR_MARKETING}`: 
      case `${Routes.PPR_MARKETING}/`:
        return [
          {
            disabled: false,
            href: `${Routes.HOME}`,
            text: 'BC Registries and Online Services',
          },
          {
            disabled: true,
            href: null,
            text: 'Personal Property Registry',
          },
        ]

      case `${Routes.DASHBOARD}`:
      case `${Routes.DASHBOARD}/`:
        return [
          {
            disabled: true,
            href: null,
            text: this.isSbcStaff ? 'Staff Dashboard' : 'BC Registries Dashboard',
          },
        ]

      case `${Routes.HOME}`:
        return [
          {
            disabled: true,
            href: null,
            text: 'BC Registries and Online Services',
          },
        ]
    }

    return []
  }

  /** The back URL for the current route. */
  get backUrl (): string {
    // for now, in all cases, the back URL is the top route
    // this can be updated later if the back URL is anything else
    return `${Routes.HOME}`
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/theme.scss';

#breadcrumb {
  max-height: 45px;
  background-color: $app-dk-blue;
  color: white;
  display: flex;
  align-items: center;

  li {
    margin-bottom: 0 !important;
  }
}

.back-btn {
  background-color: white;
  color: $app-dk-blue;
}

.breadcrumb-text {
  font-size: $px-13 !important;
  color: white;
}

.breadcrumb-col {
  display: flex;
  align-items: center;
}

.active-crumb {
  text-decoration: underline !important;
  cursor: pointer !important;
}

.inactive-crumb {
  cursor: default !important; // To override default or local link styling
}

::v-deep {
  .v-breadcrumbs .v-breadcrumbs__divider {
    color: white !important;
    margin-bottom: 0;

    &:nth-child(2n) {
      padding: 0 12px !important;
    }
  }

  .theme--light.v-btn.v-btn--disabled {
    opacity: .4;
    .v-icon {
      color: $app-blue !important;
    }
  }
}</style>
