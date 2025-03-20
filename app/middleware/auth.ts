export default defineNuxtRouteMiddleware(() => {
  const { isAuthenticated } = useKeycloak()
  if (!isAuthenticated.value) { // redirect to login page if user not authenticated
    const localePath = useLocalePath()
    return navigateTo(localePath('/login'))
  }
})
