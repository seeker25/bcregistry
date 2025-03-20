<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  description: string
}>()
</script>

<template>
  <li class="list-none space-y-4 text-center">
    <UIcon
      :name="icon"
      class="size-10 shrink-0"
    />
    <h4 class="font-bold text-bcGovColor-darkGray">
      {{ title }}
    </h4>
    <p>
      {{ description }}
    </p>
  </li>
</template>
