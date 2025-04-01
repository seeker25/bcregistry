export default defineNuxtRouteMiddleware((to) => {
  const { kcUser } = useKeycloak()
  const rtc = useRuntimeConfig().public

  const isStaff = kcUser.value.roles.some(role => ['staff', 'contact_centre_staff'].includes(role))

  if (isStaff) {
    return navigateTo(rtc.businessRegistryStaffDashboard, { external: true })
  }

  if (to.query.accountid) {
    const accountStore = useConnectAccountStore()
    accountStore.switchCurrentAccount(parseInt(to.query.accountid as string))
  }
})
