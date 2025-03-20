<script setup lang="ts">
const isSmallScreen = useMediaQuery('(max-width: 640px)')

defineProps<{
  product: Product
}>()
</script>

<template>
  <UCard
    as="li"
    :ui="{
      // eslint-disable-next-line max-len
      root: 'relative border-l-3 border-transparent hover:border-blue-500 hover:shadow-md focus-within:border-blue-500 focus-within:border-2 cursor-pointer'
    }"
  >
    <div class="flex flex-col gap-6 sm:flex-row sm:gap-8">
      <img
        v-if="product.image"
        class="mx-auto h-[183px] w-[244px]"
        :src="`/${product.image}`"
      >
      <div class="flex flex-col justify-between">
        <div class="space-y-4 pb-4">
          <a
            :href="product.link"
            :aria-describedby="product.text"
            class="text-2xl font-semibold text-bcGovColor-darkGray no-underline focus:outline-none"
          >
            {{ product.title }}
          </a>
          <p class="text-lg text-bcGovColor-midGray">
            {{ product.text }}
          </p>
        </div>
        <UButton
          tabindex="-1"
          :label="$t('btn.open')"
          class="pointer-events-none self-start px-5 py-3"
          trailing
          :block="isSmallScreen"
          icon="i-mdi-chevron-right"
        />
      </div>
    </div>
  </UCard>
</template>

<style scoped>
a::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
}
</style>
