<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const { locale, t } = useI18n()
const isLargeScreen = useMediaQuery('(min-width: 1024px)')
const rtc = useRuntimeConfig().public
const { setLoginRedirectUrl, clearLogoutRedirectUrl } = useKeycloak()
const localePath = useLocalePath()

useHead({
  title: t('page.ppr.title')
})

definePageMeta({
  layout: 'main-full-width'
})

const featureCards = [
  {
    icon: 'i-sbc-table-search',
    title: t('page.ppr.section.features.cards.search.title'),
    description: t('page.ppr.section.features.cards.search.description')
  },
  {
    icon: 'i-sbc-monitor-dashboard',
    title: t('page.ppr.section.features.cards.records.title'),
    description: t('page.ppr.section.features.cards.records.description')
  },
  {
    icon: 'i-sbc-account-circle',
    title: t('page.ppr.section.features.cards.account.title'),
    description: t('page.ppr.section.features.cards.account.description')
  },
  {
    icon: 'i-sbc-table-key',
    title: t('page.ppr.section.features.cards.api.title'),
    description: t('page.ppr.section.features.cards.api.description')
  }
]

const helpfulLinks = [
  {
    title: t('page.ppr.section.helpfulLinks.cards.moreInfo.title'),
    icon: 'i-sbc-file-document-box-search-icon',
    description: t('page.ppr.section.helpfulLinks.cards.moreInfo.description'),
    link: {
      label: t('page.ppr.section.helpfulLinks.cards.moreInfo.link'),
      target: '_blank',
      // eslint-disable-next-line max-len
      href: 'https://www2.gov.bc.ca/gov/content/employment-business/business/managing-a-business/bc-registry-services-personal-property-registry'
    }
  },
  {
    title: t('page.ppr.section.helpfulLinks.cards.vehicle.title'),
    icon: 'i-sbc-vehicle-claim-icon',
    description: t('page.ppr.section.helpfulLinks.cards.vehicle.description'),
    link: {
      label: t('page.ppr.section.helpfulLinks.cards.vehicle.link'),
      target: '_blank',
      href: 'https://www.icbc.com/vehicle-registration/buy-vehicle/buy-a-used-vehicle/Vehicle-history-reports'
    }
  },
  {
    title: t('page.ppr.section.helpfulLinks.cards.legal.title'),
    icon: 'i-sbc-legal-services-icon',
    description: t('page.ppr.section.helpfulLinks.cards.legal.description'),
    link: {
      label: t('page.ppr.section.helpfulLinks.cards.legal.link'),
      target: '_blank',
      href: 'https://dyedurham.com/'
    }
  }
]

const pprSections = await queryCollection(`ppr_${locale.value.replace('-', '')}` as keyof Collections)
  .where('content_type', '=', 'landing-section')
  .all()

const createAccountSection = await queryCollection(`ppr_${locale.value.replace('-', '')}` as keyof Collections)
  .where('content_type', '=', 'create-account-section')
  .first()

const heroSection = await queryCollection(`ppr_${locale.value.replace('-', '')}` as keyof Collections)
  .where('content_type', '=', 'hero')
  .first()

onMounted(() => {
  setBreadcrumbs([
    { to: localePath('/'), label: t('labels.bcRegAndOLServices') },
    { label: t('labels.ppr') }
  ])

  // if user logs out from this page, return here
  clearLogoutRedirectUrl()

  // if user logs in from this page, go to dashboard
  setLoginRedirectUrl(`${rtc.baseUrl}${locale.value}/dashboard`)
})
</script>

<template>
  <div>
    <HeroSection :content="heroSection" />

    <div class="space-y-4 bg-gray-100 py-8 text-center lg:space-y-8 lg:py-20 app-inner-container">
      <h2 class="text-3xl font-semibold text-bcGovColor-darkGray">
        {{ $t('page.ppr.section.features.title') }}
      </h2>

      <p class="text-bcGovColor-midGray">
        {{ $t('page.ppr.section.features.description') }}
      </p>

      <ul class="flex flex-col gap-4 md:flex-row">
        <PPRFeatureCard
          v-for="feat in featureCards"
          :key="feat.title"
          :icon="feat.icon"
          :title="feat.title"
          :description="feat.description"
        />
      </ul>
    </div>

    <div class="bg-white flex flex-col py-10 lg:py-24">
      <div class="app-inner-container">
        <PPRSection
          v-for="(section, i) in pprSections"
          :key="section.path"
          :content="section"
          class="flex lg:h-[450px]"
          :class="{
            'flex-col-reverse lg:flex-row-reverse': isLargeScreen && i % 2 !== 0,
            'flex-col lg:flex-row': !isLargeScreen || i % 2 === 0
          }"
        />
      </div>
    </div>

    <div class="bg-gray-100">
      <div class="app-inner-container space-y-10 py-12 text-center lg:py-24">
        <h3 class="text-2xl font-semibold">
          {{ $t('page.ppr.section.helpfulLinks.title') }}
        </h3>
        <ul class="flex flex-wrap justify-center gap-6">
          <PPRLinkCard
            v-for="item in helpfulLinks"
            :key="item.link.href"
            v-bind="item"
          />
        </ul>
      </div>
    </div>

    <div class="bg-white">
      <div class="app-inner-container">
        <ContentRenderer
          v-if="createAccountSection"
          :value="createAccountSection"
          class="w-full min-w-full prose"
        />
      </div>
    </div>

    <PPRContactInfo />
  </div>
</template>
