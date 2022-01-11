import colors from 'vuetify/es5/util/colors'

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

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

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

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

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
        },
      },
    },
  },

  router: {
    middleware: 'commonHeaderRedirect',
    extendRoutes(routes) {
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
      routes.push({
        path: '/ppr-marketing/signout',
        component: '~/pages/signout.vue',
      })
      routes.push({
        path: '/dashboard/signout',
        component: '~/pages/signout.vue',
      })
    },
  },

  // Environment variables for all site links defined here.
  publicRuntimeConfig: {
    baseURL: process.env.BCROS_BASE_URL,
    authURL: process.env.AUTH_URL,
    nameRequestURL: process.env.NAME_REQUEST_URL,
    businessURL: process.env.BUSINESS_URL,
    colinURL: process.env.COLIN_URL,
    onestopURL: process.env.ONESTOP_URL,
    societiesURL: process.env.SOCIETIES_URL,
    pprURL: process.env.PPR_URL,
    willsURL: process.env.WILLS_URL,
    bcolURL: process.env.BCOL_URL,
    regAccountCreateURL: process.env.REGISTRY_ACCOUNT_CREATE_URL,
    keycloakConfigPath:
      process.env.BCROS_BASE_URL + process.env.KEYCLOAK_CONFIG_PATH,
    authAPIURL: process.env.AUTH_API_URL,
    statusAPIURL: process.env.STATUS_API_URL,
  },

  devServer: {
    proxy: {
      // this is needed to prevent a CORS error when running locally (will need to update with url)
      '/local-keycloak-config-url/*': {
        target:
          'https://ppr-ui-dev.apps.silver.devops.gov.bc.ca/ppr/config/kc/',
        pathRewrite: {
          '/local-keycloak-config-url': '',
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
