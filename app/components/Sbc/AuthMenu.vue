<script setup lang="ts">
const { loggedOutUserOptions } = useConnectNav()
const isSmallScreen = useMediaQuery('(max-width: 640px)')
</script>

<template>
  <UDropdownMenu
    :items="loggedOutUserOptions"
  >
    <UButton
      :label="$t('btn.loginBCRegAccount')"
      trailing-icon="i-mdi-caret-down"
      :block="isSmallScreen"
      class="px-6 py-3 bg-midnightBlue-900 font-bold"
    />
  </UDropdownMenu>
</template>
