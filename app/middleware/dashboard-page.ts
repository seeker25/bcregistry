export default defineNuxtRouteMiddleware(() => {
  const { kcUser } = useKeycloak()
  const rtc = useRuntimeConfig().public

  const isStaff = kcUser.value.roles.some(role => ['staff', 'contact_centre_staff'].includes(role))

  if (isStaff) {
    return navigateTo(rtc.businessRegistryStaffDashboard, { external: true })
  }
})
