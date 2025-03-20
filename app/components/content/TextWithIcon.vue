<script setup lang="ts">
defineProps<{
  icon: string
}>()
</script>

<template>
  <div class="flex w-full items-center justify-center gap-2 text-center">
    <UIcon
      :name="icon"
      class="size-5 text-blue-350 shrink-0"
    />
    <span class="text-bcGovGray-900 m-0 text-lg">
      <slot mdc-unwrap="p" />
    </span>
  </div>
</template>
