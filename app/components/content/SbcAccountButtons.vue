<script setup lang="ts">
const isSmallScreen = useMediaQuery('(max-width: 640px)')
const localePath = useLocalePath()

defineProps({
  showCreateAccountButton: {
    type: Boolean,
    default: true
  },
  center: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div>
    <div
      v-if="!$keycloak.authenticated"
      class="flex flex-col gap-4 sm:flex-row"
      :class="{ 'justify-center': center }"
    >
      <SbcAuthMenu />
      <UButton
        v-if="showCreateAccountButton"
        :block="isSmallScreen"
        class="font-bold text-midnightBlue-900 no-underline ring-midnightBlue-900 px-6 py-3"
        :label="$t('btn.createBCRegAccount')"
        variant="outline"
        :to="useRuntimeConfig().public.regAccountCreateURL"
      />
    </div>
    <UButton
      v-else
      class="px-6 py-3 bg-midnightBlue-900 font-bold not-prose hover:bg-midnightBlue-900/80"
      :label="$t('btn.goToBCRegDashboard')"
      :block="isSmallScreen"
      :to="localePath('/dashboard')"
    />
  </div>
</template>
