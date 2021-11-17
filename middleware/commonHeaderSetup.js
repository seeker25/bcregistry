export default function (context) {
  if (process.client) {
    if (!sessionStorage.getItem('AUTH_WEB_URL')) {
      sessionStorage.setItem('AUTH_WEB_URL', context.$config.authURL)
      // console.log(sessionStorage.getItem('AUTH_WEB_URL'))
    }
    if (!sessionStorage.getItem('KEYCLOAK_CONFIG_PATH')) {
      sessionStorage.setItem(
        'KEYCLOAK_CONFIG_PATH',
        context.$config.keycloakConfigPath
      )
      // console.log(sessionStorage.getItem('KEYCLOAK_CONFIG_PATH'))
    }
    if (!sessionStorage.getItem('AUTH_API_URL')) {
      sessionStorage.setItem('AUTH_API_URL', context.$config.authAPIURL)
      // console.log(sessionStorage.getItem('AUTH_API_URL'))
    }
    if (!sessionStorage.getItem('STATUS_API_URL')) {
      sessionStorage.setItem('STATUS_API_URL', context.$config.statusAPIURL)
      // console.log(sessionStorage.getItem('STATUS_API_URL'))
    }
  }
}
