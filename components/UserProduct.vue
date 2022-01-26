<template>
  <v-card class="service-container" :href="product.link">
    <v-row align="center" no-gutters>
      <v-col cols="auto">
        <img
          v-if="product.image"
          class="service-img"
          :src="`/${product.image}`"
        />
      </v-col>
      <v-col class="service-info">
        <h2>{{ product.title }}</h2>
        <p class="pt-3 ma-0">{{ product.text }}</p>
        <v-btn class="action-btn px-5" :depressed="true">
          <span>Open</span>
          <v-icon class="pl-1">mdi-chevron-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { ProductI } from '@/interfaces'

@Component({})
export default class UserProduct extends Vue {
  @Prop({ default: null })
  readonly product: ProductI
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/theme.scss';

.action-btn {
  background-color: $primary-blue !important;
  color: white;
  font-size: $px-14;
  font-weight: 600;
  height: 40px !important;
  margin-top: 30px;
  text-transform: none;
  pointer-events: none;
}

.service-container {
  border-left: 3px solid transparent;
  cursor: pointer;
  max-width: none;
  padding: 30px;

  &:hover {
    border-left: 3px solid $primary-blue !important;
    box-shadow: 1px 1px 6px 0px $gray6;
  }
}

.service-img {
  height: 225px;
  width: 300px;
}

.service-info {
  padding-left: 30px !important;

  p {
    color: $gray7;
    font-size: $px-16;
  }
}
</style>
