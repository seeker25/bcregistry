<template>
  <div class="accounts-container">
    <hr />
    <div class="accounts-container py-10">
      <h2>Explore services by account type:</h2>
    </div>
    <footer class="app-footer">
      <div class="container">
        <nav>
          <ul>
            <li>
              <nuxt-link to="/bcregistries-account"
                >BC Registries Account</nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/bconline-account">BC OnLine Account</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/direct-account"
                >Individual / Direct Accounts</nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/no-account">Account Not Required</nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/theme.scss';

hr {
  margin: 1.5rem 0;
  border-color: $gray4;
  border-style: solid;
}

.accounts-container {
  background: $BCgovInputBG;
  width: 100%;
}
.accounts-container h2 {
  text-align: center;
}

.app-footer {
  display: flex;
  min-height: 3.5rem;
  background-color: $BCgovInputBG;
  font-size: 0.875rem;
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
      color: $BCgovLink;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
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
      border-right: 1px solid $gray4;

      a {
        padding: 0.25rem 0.5rem;
      }
    }
  }
}
</style>
