enum RedirectPaths {
  FILING = '/filing',
  SIGNIN_BCSC = '/signin/bcsc',
  SIGNIN_BCEID = '/signin/bceid',
  SIGNIN_IDIR = '/signin/idir',
  SIGNOUT = '/signout'
}

export default defineNuxtRouteMiddleware(async (to) => {
  const redirectPaths = Object.values(RedirectPaths) as string[]

  // remove trailing slash if it exists
  const path = to.path.replace(/\/$/, '')

  if (redirectPaths.includes(path)) {
    const rtc = useRuntimeConfig().public
    const locale = useNuxtApp().$i18n.locale.value
    const registryLoginUrl = rtc.baseUrl + locale + '/login'
    const registryDashboardUrl = rtc.baseUrl + locale + '/dashboard'
    const logoutRedirectUrl = sessionStorage.getItem('LOGOUT_URL') || registryLoginUrl
    const loginUrl = sessionStorage.getItem('LOGIN_URL') || registryDashboardUrl
    const { login, logout } = useKeycloak()

    switch (path) {
      case RedirectPaths.FILING:
        return navigateTo(rtc.supportFilingUrl, { external: true })
      case RedirectPaths.SIGNOUT:
        await logout(logoutRedirectUrl)
        return new Promise(resolve => setTimeout(resolve, 300)) // wait for logout process to complete
      case RedirectPaths.SIGNIN_BCEID:
        return await login(IdpHint.BCEID, loginUrl)
      case RedirectPaths.SIGNIN_BCSC:
        return await login(IdpHint.BCSC, loginUrl)
      case RedirectPaths.SIGNIN_IDIR:
        return await login(IdpHint.IDIR, loginUrl)
    }
  }
})

// Leaving this here in case we need to switch back
// return navigateTo(rtc.authWebURL + 'signin/bceid/' + encodeURIComponent(loginUrl), { external: true })
// return navigateTo(rtc.authWebURL + 'signin/bcsc/' + encodeURIComponent(loginUrl), { external: true })
// return navigateTo(rtc.authWebURL + 'signin/idir/' + encodeURIComponent(loginUrl), { external: true })
