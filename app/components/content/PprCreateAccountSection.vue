<script setup lang="ts">
const rtc = useRuntimeConfig().public
const isSmallScreen = useMediaQuery('(max-width: 640px)')
</script>

<template>
  <div class="flex flex-col py-12 lg:py-24">
    <div class="text-center">
      <slot name="header" />
    </div>
    <div class="flex flex-wrap gap-4">
      <div class="flex-1 min-w-96">
        <slot name="content1" />
      </div>
      <div class="flex-1 min-w-96">
        <slot name="content2" />
      </div>
    </div>
    <div class="flex flex-col justify-center gap-4 pt-6 sm:flex-row not-prose">
      <UButton
        v-if="!$keycloak.authenticated"
        :label="$t('btn.createBCRegAccount')"
        class="bg-midnightBlue-900 font-bold px-6 py-3"
        size="xl"
        :to="rtc.authWebURL + 'choose-authentication-method'"
        :block="isSmallScreen"
      />
      <UButton
        variant="outline"
        :label="$t('btn.learnMore')"
        size="xl"
        class="font-bold text-midnightBlue-900 no-underline ring-midnightBlue-900 px-6 py-3"
        :to="rtc.setupBCSCURL"
        :block="isSmallScreen"
      />
    </div>
  </div>
</template>

<style scoped>
:slotted(h2) {
  font-size: var(--text-3xl);
  margin-top: 0;
}

:slotted(h3) {
  font-size: var(--text-2xl);
  margin-top: 0;
}
</style>
