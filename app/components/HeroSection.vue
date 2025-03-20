<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const isLargeScreen = useMediaQuery('(min-width: 1024px)')

defineProps<{
  content: Collections[keyof Collections]
}>()
</script>

<template>
  <div
    class="bg-white bg-no-repeat bg-right-bottom lg:bg-[length:845px] lg:h-[30rem] xl:bg-[length:955px]"
    :style="{ backgroundImage: (isLargeScreen && content.background_image) ? `url(${content.background_image})` : '' }"
  >
    <div class="mx-auto flex size-full max-w-bcGovLg items-center px-4 py-8">
      <ContentRenderer
        v-if="content"
        :value="content"
        class="w-full lg:max-w-[40%] xl:max-w-[45%] 2xl:max-w-1/2 prose"
      />
    </div>
  </div>
</template>
