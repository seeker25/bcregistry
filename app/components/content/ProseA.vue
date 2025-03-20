<script setup lang="ts">
const localePath = useLocalePath()
const rtc = useRuntimeConfig().public

const props = defineProps({
  href: {
    type: String,
    required: true
  },
  target: {
    type: String,
    default: '_self',
    required: false
  },
  download: {
    type: String,
    default: undefined,
    required: false
  },
  rtcKey: {
    type: String,
    default: undefined,
    required: false
  }
})

// return localized route path if target !== blank and is not a download link
const resolvedPath = computed(() => {
  if (props.target === '_blank' || props.download !== undefined) {
    return props.href
  } else if (props.rtcKey) {
    return rtc[props.rtcKey] as string
  } else {
    return localePath(props.href)
  }
})
</script>

<template>
  <span>
    <a
      class="text-bcGovColor-markBlue underline font-bold"
      :target
      :download
      :href="resolvedPath"
    >
      <slot />
    </a>
    <span
      v-if="target === '_blank'"
      class="ml-1 inline-flex pb-1 align-middle"
    >
      <UIcon
        name="i-mdi-open-in-new"
        class="size-4 shrink-0 text-bcGovColor-markBlue"
      />
    </span>
  </span>
</template>
