import fs from 'fs'
import colors from 'vuetify/es5/util/colors'

const packageJson = fs.readFileSync('./package.json')

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  ssr: false, // Required for sbc-common-header sessionStorage config to work.

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'BC Registries and Online Services',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://nuxtjs.org/docs/directory-structure/plugins/
  plugins: [
    '~/plugins/printNameVersion.ts',
    '~/plugins/setSessionStorage.ts',
    '~/plugins/initLaunchDarkly.ts',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  server: {
    port: 8080, // default: 3000
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      light: true,
      themes: {
        light: {
          primary: '#1a5a96', // same as $BCgovLink
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          background: '#f1f3f5', // same as $gray1
          gray9: '#212529', // same as $gray9
          appBlue:'#1669BB'
        },
        dark: {
          primary: '#1a5a96', // same as $BCgovLink
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          background: '#f1f3f5', // same as $gray1
          gray9: '#212529', // same as $gray9
          appBlue:'#1669BB'
        },
      },
    },
  },

  router: {
    // Ideally, these extended routes would be handled in a middleware
    // function that handles the appropriate navigations/redirects, but
    // that doesn't seem to work when deployed.
    extendRoutes(routes) {
      // FOR SIGNIN FROM PPR-MARKETING PAGE:
      routes.push({
        path: '/ppr-marketing/signin/bcsc',
        component: '~/pages/signin/bcsc.vue',
      })
      routes.push({
        path: '/ppr-marketing/signin/bceid',
        component: '~/pages/signin/bceid.vue',
      })
      routes.push({
        path: '/ppr-marketing/signin/idir',
        component: '~/pages/signin/idir.vue',
      })

       // FOR SIGNIN FROM LOGIN PAGE:
       routes.push({
        path: '/login/signin/bcsc',
        component: '~/pages/signin/bcsc.vue',
      })
      routes.push({
        path: '/login/signin/bceid',
        component: '~/pages/signin/bceid.vue',
      })
      routes.push({
        path: '/login/signin/idir',
        component: '~/pages/signin/idir.vue',
      })

      // FOR SIGNOUT FROM PPR-MARKETING PAGE:
      routes.push({
        path: '/ppr-marketing/signout',
        component: '~/pages/signout.vue',
      })

      // FOR SIGNOUT FROM DASHBOARD PAGE:
      routes.push({
        path: '/dashboard/signout',
        component: '~/pages/signout.vue',
      })
    },
  },

  // Populate config variables...
  publicRuntimeConfig: {
    // from environment variables:
    baseURL: process.env.BCROS_BASE_URL,
    authWebUrl: process.env.AUTH_URL,
    nameRequestURL: process.env.NAME_REQUEST_URL,
    businessURL: process.env.BUSINESS_URL,
    colinURL: process.env.COLIN_URL,
    onestopURL: process.env.ONESTOP_URL,
    societiesURL: process.env.SOCIETIES_URL,
    pprURL: process.env.PPR_URL,
    willsURL: process.env.WILLS_URL,
    bcolURL: process.env.BCOL_URL,
    rptURL: process.env.RPT_URL,
    addressChangeURL: process.env.ADDRESSCHANGE_URL,
    regAccountCreateURL: process.env.REGISTRY_ACCOUNT_CREATE_URL,
    authAPIURL: process.env.AUTH_API_URL,
    statusAPIURL: process.env.STATUS_API_URL,
    ldClientId: process.env.AUTH_LD_CLIENT_ID,
    // as composite variables:
    keycloakConfigPath: process.env.BCROS_BASE_URL + process.env.KEYCLOAK_CONFIG_PATH
      + `?${new Date().getTime()}`,
    appName: JSON.parse(packageJson).name,
    appVersion: JSON.parse(packageJson).version,
    registryLogin: `${process.env.BCROS_BASE_URL}login`,
    registryDashboard: `${process.env.BCROS_BASE_URL}dashboard`,
    registryPprMarketing: `${process.env.BCROS_BASE_URL}ppr-marketing`,
    pprDashboard: `${process.env.PPR_URL}/dashboard`,
    businessRegistryStaffDashboard: `${process.env.AUTH_URL}staff/dashboard/active`,
    myBusinessRegistryDashboard: `${process.env.AUTH_URL}account/business`,
    createBcRegistriesAccount: `${process.env.AUTH_URL}choose-authentication-method`,
    signinBceidUrl: `${process.env.AUTH_URL}signin/bceid/`,
    signinBcscUrl: `${process.env.AUTH_URL}signin/bcsc/`,
    signinIdirUrl: `${process.env.AUTH_URL}signin/idir/`,
    businessSearchUrl: process.env.BUSINESS_SEARCH_URL,
    busSrchLearnMoreURL: process.env.BUS_SEARCH_LEARN_MORE,
    siteMinderLogoutUrl: process.env.SITEMINDER_LOGOUT_URL,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
