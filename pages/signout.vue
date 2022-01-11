<template>
  <SbcSignout :redirect-url="logoutURL" />
</template>

<script>
import SbcSignout from 'sbc-common-components/src/components/SbcSignout.vue'

export default {
  components: {
    SbcSignout,
  },
  computed: {
    logoutURL() {
      return this.$config.baseURL
    },
  },
}
</script>

<style lang="scss" scoped></style>
