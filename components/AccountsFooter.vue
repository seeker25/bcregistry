<template>
  <div class="accounts-footer-container">
    <div class="container pr-10">
      <div class="mr-10 pr-10">
        <v-divider class="h-divider"></v-divider>
      </div>
      <div class="accounts-footer pr-10">
        <div class="accounts-footer-info">
          Explore services by account type:
        </div>
        <footer class="app-footer">
          <nav>
            <ul>
              <li class="pl-10 pr-10">
                <a href="#bcregistries-account">BC Registries Account</a>
              </li>
              <li class="pl-10 pr-10">
                <a href="#bconline-account">BC OnLine Account</a>
              </li>
              <li class="pl-10 pr-10">
                <a href="#direct-account">Individual / Direct Accounts</a>
              </li>
              <li class="pl-10 pr-10">
                <a href="#no-account">Account Not Required</a>
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/theme.scss';

.accounts-footer-container {
  background: $BCgovInputBG;
}
.accounts-footer {
  background: $BCgovInputBG;
  padding-top: 35px;
  padding-bottom: 35px;
}
.accounts-footer-info {
  text-align: center;
  font-size: 1.125rem;
  font-weight: bold;
  color: #212529;
  padding-bottom: 20px;
}
.app-footer {
  display: flex;
  min-height: 3.5rem;
  background-color: $BCgovInputBG;
  font-size: 0.875rem;
  text-align: center;
}

nav {
  flex: 1 1 auto;

  ul {
    padding: 0;
    list-style-type: none;
    align-content: center;
  }

  li {
    display: inline-block;
    margin-right: 0.25rem;
    a {
      display: block;
      padding: 0.25rem 0.5rem;
      font-size: 1rem;
      font-weight: bold;
      color: $BCgovLink;
      text-decoration: underline;
    }
  }

  li:last-child {
    margin-right: 0;
    border-right: none;
  }
}

@media (min-width: 960px) {
  nav {
    li {
      margin-right: 0.5rem;
      padding-right: 0.5rem;
      border-right: 1px solid $gray3;

      a {
        padding: 0.25rem 0.5rem;
      }
    }
  }
}
</style>
