<template>
  <v-card
    :class="{ 'service-container': true, 'border-left': addBorder }"
    :href="product.link"
    @mouseover="addBorder = true"
    @mouseleave="addBorder = false"
  >
    <v-row align="center" no-gutters>
      <v-col cols="auto">
        <img v-if="product.image" class="service-img" :src="`/${product.image}.jpg`" />
      </v-col>
      <v-col class="service-info">
        <h2>{{ product.title }}</h2>
        <p class="pt-3 ma-0">{{ product.text }}</p>
        <v-btn class="action-btn px-5">
          Open
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>
<script lang="ts">
import { ProductI } from '@/interfaces'

export default {
  name: 'UserProduct',
  props: {
    product: Object as () => ProductI
  },
  data() {
    return {
      addBorder: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/theme.scss';
.action-btn {
  background-color: $primary-blue !important;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  height: 40px !important;
  margin-top: 30px;
  text-transform: none;
  pointer-events: none;
}
.border-left {
  border-left: 3px solid $primary-blue !important;
}
.service-container {
  border-left: 3px solid transparent;
  cursor: pointer;
  max-width: none;
  padding: 30px;
}
.service-img {
  height: 225px;
  width: 300px;
}
.service-info {
  padding-left: 30px !important;

  p {
    color: $gray7;
    font-size: 1rem;
  }
}
</style>
