<script setup lang="ts">
import type { Collections } from '@nuxt/content'

defineProps<{
  content: Collections['ppr_enCA'] | Collections['ppr_frCA'] | undefined
}>()
</script>

<template>
  <section>
    <div
      class="min-h-[340px] flex-1 bg-contain bg-center bg-no-repeat"
      :style="{ backgroundImage: `url(${content?.background_image})` }"
    />
    <article class="prose my-auto min-w-full flex-1 grow px-4 py-8 text-left sm:px-6 lg:min-w-[50%]">
      <ContentRenderer
        v-if="content"
        :value="content"
      />
    </article>
  </section>
</template>

<style scoped>
.prose :where(h2){
  font-size: var(--text-2xl);
  line-height: 1.1;
  margin-top: 0;
}
</style>
