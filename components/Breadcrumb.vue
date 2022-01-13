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
            :disabled="backDisabled"
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

@Component({})
export default class Breacrumb extends Vue {
  get backDisabled(): boolean {
    if ((this.$route.path === '/dashboard') || (this.$route.path === '/')) {
      return true
    }
    return false
  }

  get breadcrumbs(): Array<any> {
    if ((this.$route.path === '/ppr-marketing') || (this.$route.path === '/ppr-marketing/')) {
      return [
        {
          disabled: false,
          href: '/',
          text: 'BC Registries and Online Services',
        },
        {
          disabled: true,
          href: '',
          text: 'Personal Property Registry',
        },
      ]
    }

    if ((this.$route.path === '/dashboard') || (this.$route.path === '/dashboard/')) {
      return [
        {
          disabled: true,
          href: '',
          text: 'BC Registries Dashboard',
        },
      ]
    }

    if (this.$route.path === '/') {
      return [
        {
          disabled: true,
          href: '',
          text: 'BC Registries and Online Services',
        },
      ]
    }

    return []
  }

  get backUrl(): string | boolean {
    if ((this.$route.path === '/ppr-marketing') || (this.$route.path === '/ppr-marketing/')) {
      return '/'
    }
    return false
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
  font-size: 0.8125rem !important;
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
