<script setup lang="ts">
const isSmallScreen = useMediaQuery('(max-width: 640px)')
</script>

<template>
  <div>
    <UButton
      class="px-6 py-3 bg-midnightBlue-900 font-bold"
      :label="$t('btn.loginBCOL')"
      :block="isSmallScreen"
      :to="useRuntimeConfig().public.bcolURL"
    />
  </div>
</template>
