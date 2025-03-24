<script setup lang="ts">
import type { Collections } from '@nuxt/content'

type CardCollection = Collections['home_product_cards_enCA'] | Collections['home_product_cards_frCA']

const { locale } = useI18n()

const props = defineProps<{
  section: string
}>()

const cards = await queryCollection(`home_product_cards_${locale.value.replace('-', '')}` as keyof Collections)
  .where('path', 'LIKE', `%${props.section}%`)
  .all()
</script>

<template>
  <div class="flex flex-col max-w-bcGovLg mx-auto">
    <div class="px-2 prose text-center mx-auto w-full sm:max-w-3/4">
      <slot name="header" />
    </div>
    <ul class="m-0 mx-auto flex list-square list-inside flex-wrap justify-center gap-4 md:gap-8 py-4 md:px-4 md:py-8">
      <SbcProductCard
        v-for="card in cards"
        :key="card.path"
        :content="card as CardCollection"
      />
    </ul>
    <div class="bg-blue-100 p-4 sm:px-2 sm:py-7 text-center">
      <div class="sm:max-w-3/4 mx-auto flex flex-col gap-4">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.prose :where(a){
  color: var(--color-bcGovGray-900);
  text-decoration: none;
  font-weight: 900;
  font-size: 2rem;
}

.prose :where(strong){
  color: var(--color-bcGovGray-900);
  font-weight: 900;
  font-size: var(--text-lg);
}
</style>
