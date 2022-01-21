import KeycloakService from 'sbc-common-components/src/services/keycloak.services'
import { isSigninRoute, isSignoutRoute } from '@/utils'

/**
 * This middleware function is called before the default layout is rendered.
 * It initializes KeyCloak and syncs the session (eg, logged in/out).
 * NB: This cannot be run as a plugin.
 */
export default async function ({ $config, route }) {
  console.info('Starting Keycloak service...')
  await KeycloakService.setKeycloakConfigUrl($config.keycloakConfigPath)

  // Auto-authenticate user only if they are not trying a login or logout.
  if (!isSigninRoute(route.path) && !isSignoutRoute(route.path)) {
    // Initialize token service which will do a check-sso to initiate session.
    await KeycloakService.initializeToken(null)
      .catch(err => {
        if (err?.message !== 'NOT_AUTHENTICATED') {
          throw err
        }
      })
  }
}
