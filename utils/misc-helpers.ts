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
 * Returns true if current route is Login.
 */
export function isLoginRoute (path = window.location.pathname): boolean {
  return path.includes(Routes.LOGIN)
}

/**
 * "Sleeps" for specified timeout. Must be awaited.
 */
 export function sleep (ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Sets URL to return to when user logs out.
 */
export function setLogoutUrl (url: string): void {
  sessionStorage.setItem('LOGOUT_URL', url)
}

/**
 * Gets URL to return to when user logs out.
 */
export function getLogoutUrl (): string {
  return sessionStorage.getItem('LOGOUT_URL')
}
