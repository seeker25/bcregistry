<script setup lang="ts">
defineProps<{
  text: string
  tooltip: string
}>()
</script>

<template>
  <UTooltip
    arrow
    :text="tooltip"
    :ui="{
      content: 'max-w-56 h-fit p-4',
      text: 'text-wrap'
    }"
  >
    <span class="not-prose underline decoration-dotted">
      {{ text }}
    </span>
  </UTooltip>
</template>
