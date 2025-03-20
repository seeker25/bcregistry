<script setup lang="ts">
const { t, locale } = useI18n()
const { login } = useKeycloak()
const rtc = useRuntimeConfig().public

useHead({
  title: t('page.login.title')
})

definePageMeta({
  middleware: 'login-page',
  hideBreadcrumbs: true
})

const urlReturn = useRoute().query.return

const redirectUrl = urlReturn !== undefined
  ? urlReturn as string
  : rtc.baseUrl + locale.value + '/dashboard'

const loginOptions = [
  {
    label: t('btn.loginBCSC'),
    icon: 'i-mdi-account-card-details-outline',
    click: () => login(IdpHint.BCSC, redirectUrl)
  },
  {
    label: t('btn.loginBCEID'),
    icon: 'i-mdi-two-factor-authentication',
    click: () => login(IdpHint.BCEID, redirectUrl)
  },
  {
    label: t('btn.loginIDIR'),
    icon: 'i-mdi-account-group-outline',
    click: () => login(IdpHint.IDIR, redirectUrl)
  }
]

const isSessionExpired = sessionStorage.getItem(ConnectStorageKeys.CONNECT_SESSION_EXPIRED)
</script>

<template>
  <div class="flex grow flex-col items-center justify-center py-10">
    <div class="flex flex-col items-center gap-4">
      <h1>
        {{ $t('page.login.h1') }}
      </h1>
      <UAlert
        v-if="isSessionExpired"
        color="warning"
        variant="subtle"
        :title="$t('alert.sessionExpired.title')"
        :description="$t('alert.sessionExpired.description')"
        icon="i-mdi-alert"
        :ui="{
          root: 'ring-1 ring-(--ui-warning)/100',
          title: 'font-bold text-bcGovGray-900',
          description: 'text-bcGovGray-900'
        }"
      />
      <UCard class="my-auto max-w-md">
        <img
          src="/img/BCReg_Generic_Login_image.jpg"
          class="pb-4"
          :alt="$t('imageAlt.genericLogin')"
        >
        <div class="space-y-4 pt-2.5">
          <div
            v-for="(option, i) in loginOptions"
            :key="option.label"
            class="flex flex-col items-center gap-1"
          >
            <UButton
              :variant="i === 0 ? 'solid' : 'outline'"
              block
              :icon="option.icon"
              :label="option.label"
              @click="option.click"
            />
          </div>
        </div>
      </UCard>
    </div>
  </div>
</template>
