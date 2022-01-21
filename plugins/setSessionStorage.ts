/**
 * This plugin function is called before instantiating the root Vue.js application.
 * It populates session storage variables needed by misc components (eg, SbcHeader).
 */
export default function (context) {
  if (process.client) {
    if (!sessionStorage.getItem('AUTH_WEB_URL')) {
      sessionStorage.setItem('AUTH_WEB_URL', context.$config.authURL)
      // console.log('Auth Web URL:', sessionStorage.getItem('AUTH_WEB_URL'))
    }
    if (!sessionStorage.getItem('KEYCLOAK_CONFIG_PATH')) {
      sessionStorage.setItem('KEYCLOAK_CONFIG_PATH', context.$config.keycloakConfigPath)
      // console.log('Keycloak Config Path:', sessionStorage.getItem('KEYCLOAK_CONFIG_PATH'))
    }
    if (!sessionStorage.getItem('AUTH_API_URL')) {
      sessionStorage.setItem('AUTH_API_URL', context.$config.authAPIURL)
      // console.log('Auth API URL:', sessionStorage.getItem('AUTH_API_URL'))
    }
    if (!sessionStorage.getItem('STATUS_API_URL')) {
      sessionStorage.setItem('STATUS_API_URL', context.$config.statusAPIURL)
      // console.log('Status API URL:', sessionStorage.getItem('STATUS_API_URL'))
    }
  }
}
