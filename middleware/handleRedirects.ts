import { getLoginUrl } from '@/utils'

/**
 * This middleware function is called for every page of the application.
 * It navigates/redirects to other URLs/routes as needed.
 */
export default function ({ $config, route, redirect }) {
  let path = route.path

  // if this is a nested signin route, shorten it
  if (path.startsWith('/ppr-marketing/signin/')) {
    path = path.slice(14)
  }
  if (path.startsWith('/login/signin/')) {
    path = path.slice(6)
  }

  // if this is a BCSC signin, navigate to BCSC URL
  if (path.startsWith('/signin/bcsc')) {
    // redirect to Auth signin page + set URL to go to after login
    const loginUrl = getLoginUrl() || $config.registryDashboard
    const url = $config.signinBcscUrl + encodeURIComponent(loginUrl)
    window.location.assign(url)
    return
  }

  // if this is a BCeID signin, navigate to BCeID URL
  if (path.startsWith('/signin/bceid')) {
    // redirect to Auth signin page + set URL to go to after login
    const loginUrl = getLoginUrl() || $config.registryDashboard
    const url = $config.signinBceidUrl + encodeURIComponent(loginUrl)
    window.location.assign(url)
    return
  }

  // if this is an IDIR signin, navigate to IDIR URL
  if (path.startsWith('/signin/idir')) {
    // redirect to Auth signin page + set URL to go to after login
    const loginUrl = getLoginUrl() || $config.registryDashboard
    const url = $config.signinIdirUrl + encodeURIComponent(loginUrl)
    window.location.assign(url)
    return
  }

  // if this is a nested signout route, redirect to root route
  if (path.startsWith('/ppr-marketing/signout')) {
    return redirect(path.slice(14))
  }
  if (path.startsWith('/dashboard/signout')) {
    return redirect(path.slice(10))
  }
}
