<template>
  <div>
    <div class="pa-0">
      <article>
        <header class="hero-banner d-flex align-center">
          <div class="container">
            <h1>Access and manage your BC Registries and Online Services</h1>
            <p class="services-info">
              All registrations of businesses, not-for-profit societies,
              cooperative associations, personal property and manufactured homes
              are administered and supported by BC Registries and Online
              Services.
            </p>
            <p class="services-info">
              As our online modernization initiative continues, refer to this
              page for updates on ways to manage registration information
            </p>
            <div role="dialog" class="v-dialog__container">
              <div role="document" class="v-dialog__content" style="z-index: 0">
                <div
                  class="v-dialog"
                  style="max-width: 640px; display: none"
                ></div>
              </div>
            </div>
          </div>
        </header>
      </article>
    </div>

    <v-divider class="h-divider"></v-divider>
    <AccountsFooter />

    <v-divider class="h-divider"></v-divider>
    <BCRegistriesAccount />

    <v-divider class="h-divider"></v-divider>
    <BCOnlineAccount />

    <v-divider class="h-divider"></v-divider>
    <DirectAccount />

    <v-divider class="h-divider"></v-divider>
    <NoAccount />
  </div>
</template>

<script>
import AccountsFooter from '~/components/AccountsFooter.vue'
import BCOnlineAccount from '~/components/BCOnlineAccount.vue'
import BCRegistriesAccount from '~/components/BCRegistriesAccount.vue'
import DirectAccount from '~/components/DirectAccount.vue'
import NoAccount from '~/components/NoAccount.vue'

export default {
  components: {
    AccountsFooter,
    BCRegistriesAccount,
    BCOnlineAccount,
    DirectAccount,
    NoAccount,
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/theme.scss';

h1 {
  font-size: 2.5rem;
  font-weight: bold;
  max-width: 30ch;
  line-height: 3.125rem;
  color: $gray9;
  text-align: left;
}

h1 + p {
  max-width: 55ch;
  margin-right: auto;
  margin-left: auto;
  font-size: 1rem;
  line-height: 1.5rem;
}

// Card Container
$card-container-spacing: 1rem;
$card-width: 50%;

.card-container {
  display: flex;
  justify-content: space-between;
  margin: 2rem calc(#{$card-container-spacing} * -1);

  .card {
    margin: $card-container-spacing;
    width: $card-width;
  }
}

.card-icon {
  margin-top: -0.5rem;
  margin-bottom: 1rem;
  font-size: 4rem;
  background: -webkit-linear-gradient(#b9d6f6, #1867c0);
  -webkit-text-fill-color: transparent;
}

.card-body p {
  margin: 1rem auto;
  max-width: 35ch;
}

.hero-banner {
  color: $gray9;
  background-color: white;
  background-image: url(../assets/img/BCReg_homebanner_images_final_80compressed_032521.jpg);
  background-position: 100% 100%;
  background-size: 75%;
  background-repeat: no-repeat;
}

.hero-banner h1 {
  margin-bottom: 1.5rem;
  color: inherit;
  letter-spacing: -0.02rem;
  line-height: 1.25;
  font-size: 2.5rem;
}

.hero-banner h1 sup {
  top: -0.9rem;
  margin-left: 0.25rem;
  vertical-align: middle;
  color: $BCgovGold5;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  font-size: 0.875rem;
}

.hero-banner p {
  max-width: 40rem;
  margin: 1.5rem 0;
  font-size: 1rem;
}

.hero-banner .container {
  padding: 2rem 1.5rem;
}

article {
  padding: 0;
}

.services-info {
  font-size: 1rem;
  line-height: 1.5rem;
  color: $gray7;
  text-align: left;
}
</style>
