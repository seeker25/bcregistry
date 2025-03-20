/** Sets site minder URL to clear cookie. */
export function setSiteMinderLogoutUrl(): void {
  const url = useRuntimeConfig().public.siteMinderLogoutUrl
  if (url?.includes('http')) {
    sessionStorage.setItem('SITEMINDER_LOGOUT_URL', url)
  }
}
