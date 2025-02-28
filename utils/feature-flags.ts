import { initialize, LDClient, LDFlagSet, LDOptions, LDUser } from 'launchdarkly-js-client-sdk'

// get rid of "element implicitly has an 'any' type..."
declare const window: any

/**
 * Default flag values when LD is not available.
 * NOTE: To disable dashboard tiles, you require an entry in here.
 * Otherwise the tile will get disabled on the frontpage, but not under the dashboard section.
 */
const defaultFlagSet: LDFlagSet = {
  'bcregistry-ui-bca-enabled': false,
  'bcregistry-ui-bus-search-enabled': true,
  'bcregistry-ui-bus-search-beta-chip': false,
  'bcregistry-ui-bus-search-coming-soon-chip': false,
  'bcregistry-ui-cso-enabled': true,
  'bcregistry-ui-esra-enabled': true,
  'bcregistry-ui-mhr-enabled': true,
  'bcregistry-ui-nds-enabled': false,
  'bcregistry-ui-ppr-new-chip': true,
  'bcregistry-ui-rpt-new-chip': true,
  'bcregistry-ui-rpt-enabled': true,
  'bcregistry-ui-wills-new-chip': true,
  'bcregistry-ui-combine-search-tile': true,
  'banner-text': ' ',
  'whats-new': ' '
}

/**
 * The Launch Darkly client instance.
 */
let ldClient: LDClient = null

/**
 * An async method that initializes the Launch Darkly client.
 */
export async function initLdClient (): Promise<LDClient> {
  const envKey: string = window['ldClientId']

  if (envKey) {
    const user: LDUser = {
      // since we have no user data yet, use a shared key temporarily
      key: 'anonymous'
    }
    const options: LDOptions = {
      // fetch flags using REPORT request (to see user data as JSON)
      useReport: true,
      // opt out of sending diagnostics data
      diagnosticOptOut: true,
      // open streaming connection for live flag updates
      streaming: true
    }

    ldClient = initialize(envKey, user, options)

    try {
      await ldClient.waitForInitialization()
    } catch (e) {
      // shut down client -- `variation()` will return undefined values
      await ldClient.close()
      // NB: LD logs its own errors
    }
  }

  return ldClient
}

/**
 * An async method that updates the Launch Darkly user properties.
 * @param key a unique string identifying a user
 * @param email the user's email address
 * @param firstName the user's first name
 * @param lastName the user's last name
 * @param custom optional object of additional attributes associated with the user
 */
export async function updateLdUser (
  key: string, email: string, firstName: string, lastName: string, custom: any = null
): Promise<void> {
  if (ldClient) {
    const user: LDUser = { key, email, firstName, lastName, custom }
    try {
      await ldClient.identify(user)
    } catch (e) {
      // NB: LD logs its own errors
    }
  }
}

/**
 * A method that gets the value of the specified feature flag.
 * @param name the name of the feature flag
 * @returns the flag value/variation, or undefined if the flag is not found
 */
export function getFeatureFlag (name: string): any {
  return ldClient ? ldClient.variation(name, defaultFlagSet[name]) : defaultFlagSet[name]
}

/**
 * A method that returns if the flag has a default value set or not
 * @param flagName
 * @returns if the flag has a default value set or not
 */
export function hasDefaultValue (flagName: string): boolean {
  return Object.keys(defaultFlagSet).includes(flagName)
}
