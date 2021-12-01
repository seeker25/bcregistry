<template>
  <div class="contact-info-container">
    <div class="container">
      <div class="row pt-7 pb-7">
        <div class="col-md-7 col-12">
          <h3 class="mb-6 mr-16">Need more information?</h3>
          <p class="mb-4 mr-16">
            To learn more about Personal Property Registration in British Columbia,
            <!-- eslint-disable-next-line -->
            <a href="https://www2.gov.bc.ca/gov/content/employment-business/business/managing-a-business/bc-registry-services-personal-property-registry"
              target="_blank"
              rel="noopener noreferrer"
            >
              please visit the Personal Property Information page.
            </a>
          </p>
        </div>
        <div class="col-md-5 col-12">
          <h3 class="mb-6 mr-16">Contact Us</h3>
          <p class="mb-5 mr-16">
            For support or questions about this application, contact us at:
          </p>
          <ul class="contact-info__list mb-5">
            <li>
              <span>Toll Free:</span
              ><a href="tel:+1-800-663-6102">1-800-663-6102</a>
            </li>
            <li>
              <span>Email:</span>
              <!-- eslint-disable-next-line -->
              <a href="mailto:bcolhelp@gov.bc.ca?subject=Personal%20-%20Property%20Registry%20Support%20Request"
                >bcolhelp@gov.bc.ca</a
              >
            </li>
          </ul>
          <p class="mb-0">
            <strong>Hours of Operation:</strong><br />
            Monday to Friday, 8:00m - 5:00pm Pacific Time (except Statutory Holidays)
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/theme.scss';
.contact-info-container {
  color: #fff;
  background-color: #036;
  padding-right: 5rem !important;
}
.contact-info-container .container {
  padding-top: 2rem;
  padding-bottom: 2.5rem;
}
.contact-info-container h3 {
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  color: inherit;
  border-bottom: 1px solid #4d7094;
  font-size: 1.25rem;
}
.contact-info-container a {
  color: #fff;
  font-weight: 400;
}
.contact-info__list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.contact-info__list li span,
.contact-info__list li strong {
  margin-right: 0.5rem;
}
@media (max-width: 960px) {
  .contact-info-container {
    text-align: center;
  }
}
</style>
