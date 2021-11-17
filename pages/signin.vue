<template>
  <sbc-signin @sync-user-profile-ready="onProfileReady()" />
</template>
<script>
import SbcSignin from 'sbc-common-components/src/components/SbcSignin.vue'
import { SessionStorageKeys } from 'sbc-common-components/src/util/constants'

export default {
  components: {
    SbcSignin,
  },
  methods: {
    onProfileReady() {
      if (!sessionStorage.getItem(SessionStorageKeys.KeyCloakToken)) {
        this.$router.push({ path: '/' })
      }
      this.$router.push({ path: '/dashboard' })
    },
  },
}
</script>

<style lang="scss" scoped></style>
