import KeycloakService from 'sbc-common-components/src/services/keycloak.services'
import { isSignoutRoute } from '@/utils'

/**
 * This middleware function is called before the default layout is rendered.
 * It initializes Keycloak and syncs the session (eg, logged in/out).
 * NB: This does not run correctly as a plugin.
 */
export default async function ({ $config, route }) {
  console.info('Starting Keycloak service...')

  const keycloakConfig: any = {
    url: $config.keycloakAuthUrl,
    realm: $config.keycloakRealm,
    clientId: $config.keycloakClientId
  }

  await KeycloakService.setKeycloakConfigUrl(keycloakConfig)

  // Auto-authenticate user unless they are trying to log out.
  if (!isSignoutRoute(route.path)) {
    // Initialize token service which will do a check-sso to initiate session.
    await KeycloakService.initializeToken(null)
      .catch(err => {
        if (err?.message !== 'NOT_AUTHENTICATED') {
          throw err
        }
      })
  }
}
