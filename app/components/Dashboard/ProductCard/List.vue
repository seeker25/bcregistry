<script setup lang="ts">
defineProps<{
  userProducts: Product[]
  status: string
  error: unknown
}>()
</script>

<template>
  <div class="flex-1">
    <ul
      v-if="status === 'pending'"
      aria-labelledby="products-services-title"
      class="flex flex-col gap-6 flex-1"
    >
      <DashboardProductCardSkeleton
        v-for="i in 3"
        :key="i"
      />
    </ul>
    <UAlert
      v-else-if="error"
      color="error"
      variant="subtle"
      :title="$t('page.dashboard.products.error.title')"
      :description="$t('page.dashboard.products.error.description')"
      icon="i-mdi-alert"
      :ui="{
        root: 'ring-1 ring-(--ui-error)/100',
        title: 'font-bold text-bcGovGray-900',
        description: 'text-bcGovGray-900'
      }"
    />
    <UAlert
      v-else-if="!userProducts.length"
      as="li"
      color="warning"
      variant="subtle"
      :title="$t('page.dashboard.products.empty.title')"
      :description="$t('page.dashboard.products.empty.description')"
      icon="i-mdi-alert"
      :ui="{
        root: 'ring-1 ring-(--ui-warning)/100',
        title: 'font-bold text-bcGovGray-900',
        description: 'text-bcGovGray-900'
      }"
    />
    <ul
      v-else
      aria-labelledby="products-services-title"
      class="flex flex-col gap-6 flex-1"
    >
      <DashboardProductCard
        v-for="product in userProducts"
        :key="product.link"
        :product
      />
    </ul>
  </div>
</template>
