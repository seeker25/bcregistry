export default defineNuxtRouteMiddleware((to) => {
  // Check if the route starts with /login
  if (to.path.startsWith('/login')) {
    // Get all query parameters
    const query = { ...to.query }

    // Create the redirect URL with the same query parameters
    return navigateTo({
      path: '/en-CA/login',
      query: query
    })
  }
})
