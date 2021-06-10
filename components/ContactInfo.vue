<template>
  <div class="contact-info-container">
    <div class="container">
      <div class="row">
        <div class="col-md-7 col-12">
          <h3 class="mb-6">Need more information?</h3>
          <p class="mb-4">
            To learn more about BC Registries and Online Services, please
            <!-- eslint-disable-next-line -->
            <a href="https://www2.gov.bc.ca/gov/content/governments/organizational-structure/ministries-organizations/ministries/citizens-services"
              target="_blank"
              rel="noopener noreferrer"
            >
              visit the Citizen Services page
            </a>
          </p>
        </div>
        <div class="col-md-5 col-12">
          <h3 class="mb-6">Contact Us</h3>
          <p class="mb-5">
            For support or questions about this application, contact us at:
          </p>
          <ul class="contact-info__list mb-5">
            <li>
              <span>Toll Free:</span
              ><a href="tel:+1-877-526-1526">1-877-526-1526</a>
            </li>
            <li>
              <span>Phone:</span><a href="tel:+1250-387-7848">250-387-7848</a>
            </li>
            <li>
              <span>Email:</span>
              <!-- eslint-disable-next-line -->
              <a href="mailto:BCRegistries@gov.bc.ca?subject=BC%20Registries%20-%20Business%20Registry%20Support%20Request"
                >BCRegistries@gov.bc.ca</a
              >
            </li>
          </ul>
          <p class="mb-0">
            <strong>Hours of Operation:</strong><br />
            Monday to Friday, 8:30am - 4:30pm Pacific Time
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
