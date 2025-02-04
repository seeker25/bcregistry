import fs from 'fs'
import colors from 'vuetify/es5/util/colors'

const packageJson = fs.readFileSync('./package.json')

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  ssr: false, // Required for sbc-common-header sessionStorage config to work.

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Service BC Connect',
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
    '~/plugins/googleAnalytics.client.ts',
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
    '@nuxtjs/gtm'
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
  gtm: {
    enabled: !!process.env.GTM_ID?.trim(),
    id: process.env.GTM_ID?.trim()
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
    nodeEnv: process.env.NODE_ENV,
    addressChangeURL: process.env.ADDRESSCHANGE_URL,
    authAPIURL: process.env.AUTH_API_URL + process.env.AUTH_API_VERSION,
    authWebUrl: process.env.AUTH_URL,
    bcaLearnMoreURL: process.env.BCA_LEARN_MORE_URL,
    bcaURL: process.env.BCA_URL,
    bceidURL: process.env.BCEID_URL,
    bcolURL: process.env.BCOL_URL,
    ldClientId: process.env.BCREGISTRY_LD_CLIENT_ID,
    baseURL: process.env.BCROS_BASE_URL,
    busSrchLearnMoreURL: process.env.BUS_SEARCH_LEARN_MORE,
    businessSearchUrl: process.env.BUSINESS_SEARCH_URL,
    businessURL: process.env.BUSINESS_URL,
    colinURL: process.env.COLIN_URL,
    csoLearnMoreURL: process.env.CSO_LEARN_MORE_URL,
    csoURL: process.env.CSO_URL,
    mhrLearnMoreURL: process.env.MHR_LEARN_MORE,
    ndsUrl: process.env.NDS_URL,
    siteRegistryLearnMoreURL: process.env.ESRA_LEARN_MORE_URL,
    siteRegistryURL: process.env.ESRA_URL,
    nameRequestURL: process.env.NAME_REQUEST_URL,
    orgBookURL: process.env.ORGBOOK_URL,
    pprURL: process.env.PPR_URL,
    regAccountCreateURL: process.env.REGISTRY_ACCOUNT_CREATE_URL,
    regApiGatewayURL: process.env.REGISTRIES_API_GATEWAY_URL,
    rptURL: process.env.RPT_URL,
    strrURL: process.env.STRR_URL,
    rptLearnMoreURL: process.env.RPT_LEARN_MORE_URL,
    siteMinderLogoutUrl: process.env.SITEMINDER_LOGOUT_URL,
    societiesURL: process.env.SOCIETIES_URL,
    statusAPIURL: process.env.STATUS_API_URL + process.env.STATUS_API_VERSION,
    willsLearnMoreURL: process.env.WILLS_LEARN_MORE_URL,
    willsURL: process.env.WILLS_URL,
    keycloakAuthUrl: process.env.KEYCLOAK_AUTH_URL,
    keycloakRealm: process.env.KEYCLOAK_REALM,
    keycloakClientId: process.env.KEYCLOAK_CLIENTID,
    supportFilingUrl: process.env.SUPPORT_FILING_URL,
    gtagId: process.env.GTAG_ID?.trim(),
    gtagDebug: process.env.GTAG_DEBUG?.trim(),
    gtmId: process.env.GTM_ID?.trim(),
    appName: JSON.parse(packageJson?.toString()).name,
    appVersion: JSON.parse(packageJson?.toString()).version,
    registryLogin: `${process.env.BCROS_BASE_URL}login`,
    registryDashboard: `${process.env.BCROS_BASE_URL}dashboard`,
    registryPprMarketing: `${process.env.BCROS_BASE_URL}ppr-marketing`,
    pprDashboard: `${process.env.PPR_URL}/dashboard`,
    businessRegistryStaffDashboard: `${process.env.AUTH_URL}staff/dashboard/active`,
    myBusinessRegistryDashboard: `${process.env.AUTH_URL}account/{accountId}/business`,
    createBcRegistriesAccount: `${process.env.AUTH_URL}choose-authentication-method`,
    signinBceidUrl: `${process.env.AUTH_URL}signin/bceid/`,
    signinBcscUrl: `${process.env.AUTH_URL}signin/bcsc/`,
    signinIdirUrl: `${process.env.AUTH_URL}signin/idir/`,
    filing: `${process.env.BCROS_BASE_URL}filing`
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
