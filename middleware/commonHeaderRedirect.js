export default function ({ $config, route, redirect }) {
  const path = route.path
  // console.log('commonHeaderRedirect: ' + path)
  if (
    path === '/signin/bcsc' ||
    path === '/signin/bceid' ||
    path === '/signin/idir'
  ) {
    const redirectURL =
      sessionStorage.getItem('AUTH_WEB_URL') +
      path.substring(1) +
      '/' +
      encodeURIComponent($config.baseURL + 'dashboard')
    return redirect(redirectURL)
  }
  return route.fullPath
}
