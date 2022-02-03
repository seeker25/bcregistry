import { initLdClient } from '@/utils'
import { SessionStorageKeys } from 'sbc-common-components/src/util/constants'

/**
 * This plugin function is called before instantiating the root Vue.js application.
 * It initializes LaunchDarkly.
 */
 export default async function (context) {
   // save id to window object for init function
  window['ldClientId'] = context.$config.ldClientId

  if (window['ldClientId']) {
    console.info('Initializing LaunchDarkly...')

    // initialize LD using local library
    const ldClient = await initLdClient()

    // also save flags in session for common components (eg, SbcHeader)
    const allFlags = JSON.stringify(ldClient.allFlags())
    sessionStorage.setItem(SessionStorageKeys.LaunchDarklyFlags, allFlags)
  }
}
