// https://nuxt.com/docs/api/configuration/nuxt-config

import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))

// disable gtm if dev or test env or missing gtm id
const isTestOrDev = ['test', 'development'].includes((process.env.NUXT_ENVIRONMENT_HEADER || '').toLowerCase())
const isGtmIdEmpty = !(process.env.NUXT_GTM_ID?.trim() || '')
const isGtmEnabled = !(isTestOrDev || isGtmIdEmpty)

export default defineNuxtConfig({
  ssr: false,

  devtools: { enabled: false },

  css: [
    '~/assets/css/tw.css',
    '~/assets/css/prose.css'
  ],

  modules: [
    '@nuxt/eslint',
    '@nuxt/content',
    '@zadigetvoltaire/nuxt-gtm',
    'nuxt-gtag'
  ],

  extends: [
    '@sbc-connect/nuxt-core-layer-beta'
  ],

  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },

  routeRules: {
    '/': { redirect: '/en-CA' }
  },

  i18n: {
    locales: [
      {
        name: 'English',
        code: 'en-CA',
        language: 'en-CA',
        dir: 'ltr',
        file: 'en-CA.ts'
      },
      {
        name: 'Français',
        code: 'fr-CA',
        language: 'fr-CA',
        dir: 'ltr',
        file: 'fr-CA.ts'
      }
    ],
    strategy: 'prefix',
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'en-CA',
    detectBrowserLanguage: false,
    vueI18n: join(currentDir, './i18n.config.ts')
  },

  icon: {
    customCollections: [{
      prefix: 'sbc',
      dir: './app/assets/svgs'
    }]
  },

  gtm: {
    enabled: isGtmEnabled,
    id: isGtmEnabled ? process.env.NUXT_GTM_ID?.trim() as string : 'GTM-UNDEFINED',
    debug: false,
    defer: true
  },

  gtag: {
    enabled: !!process.env.NUXT_GTAG_ID?.trim(),
    id: process.env.NUXT_GTAG_ID?.trim()
  },

  // full options
  // https://github.com/eslint-stylistic/eslint-stylistic/blob/main/packages/eslint-plugin/configs/customize.ts#L16
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        semi: false,
        commaDangle: 'never',
        jsx: false,
        quotes: 'single'
      }
    }
  },

  vite: {
    server: {
      watch: {
        usePolling: true
      }
    }
  },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-11-27',

  runtimeConfig: {
    public: {
      version: `Registry UI v${process.env.npm_package_version || ''}`,
      addressChangeURL: process.env.NUXT_ADDRESS_CHANGE_URL,
      bcaLearnMoreURL: process.env.NUXT_BCA_LEARN_MORE_URL,
      bcaURL: process.env.NUXT_BCA_URL,
      bceidURL: process.env.NUXT_BCEID_URL,
      bcolURL: process.env.NUXT_BCOL_URL,
      busSrchLearnMoreURL: process.env.NUXT_BUS_SEARCH_LEARN_MORE,
      businessSearchUrl: process.env.NUXT_BUSINESS_SEARCH_URL,
      businessURL: process.env.NUXT_BUSINESS_URL,
      colinURL: process.env.NUXT_COLIN_URL,
      csoLearnMoreURL: process.env.NUXT_CSO_LEARN_MORE_URL,
      csoURL: process.env.NUXT_CSO_URL,
      mhrLearnMoreURL: process.env.NUXT_MHR_LEARN_MORE,
      ndsUrl: process.env.NUXT_NDS_URL,
      siteRegistryLearnMoreURL: process.env.NUXT_ESRA_LEARN_MORE_URL,
      siteRegistryURL: process.env.NUXT_ESRA_URL,
      nameRequestURL: process.env.NUXT_NAME_REQUEST_URL,
      orgBookURL: process.env.NUXT_ORGBOOK_URL,
      pprURL: process.env.NUXT_PPR_URL,
      regAccountCreateURL: process.env.NUXT_REGISTRY_ACCOUNT_CREATE_URL,
      regApiGatewayURL: process.env.NUXT_REGISTRIES_API_GATEWAY_URL,
      rptURL: process.env.NUXT_RPT_URL,
      rptLearnMoreURL: process.env.NUXT_RPT_LEARN_MORE_URL,
      siteMinderLogoutUrl: process.env.NUXT_SITEMINDER_LOGOUT_URL,
      societiesURL: process.env.NUXT_SOCIETIES_URL,
      statusAPIURL: `${process.env.NUXT_STATUS_API_URL}${process.env.NUXT_STATUS_API_VERSION}`,
      willsLearnMoreURL: process.env.NUXT_WILLS_LEARN_MORE_URL,
      willsURL: process.env.NUXT_WILLS_URL,
      supportFilingUrl: process.env.NUXT_SUPPORT_FILING_URL,
      setupBCSCURL: process.env.NUXT_SETUP_BCSC_URL,
      businessRegistryStaffDashboard: `${process.env.NUXT_AUTH_WEB_URL}staff/dashboard/active`,
      myBusinessRegistryDashboard: `${process.env.NUXT_AUTH_WEB_URL}account/{accountId}/business`,
      pprDashboard: `${process.env.NUXT_PPR_URL}/dashboard`,
      strrURL: process.env.NUXT_STRR_URL,
      createAccountNoAuthURL: `${process.env.NUXT_AUTH_WEB_URL}choose-authentication-method`,
      ldClientId: process.env.NUXT_LD_CLIENT_ID || ''
    }
  }
})
