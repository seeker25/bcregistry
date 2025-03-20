<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const rtc = useRuntimeConfig().public
const accountStore = useConnectAccountStore()

const props = defineProps<{
  content: Collections['home_product_cards_enCA'] | undefined
}>()

const resolvedPath = computed(() => {
  const link = props.content?.link

  if (!link) { // return early if no link
    return ''
  }

  let path = ''

  if (link.href) {
    path = link.href
  } else if (link.rtcKey) {
    path = rtc[link.rtcKey] as string
  }

  // append account id if required
  if (link.appendAccountId && accountStore.currentAccount?.id) {
    const accountId = accountStore.currentAccount.id
    path += `?accountid=${accountId}`
  }

  return path
})

const linkStyle = 'cursor-pointer focus-within:ring-2 focus-within:ring-blue-350'
  + 'hover:-translate-y-1 hover:inset-ring-1 hover:ring-blue-350 transition-all'
</script>

<template>
  <UCard
    v-if="content"
    as="li"
    :class="[
      (content?.link && content?.badge !== 'MOVED') ? linkStyle : '',
      content?.badge === 'MOVED' ? 'opacity-80' : ''
    ]"
    :ui="{
      root: 'max-w-[390px] divide-none flex flex-col shadow-md relative',
      header: 'bg-blue-350 rounded-t-sm p-0 sm:px-0',
      body: 'p-4 sm:px-7 sm:pt-7 sm:pb-0 pb-0 grow',
      footer: 'p-4 sm:pb-7 sm:px-7'
    }"
  >
    <template #header>
      <div class="flex justify-between pl-7 pr-4 font-bold">
        <span class="py-3.75 text-left text-white no-underline focus:outline-none">
          {{ content.name }}
        </span>
        <span
          v-if="content.badge"
          class="rounded-b bg-bcGovColor-navDivider px-2 py-1 text-sm text-midnightBlue-900 h-min"
        >
          {{ content.badge }}
        </span>
      </div>
    </template>

    <ContentRenderer
      class="prose"
      :value="content"
    />

    <template #footer>
      <div
        v-if="content.link && content.badge !== 'MOVED'"
        class="text-left"
      >
        <NuxtLink
          :to="resolvedPath"
          :target="content.link.target"
          :external="content.link.target === '_blank'"
          class="py-3.75 text-left text-white no-underline focus:outline-none"
        >
          <span class="flex flex-wrap items-center font-semibold tracking-wide text-bcGovColor-markBlue underline">
            <span>
              {{ content.link?.label }}
              <span class="inline-flex align-middle">
                <UIcon
                  :name="content.link.target === '_blank' ? 'i-mdi-open-in-new' : 'i-mdi-arrow-right-thin'"
                  class="ml-1 size-5"
                />
              </span>
            </span>
          </span>
        </NuxtLink>
      </div>
    </template>
  </UCard>
</template>

<style scoped>
.prose :where(ul){
  list-style-type: square;
  margin-top: 1.25em;
  margin-bottom: 1.25em;
  padding-left: 1em;
  list-style-position: outside;
  font-weight: 900;
}

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
