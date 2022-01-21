import { SessionStorageKeys } from 'sbc-common-components/src/util/constants'

/**
 * Returns true if current route is Signin.
 */
export function isSigninRoute (path = window.location.pathname): boolean {
  return path.includes('/signin')
}

/**
 * Returns true if current route is Signout.
 */
export function isSignoutRoute (path = window.location.pathname): boolean {
  return path.includes('/signout')
}

/**
 * "Sleeps" for specified timeout. Must be awaited.
 */
 export function sleep (ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}
