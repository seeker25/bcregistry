<template>
  <div class="accounts-footer">
    <div class="accounts-footer-info">
      Explore services by account type:
    </div>

    <nav class="text-center mt-5">
      <ul class="pa-0">
        <li>
          <a @click="smoothScroll('bcregistries-account')">BC Registries Account</a>
        </li>
        <li>
          <a @click="smoothScroll('bconline-account')">BC OnLine Account</a>
        </li>
        <li>
          <a @click="smoothScroll('direct-account')">Individual / Direct Accounts</a>
        </li>
        <li>
          <a @click="smoothScroll('no-account')">Account Not Required</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class SbcHeader extends Vue {
  async smoothScroll (id: string): Promise<void> {
    const element = document.getElementById(id)
    if (element) await element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/theme.scss';

.accounts-footer {
  background: white;
  padding-top: 35px;
  padding-bottom: 35px;
}

.accounts-footer-info {
  text-align: center;
  font-size: $px-18;
  font-weight: bold;
  color: $gray9;
}

li {
  display: inline-block;
  padding: 0.25rem 4rem;
}

a {
  font-size: $px-16;
  font-weight: bold;
  text-decoration: underline;
}

li:not(:first-child) {
  border-left: 1px solid rgba(0,0,0,0); // no colour
}

// this is the point at which the link items fit on 1 line
@media (min-width: 1268px) {
  li:not(:first-child) {
   border-left: 1px solid $gray3;
  }     
}
</style>
