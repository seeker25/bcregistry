<template>
  <div class="accounts-footer-container">
    <hr />
    <div class="accounts-footer">
      <div class="accounts-footer-info">Explore services by account type:</div>
      <footer class="app-footer">
        <div class="container">
          <nav>
            <ul>
              <li>
                <a href="#bcregistries-account">BC Registries Account</a>
              </li>
              <li>
                <a href="#bconline-account">BC OnLine Account</a>
              </li>
              <li>
                <a href="#direct-account">Individual / Direct Accounts</a>
              </li>
              <li>
                <a href="#no-account">Account Not Required</a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/theme.scss';

.accounts-footer-container {
  background: $BCgovInputBG;
  width: 100%;
}
.accounts-footer {
  padding-top: 35px;
  padding-bottom: 35px;
}
.accounts-footer-info {
  text-align: center;
  font-size: 18px;
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
