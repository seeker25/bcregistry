<script setup lang="ts">
const isSmallScreen = useMediaQuery('(max-width: 640px)')
</script>

<template>
  <UCard>
    <div class="flex flex-col gap-6 sm:flex-row sm:gap-8">
      <USkeleton class="h-[183px] w-[244px] shrink-0 mx-auto" />
      <div class="flex flex-col justify-between w-full">
        <div class="space-y-2 pb-4 flex-1 w-full">
          <USkeleton class="h-8 w-64" />
          <USkeleton class="h-6 w-full" />
          <USkeleton class="h-6 w-1/2" />
        </div>
        <USkeleton
          :class="isSmallScreen ? 'w-full h-10' : 'w-28 h-12'"
        />
      </div>
    </div>
  </UCard>
</template>
