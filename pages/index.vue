<template>
  <div>
    <div class="app-body">
      <div>
        <article>
          <header class="hero-banner d-flex align-center">
            <div class="container">
              <h1 class="text--left">
                Access and manage your BC
                <br />Registries and Online services
              </h1>
              <p class="text--left mt-7 mb-10">
                All registrations of businesses, not-for-profit societies,
                cooperative associations, <br />
                personal property and manufactured homes are administered and
                supported by <br />
                BC Registries and Online Services.
              </p>
              <p class="text--left mt-7 mb-10">
                As our online modernization initiative continues, refer to this
                page for updates on<br />
                ways to manage registration information
              </p>
              <div role="dialog" class="v-dialog__container">
                <div
                  role="document"
                  class="v-dialog__content"
                  style="z-index: 0"
                >
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
    </div>

    <AccountsFooter />
  </div>
</template>

<script>
import AccountsFooter from '~/components/AccountsFooter.vue'
export default {
  components: {
    AccountsFooter,
  },
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 2.25rem;
}

h1 + p {
  max-width: 55ch;
  margin-right: auto;
  margin-left: auto;
  font-size: 1.125rem;
  line-height: 1.75rem;
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
  color: #212529;
  background-color: #fff;
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
  color: #fcba19;
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
@media only screen and (max-width: 640px) {
  .hero-banner {
    background-image: none;
  }
}
@media (min-width: 960px) {
  .hero-banner {
    height: 30rem;
    background-size: 900px;
  }
  .hero-banner.auth {
    height: 38rem;
    background-size: 1100px;
  }
}
@media (min-width: 1200px) {
  .hero-banner {
    height: 30rem;
    background-size: 900px;
  }
  .hero-banner.auth {
    height: 38rem;
    background-size: 1100px;
  }
}
@media (min-width: 1264px) and (min-height: 900px) {
  .hero-banner {
    background-size: 950px;
  }
  .hero-banner.auth {
    background-size: 1150px;
  }
}
@media (min-width: 1360px) {
  .hero-banner .container {
    padding: 2rem 1rem;
  }
}
@media (min-width: 1700px) {
  .hero-banner {
    background-size: 1150px;
  }
  .hero-banner.auth {
    background-size: 1300px;
  }
}
@media (min-width: 1920px) {
  .hero-banner {
    background-size: 1320px;
    background-position-x: right;
    background-position-y: -240px;
  }
  .hero-banner.auth {
    background-size: 1520px;
    background-position-x: right;
    background-position-y: -240px;
  }
}
.hero-banner__cta-btns {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.hero-banner__cta-btns .cta-btn {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
}
.hero-banner__cta-btns .cta-btns-authenticated > div,
.hero-banner__cta-btns .cta-btns-authenticated {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  max-width: 350px;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-bottom: 13px;
}
.hero-banner__cta-btns .cta-btns-authenticated .v-btn,
.hero-banner__cta-btns .cta-btns-authenticated > div .v-btn {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  margin-bottom: 13px;
}

article {
  padding: 0;
}
</style>
