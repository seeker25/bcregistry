<script setup lang="ts">
const MAILTO_HREF = 'mailto:bcregistries@gov.bc.ca?subject=BC%20Registries%20Support%20Request'
const BCROS_HREF = 'https://www2.gov.bc.ca/gov/content/governments/organizational-structure/'
  + 'ministries-organizations/ministries/citizens-services/bc-registries-online-services'
</script>

<template>
  <div class="w-full bg-bcGovColor-footer p-4 text-white sm:py-9">
    <div class="mx-auto flex max-w-bcGovLg flex-col gap-4 md:flex-row">
      <div class="flex-1">
        <h3 class="border-b border-blue-300 py-2 text-center text-xl font-semibold text-white sm:text-left">
          {{ $t('labels.needMoreInfo') }}
        </h3>
        <i18n-t
          keypath="contactInfo.bcros.moreInfo.link.p"
          tag="p"
          scope="global"
          class="py-6 text-white"
        >
          <template #link>
            <a
              class="text-white underline"
              target="_blank"
              :href="BCROS_HREF"
              rel="noopener noreferrer"
            >
              {{ $t('contactInfo.bcros.moreInfo.link.link') }}
            </a>
            <span class="ml-1 inline-flex pb-1 align-middle">
              <UIcon
                name="i-mdi-open-in-new"
                class="size-4 shrink-0 text-white"
              />
            </span>
          </template>
        </i18n-t>
      </div>
      <div class="flex-1 md:max-w-md lg:max-w-lg">
        <h3 class="border-b border-blue-300 py-2 text-center text-xl font-semibold text-white sm:text-left">
          {{ $t('labels.contactUs') }}
        </h3>
        <div class="space-y-7 py-6 pb-0 text-white sm:pb-6">
          <p class="text-white">
            {{ $t('contactInfo.bcros.support.general') }}
          </p>
          <ul class="space-y-1">
            <li>
              <span>
                {{ $t('contactInfo.bcRegGeneral.tollFree.title') }}
                <a
                  class="underline"
                  href="tel:+1-877-526-1526"
                >1-877-526-1526</a>
              </span>
            </li>
            <li>
              <span>
                {{ $t('contactInfo.bcRegGeneral.victoriaOffice.title') }}
                <a
                  class="underline"
                  href="tel:+1-250-387-7848"
                >250-387-7848</a>
              </span>
            </li>
            <li>
              <span>
                {{ $t('contactInfo.bcRegGeneral.email.title') }}
                <a
                  class="underline"
                  :href="MAILTO_HREF"
                >BCRegistries@gov.bc.ca</a>
              </span>
            </li>
          </ul>

          <p class="text-white">
            {{ $t('contactInfo.bcros.support.account') }}
          </p>
          <ul>
            <li>
              <span>
                {{ $t('contactInfo.bcRegGeneral.tollFree.title') }}
                <a
                  class="underline"
                  href="tel:+1-877-370-1033"
                >1-877-370-1033</a>
              </span>
            </li>
          </ul>

          <p class="text-white">
            <strong>{{ $t('contactInfo.bcRegGeneral.hours.title') }}</strong>
            <br>
            {{ $t('contactInfo.bcRegGeneral.hours.value') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
