<template>
  <div class="contact-info-container">
    <v-container>
      <div class="row py-7">
        <div class="col-md-7 col-sm-12 col-12">
          <h3 class="wide-16">Need more information?</h3>
          <p class="mt-6 mb-0 wide-16">
            To learn more about Personal Property Registration in British Columbia, please
            <a
              :href="PPR_HREF"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>visit the Personal Property Information page</span>
            </a>
            <v-icon small color="white">mdi-open-in-new</v-icon>.
          </p>
        </div>

        <div class="col-md-5 col-sm-12 col-12">
          <h3 class="wide-16">Contact Us</h3>
          <p class="mt-6 wide-16">
            For support or questions about this application, contact us at:
          </p>
          <ul class="contact-info-list mt-5">
            <li>
              <span>Toll Free:</span>
              <a href="tel:+1-877-526-1526">1-877-526-1526</a>
            </li>
            <li>
              <span>Email:</span>
              <a :href="MAILTO_HREF">bcolhelp@gov.bc.ca</a>
            </li>
          </ul>

          <p class="mt-5 mb-0">
            <strong>Hours of Operation:</strong>
            <br />
            Monday to Friday, 8:30am - 5:30pm Pacific time
          </p>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class ContactInfoPpr extends Vue {
  readonly PPR_HREF = 'https://www2.gov.bc.ca/gov/content/employment-business/business/managing-a-business/' +
    'bc-registry-services-personal-property-registry'

  readonly MAILTO_HREF: 'mailto:bcolhelp@gov.bc.ca?subject=Personal%20Property%20Registry%20Support%20Request'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/theme.scss';

.contact-info-container {
  color: white;
  background-color: $BCgovBlue5;

  .container {
    padding-top: 2rem;
    padding-bottom: 2.5rem;
  }

  h3 {
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    color: inherit;
    border-bottom: 1px solid $BCgovBlue3;
    font-size: $px-20;
  }

  a, a:hover {
    color: inherit;
  }
}

@media (min-width: 960px) {
  .contact-info-container {
    padding-right: 10px;
  }
}

@media (min-width: 1920px) {
  .contact-info-container {
    padding-right: 5rem !important;
  }
  .wide-16 {
    margin-right: 64px;
  }
}

.contact-info-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.contact-info-list li span {
  margin-right: 0.5rem;
}

@media (max-width: 960px) {
  .contact-info-container {
    text-align: center;
  }
}
</style>
