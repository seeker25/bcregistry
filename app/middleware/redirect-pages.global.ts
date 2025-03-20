enum RedirectPaths {
  FILING = '/filing',
  SIGNIN_BCSC = '/signin/bcsc',
  SIGNIN_BCEID = '/signin/bceid',
  SIGNIN_IDIR = '/signin/idir',
  SIGNOUT = '/signout'
}

export default defineNuxtRouteMiddleware((to) => {
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

    switch (path) {
      case RedirectPaths.FILING:
        return navigateTo(rtc.supportFilingUrl, { external: true })
      case RedirectPaths.SIGNOUT:
        return useKeycloak().logout(logoutRedirectUrl)
      case RedirectPaths.SIGNIN_BCEID:
        return navigateTo(rtc.authWebURL + 'signin/bceid/' + encodeURIComponent(loginUrl), { external: true })
      case RedirectPaths.SIGNIN_BCSC:
        return navigateTo(rtc.authWebURL + 'signin/bcsc/' + encodeURIComponent(loginUrl), { external: true })
      case RedirectPaths.SIGNIN_IDIR:
        return navigateTo(rtc.authWebURL + 'signin/idir/' + encodeURIComponent(loginUrl), { external: true })
    }
  }
})
