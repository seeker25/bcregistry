<script setup lang="ts">
const accountStore = useConnectAccountStore()
const productInfo = useProductInfo()
const { t } = useI18n()
const localePath = useLocalePath()
const { $authApi } = useNuxtApp()
const { clearLoginRedirectUrl, setLogoutRedirectUrl, kcUser } = useKeycloak()
const rtc = useRuntimeConfig().public

useHead({
  title: t('page.dashboard.title')
})

definePageMeta({
  middleware: ['auth', 'dashboard-page']
})

const isSbcStaff = ref(false)
const helpHref = 'https://www2.gov.bc.ca/gov/content/employment-business/business/managing-a-business/'
  + 'permits-licences/news-updates/modernization-updates/modernization-resources'
const { data: userProducts, status, error } = await useLazyAsyncData(
  'user-products',
  () => productInfo.getActiveUserProducts(),
  {
    watch: [() => accountStore.currentAccount.id],
    default: () => ([])
  }
)

onMounted(async () => {
  clearLoginRedirectUrl()
  setLogoutRedirectUrl(rtc.baseUrl)

  setBreadcrumbs([
    { to: localePath('/'), label: t('ConnectBreadcrumb.default') },
    { label: t('page.dashboard.h1') }
  ])

  if (accountStore.currentAccount.id && kcUser.value.roles.includes('gov_account_user')) {
    try {
      const org = await $authApi(`/orgs/${accountStore.currentAccount.id}`)
      if (org && typeof org === 'object' && 'branchName' in org) {
        const branchName = org.branchName as string
        isSbcStaff.value = branchName.includes('Service BC')
      }
    } catch {
      isSbcStaff.value = false
    }
  }
})
</script>

<template>
  <div class="py-8 sm:py-12">
    <h1>
      {{
        isSbcStaff
          ? $t('page.dashboard.staffH1')
          : $t('page.dashboard.h1')
      }}
    </h1>
    <p class="pt-3">
      {{ $t('page.dashboard.intro') }}
    </p>
    <h2
      id="products-services-title"
      class="pb-4 pt-6 text-lg font-normal sm:pt-12"
    >
      <ConnectI18nHelper
        translation-path="page.dashboard.products.heading"
        :count="userProducts.length"
      />
    </h2>
    <div class="flex flex-col gap-6 lg:flex-row">
      <DashboardProductCardList
        :user-products="userProducts"
        :error
        :status
      />
      <div class="space-y-6">
        <UCard class="pointer-events-none shadow-none lg:w-72 xl:w-96 2xl:w-[420px]">
          <div class="space-y-4">
            <h5 class="font-semibold text-bcGovColor-darkGray">
              {{ $t('page.dashboard.help.addProds.title') }}
            </h5>
            <p class="text-sm text-bcGovColor-midGray">
              {{ $t('page.dashboard.help.addProds.p1') }}
            </p>
          </div>
        </UCard>
        <!-- eslint-disable-next-line max-len -->
        <UCard class="relative cursor-pointer border-blue-500 shadow-none hover:shadow-md focus-within:border-2 lg:w-72 xl:w-96 2xl:w-[420px]">
          <div class="flex flex-col gap-4">
            <h5 class="font-semibold text-bcGovColor-darkGray">
              {{ $t('page.dashboard.help.productFees.title') }}
            </h5>
            <p class="text-sm text-bcGovColor-midGray">
              {{ $t('page.dashboard.help.productFees.p1') }}
            </p>
            <span>
              <NuxtLink
                class="text-sm font-semibold text-blue-500 focus:outline-none"
                :to="localePath('/product-fees')"
                target="_blank"
              >
                {{ $t('page.dashboard.help.productFees.link') }}
              </NuxtLink>
              <span class="inline-flex align-middle">
                <UIcon
                  name="i-mdi-open-in-new"
                  class="ml-1 size-4 text-blue-500"
                />
              </span>
            </span>
          </div>
        </UCard>
        <!-- eslint-disable-next-line max-len -->
        <UCard class="relative cursor-pointer border-blue-500 shadow-none hover:shadow-md focus-within:border-2 lg:w-72 xl:w-96 2xl:w-[420px]">
          <div class="flex flex-col gap-4">
            <h5 class="font-semibold text-bcGovColor-darkGray">
              {{ $t('page.dashboard.help.howToUse.title') }}
            </h5>
            <p class="text-sm text-bcGovColor-midGray">
              {{ $t('page.dashboard.help.howToUse.p1') }}
            </p>
            <span>
              <a
                class="text-sm font-semibold text-blue-500 focus:outline-none"
                :href="helpHref"
                target="_blank"
              >
                {{ $t('page.dashboard.help.howToUse.link') }}
              </a>
              <span class="inline-flex align-middle">
                <UIcon
                  name="i-mdi-open-in-new"
                  class="ml-1 size-4 text-blue-500"
                />
              </span>
            </span>
          </div>
        </UCard>
      </div>
    </div>
  </div>
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
