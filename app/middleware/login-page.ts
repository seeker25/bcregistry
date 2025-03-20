export default defineNuxtRouteMiddleware((to) => {
  const { isAuthenticated } = useKeycloak()
  if (isAuthenticated.value) {
    if (to.query.return) {
      return navigateTo(to.query.return as string, { external: true })
    } else {
      const localePath = useLocalePath()
      return navigateTo(localePath('/dashboard'))
    }
  }
})
