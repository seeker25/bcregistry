import { getLoginUrl } from '@/utils'

/**
 * This middleware function is called for every page of the application.
 * It redirects all signin routes to the Auth signin URLs.
 * It redirects nested signout route to the signout route.
 */
export default async function ({ $config, route, redirect }) {
  let path = route.path

  // if this is a nested signin route, shorten it
  if (path.startsWith('/ppr-marketing/signin/')) {
    path = path.slice(14)
  }
  if (path.startsWith('/login/signin/')) {
    path = path.slice(6)
  }

  // if this is a BCSC signin, redirect to BCSC URL
  if (path.startsWith('/signin/bcsc')) {
    // redirect to Auth signin page + set URL to go to after login
    const loginUrl = getLoginUrl() || $config.registryDashboard
    const url = $config.signinBcscUrl + encodeURIComponent(loginUrl)
    return redirect(url)
  }

  // if this is a BCeID signin, redirect to BCeID URL
  if (path.startsWith('/signin/bceid')) {
    // redirect to Auth signin page + set URL to go to after login
    const loginUrl = getLoginUrl() || $config.registryDashboard
    const url = $config.signinBceidUrl + encodeURIComponent(loginUrl)
    return redirect(url)
  }

  // if this is an IDIR signin, redirect to IDIR URL
  if (path.startsWith('/signin/idir')) {
    // redirect to Auth signin page + set URL to go to after login
    const loginUrl = getLoginUrl() || $config.registryDashboard
    const url = $config.signinIdirUrl + encodeURIComponent(loginUrl)
    return redirect(url)
  }

  // if this is a nested signout route, redirect to root version
  if (route.path.startsWith('/ppr-marketing/signout')) {
    return redirect(route.path.slice(14))
  }
}
