import { SessionStorageKeys } from 'sbc-common-components/src/util/constants'

/**
 * This plugin function is called before instantiating the root Vue.js application.
 * It populates session storage variables needed by misc components (eg, SbcHeader).
 */
export default function (context) {
  if (process.client) {
    if (!sessionStorage.getItem(SessionStorageKeys.AuthWebUrl)) {
      sessionStorage.setItem(SessionStorageKeys.AuthWebUrl, context.$config.authWebUrl)
      // console.log('Auth Web URL:', sessionStorage.getItem('AUTH_WEB_URL'))
    }
    if (!sessionStorage.getItem('KEYCLOAK_CONFIG_PATH')) {
      sessionStorage.setItem('KEYCLOAK_CONFIG_PATH', context.$config.keycloakConfigPath)
      // console.log('Keycloak Config Path:', sessionStorage.getItem('KEYCLOAK_CONFIG_PATH'))
    }
    if (!sessionStorage.getItem(SessionStorageKeys.AuthApiUrl)) {
      sessionStorage.setItem(SessionStorageKeys.AuthApiUrl, context.$config.authAPIURL)
      // console.log('Auth API URL:', sessionStorage.getItem('AUTH_API_URL'))
    }
    if (!sessionStorage.getItem(SessionStorageKeys.StatusApiUrl)) {
      sessionStorage.setItem(SessionStorageKeys.StatusApiUrl, context.$config.statusAPIURL)
      // console.log('Status API URL:', sessionStorage.getItem('STATUS_API_URL'))
    }
  }
}
