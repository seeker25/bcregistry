<script setup lang="ts">
import { productDisplay } from '~/enums/product-display'
import { ProductCode } from '~/enums/product-code'

const { locale, t } = useI18n()
const rtc = useRuntimeConfig().public
const { setLoginRedirectUrl, clearLogoutRedirectUrl } = useKeycloak()
const localePath = useLocalePath()
const ldStore = useConnectLaunchdarklyStore()

useHead({
  title: t('page.productFees.title')
})

definePageMeta({
  layout: 'main-full-width'
})

interface ProductFee {
  corpType: string
  corpTypeDescription: string
  fee: number | string
  filingType: string
  productCode: string
  service: string
  serviceCharge: number
  gst: number
  total: number | string
  variable: boolean
  url?: string
}

interface GroupedProductFee {
  name: string
  productFees: ProductFee[]
}
const productsRaw = ref<ProductFee[]>([])

function groupAndTotalProducts(inputProducts: ProductFee[]): GroupedProductFee[] {
  const groupedMap = inputProducts.reduce<Record<string, GroupedProductFee>>((accumulator, currentItem) => {
    const {
      service,
      fee,
      serviceCharge,
      gst,
      url,
      productCode,
      corpType,
      corpTypeDescription,
      filingType,
      variable
    } = currentItem
    const total = typeof fee === 'string' ? fee : fee + serviceCharge + gst

    let serviceString = corpTypeDescription + ' - ' + service
    if (variable) {
      serviceString += '*'
    }
    const productFee: ProductFee = {
      service: serviceString,
      fee,
      serviceCharge,
      gst,
      total,
      url,
      filingType,
      productCode,
      corpType,
      corpTypeDescription,
      variable
    }

    if (!accumulator[productCode]) {
      accumulator[productCode] = {
        name: productCode,
        productFees: []
      }
    }

    accumulator[productCode]?.productFees.push(productFee)

    return accumulator
  }, {})
  const returnedResult = Object.values(groupedMap)
    .sort((a, b) => (a.name || '').localeCompare(b.name || ''))
    .map(group => ({
      ...group,
      services: group.productFees.sort((a, b) => (a.service || '').localeCompare(b.service || ''))
    }))
  return returnedResult
}

const groupedProducts = computed(() => groupAndTotalProducts(productsRaw.value))

const formatCurrency = (value: number | null | undefined) =>
  new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' })
    .format(value ?? 0)

const currencyCell = (key: string) => ({ row }: { row: { getValue: (key: string) => string } }) => {
  const val = row.getValue(key)
  const num = Number.parseFloat(val)
  const displayVal = isNaN(num) ? val : formatCurrency(num)
  const capitalizedVal = displayVal.charAt(0).toUpperCase() + displayVal.slice(1)
  return h('div', { class: 'text-right font-medium' }, capitalizedVal)
}

const textHeader = (text: string, alignment: string) => () =>
  h('div', { class: `text-${alignment}` }, text)

const serviceColumns = [
  {
    accessorKey: 'service',
    header: textHeader(t('page.productFees.table.header.service'), 'left'),
    cell: ({ row }: { row: { original: { service: string, url?: string } } }) => {
      if (row.original.url) {
        return h('div', {
          innerHTML: `<a href="${row.original.url}"
          target="_blank" class="underline text-bcGovColor-markBlue">${row.original.service}</a>` })
      } else {
        return h('div', row.original.service)
      }
    }
  },
  {
    accessorKey: 'fee',
    header: textHeader(t('page.productFees.table.header.fee'), 'right'),
    cell: currencyCell('fee'),
    meta: {
      class: { td: 'w-[170px]' }
    }
  },
  {
    accessorKey: 'serviceCharge',
    header: textHeader(t('page.productFees.table.header.serviceCharge'), 'right'),
    cell: currencyCell('serviceCharge'),
    meta: {
      class: { td: 'w-[170px]' }
    }
  },
  {
    accessorKey: 'gst',
    header: textHeader(t('page.productFees.table.header.gst'), 'right'),
    cell: currencyCell('gst'),
    meta: {
      class: { td: 'w-[170px]' }
    }
  },
  {
    accessorKey: 'total',
    header: textHeader(t('page.productFees.table.header.total'), 'right'),
    cell: currencyCell('total'),
    meta: {
      class: { td: 'w-[170px]' }
    }
  }
]

const productTypes = computed(() => [
  { label: t('page.productFees.selectDefault'), value: 'all' },
  ...Object.entries(productDisplay).map(([key, value]) => ({
    label: value,
    value: key
  }))
])
const selectedProduct = ref('all')

const filteredProducts = computed(() => {
  if (selectedProduct.value === 'all') {
    return groupedProducts.value
  }
  return groupedProducts.value.filter((p: { name: string }) => p.name === selectedProduct.value)
})

watch(selectedProduct, (val: string) => {
  if (val === 'all') {
    history.replaceState(null, '', ' ')
  } else {
    window.location.hash = encodeURIComponent(val)
  }
})

onMounted(async () => {
  try {
    const apiURL = ldStore.getStoredFlag('override-price-list-api-url') || rtc.payApiURL
    const response = await fetch(`${apiURL}/fees`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Language': locale.value
      }
    })
    if (!response.ok) {
      throw new Error('Failed to fetch product fees')
    }
    const data = await response.json()
    productsRaw.value = data.items
  } catch (error) {
    console.error('Error fetching product fees:', error)
  }
  setBreadcrumbs([
    { to: localePath('/'), label: t('labels.bcRegAndOLServices') },
    { label: t('labels.productFees') }
  ])
  clearLogoutRedirectUrl()
  setLoginRedirectUrl(`${rtc.baseUrl}${locale.value}/dashboard`)

  const hash = decodeURIComponent(window.location.hash.replace('#', '')).toLowerCase()
  const match = productTypes.value.find((type: { value: string }) => type.value.toLowerCase() === hash)
  if (match) {
    selectedProduct.value = match.value
  }
})
</script>

<template>
  <div>
    <div class=" bg-white bg-no-repeat bg-right-bottom">
      <div class="max-w-bcGovLg mx-auto pt-12 pb-12 px-4 flex flex-col">
        <h1 class="mb-4">
          {{ t('page.productFees.h1') }}
        </h1>
        <p>
          {{ t('page.productFees.p1') }}
        </p>
        <p>
          {{ t('page.productFees.p2') }}
        </p>
      </div>
    </div>
    <div class="max-w-bcGovLg mx-auto px-4 flex flex-col m-0 gap-4 md:gap-8 py-4 md:px-4 md:py-8">
      <UCard
        :ui="{
          root: 'divide-none flex flex-col shadow-md relative',
          header: 'bg-bcGovColor-gray2 rounded-t-sm p-0 sm:px-0',
          body: 'p-4 sm:px-7 sm:pt-7 sm:pb-0 pb-0 grow',
          footer: 'p-4 sm:pb-7 sm:px-7'
        }"
        class="mb-2"
      >
        <template #header>
          <div class="flex justify-between pl-7 pr-4 font-bold">
            <span class="py-3.75 text-left text-bcGovColor-darkGray no-underline focus:outline-none">
              {{ t('page.productFees.header') }}
            </span>
          </div>
        </template>
        <div
          class="mb-4"
        >
          {{ t('page.productFees.selectTitle') }}
        </div>
        <USelect
          id="product-select"
          v-model="selectedProduct"
          :items="productTypes"
          class="w-full md:w-[50%] p-4 mb-8"
          :content="{
            sideOffset: 0
          }"
        />
      </UCard>
      <p> {{ t('page.productFees.variableFeeNote') }} </p>
      <!-- iterate over the grouped products and display them in a card -->
      <UCard
        v-for="(product, index) in filteredProducts"
        :id="`${product.name}`"
        :key="index"
        :ui="{
          root: 'divide-none flex flex-col shadow-md relative',
          header: 'bg-bcGovColor-gray2 rounded-t-sm p-0 sm:px-0',
          body: 'p-4 sm:px-7 sm:pt-7 sm:pb-0 pb-0 grow',
          footer: 'p-4 sm:pb-7 sm:px-7'
        }"
        class="mb-10"
      >
        <template #header>
          <div class="flex justify-between pl-7 pr-4 font-bold">
            <span class="py-3.75 text-left text-bcGovColor-darkGray no-underline focus:outline-none">
              {{ productDisplay[product.name as keyof typeof productDisplay] }}
            </span>
          </div>
        </template>
        <p v-if="ProductCode.BUSINESS == product.name"
           class="text-sm">
          {{ t('page.productFees.noteContent') }}
        </p>
        <UTable
          :data="product.productFees"
          :columns="serviceColumns"
          class="product-fees-table"
        />
      </UCard>
    </div>
  </div>
</template>

<style scoped>
:deep(.product-fees-table th),
:deep(.product-fees-table td) {
  padding-left: 0 !important;
}
</style>
