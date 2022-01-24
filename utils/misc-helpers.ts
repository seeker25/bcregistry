import { Routes } from '@/enums'

/**
 * Returns true if current route is Signin.
 */
export function isSigninRoute (path = window.location.pathname): boolean {
  return path.includes(Routes.SIGNIN)
}

/**
 * Returns true if current route is Signout.
 */
export function isSignoutRoute (path = window.location.pathname): boolean {
  return path.includes(Routes.SIGNOUT)
}

/**
 * "Sleeps" for specified timeout. Must be awaited.
 */
 export function sleep (ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}
