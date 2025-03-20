<script setup lang="ts">
defineProps<{
  title: string
  icon: string
  description: string
  link: {
    label: string
    target: string
    href: string
  }
}>()
</script>

<template>
  <li
    data-testid="ppr-link-card"
    class="flex max-w-[300px] cursor-pointer flex-col items-center justify-center gap-6 rounded relative
      bg-white px-5 py-8 text-center shadow-md transition-transform focus-within:-translate-y-1 focus-within:ring-2
      focus-within:ring-bcGovGray-500 hover:-translate-y-1 hover:shadow-lg hover:ring-2 hover:ring-bcGovGray-500"
  >
    <a
      :href="link.href"
      class="text-lg font-semibold text-bcGovColor-darkGray no-underline focus:outline-none"
      :target="link.target"
    >
      {{ title }}
    </a>
    <UIcon
      :name="icon"
      class="size-10 shrink-0"
    />
    <p>{{ description }}</p>
    <div class="mt-auto px-4 pb-4 text-left sm:px-6">
      <span
        class="flex flex-wrap items-center whitespace-nowrap font-semibold
        tracking-wide text-bcGovColor-markBlue underline"
      >
        <span>
          {{ link.label }}
          <span class="inline-flex align-middle">
            <UIcon
              name="i-mdi-open-in-new"
              class="ml-1 size-5 shrink-0"
            />
          </span>
        </span>
      </span>
    </div>
  </li>
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
