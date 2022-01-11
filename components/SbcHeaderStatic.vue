<template>
  <header id="appHeader" class="app-header">
    <div class="container">
      <!-- Brand Container -->
      <nuxt-link class="brand" to="/">
        <picture>
          <source
            media="(min-width: 601px)"
            srcset="../assets/img/gov_bc_logo_horiz.png"
          />
          <source
            media="(max-width: 600px)"
            srcset="../assets/img/gov_bc_logo_vert.png"
          />
          <img
            class="brand__image"
            src="../assets/img/gov_bc_logo_vert.png"
            alt="Government of British Columbia Logo"
            title="Government of British Columbia"
          />
        </picture>
        <span class="brand__title"
          >BC Registries
          <span class="brand__title--wrap">and Online Services</span></span
        >
      </nuxt-link>

      <!-- Navigation -->
      <nav id="main-nav" aria-label="Main">
        <ul>
          <li><!-- nuxt-link to="/">Home</nuxt-link --></li>
          <li></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<!--
<script lang="ts">
import { Component, Mixins, Prop, Watch } from 'vue-property-decorator'
import { initialize, LDClient } from 'launchdarkly-js-client-sdk'
import { SessionStorageKeys, Account, IdpHint, LoginSource, Pages } from '../util/constants'
import ConfigHelper from '../util/config-helper'
import { mapState, mapActions, mapGetters } from 'vuex'
import { UserSettings } from '../models/userSettings'
import Vue from 'vue'
import NavigationMixin from '../mixins/navigation-mixin'
import { getModule } from 'vuex-module-decorators'
import AccountModule from '../store/modules/account'
import AuthModule from '../store/modules/auth'
import { KCUserProfile } from '../models/KCUserProfile'
import keycloakService from '../services/keycloak.services'
import LaunchDarklyService from '../services/launchdarkly.services'
import SbcProductSelector from './SbcProductSelector.vue'

declare module 'vuex' {
  interface Store<S> {
    isModuleRegistered(_: string[]): boolean
  }
}

@Component({
  beforeCreate () {
    this.$store.isModuleRegistered = function (aPath: string[]) {
      let m = (this as any)._modules.root
      return aPath.every((p) => {
        m = m._children[p]
        return m
      })
    }
    if (!this.$store.isModuleRegistered(['account'])) {
      this.$store.registerModule('account', AccountModule)
    }
    if (!this.$store.isModuleRegistered(['auth'])) {
      this.$store.registerModule('auth', AuthModule)
    }
    this.$options.computed = {
      ...(this.$options.computed || {}),
      ...mapState('account', ['currentAccount', 'pendingApprovalCount']),
      ...mapGetters('account', ['accountName', 'switchableAccounts', 'username']),
      ...mapGetters('auth', ['isAuthenticated', 'currentLoginSource'])
    }
    this.$options.methods = {
      ...(this.$options.methods || {}),
      ...mapActions('account', ['loadUserInfo', 'syncAccount', 'syncCurrentAccount', 'syncUserProfile']),
      ...mapActions('auth', ['syncWithSessionStorage'])
    }
  },
  components: {
    SbcProductSelector
  }
})
export default class SbcHeader extends Mixins(NavigationMixin) {
  private ldClient!: LDClient
  private readonly currentAccount!: UserSettings | null
  private readonly pendingApprovalCount!: number
  private readonly username!: string
  private readonly accountName!: string
  private readonly currentLoginSource!: string
  private readonly isAuthenticated!: boolean
  private readonly switchableAccounts!: UserSettings[]
  private readonly loadUserInfo!: () => KCUserProfile
  private readonly syncAccount!: () => Promise<void>
  private readonly syncCurrentAccount!: (userSettings: UserSettings) => Promise<UserSettings>
  private readonly syncUserProfile!: () => Promise<void>
  private readonly syncWithSessionStorage!: () => void

  @Prop({ default: '' }) redirectOnLoginSuccess!: string;
  @Prop({ default: '' }) redirectOnLoginFail!: string;
  @Prop({ default: '' }) redirectOnLogout!: string;
  @Prop({ default: false }) inAuth!: boolean;
  @Prop({ default: false }) showProductSelector!: boolean;

  private readonly loginOptions = [
    {
      idpHint: IdpHint.BCSC,
      option: 'BC Services Card',
      icon: 'mdi-account-card-details-outline'
    },
    {
      idpHint: IdpHint.BCEID,
      option: 'BCeID',
      icon: 'mdi-two-factor-authentication'
    },
    {
      idpHint: IdpHint.IDIR,
      option: 'IDIR',
      icon: 'mdi-account-group-outline'
    }
  ]

  get showAccountSwitching (): boolean {
    return LaunchDarklyService.getFlag('account-switching') || false
  }

  get showTransactions (): boolean {
    return (LaunchDarklyService.getFlag('transaction-history') || false) &&
      (this.currentAccount?.accountType === Account.PREMIUM)
  }

  get isIDIR (): boolean {
    return this.currentLoginSource === LoginSource.IDIR
  }

  get isBceid (): boolean {
    return this.currentLoginSource === LoginSource.BCEID
  }

  get isBcscOrBceid (): boolean {
    return [LoginSource.BCSC.valueOf(), LoginSource.BCEID.valueOf()].indexOf(this.currentLoginSource) >= 0
  }

  private async mounted () {
    getModule(AccountModule, this.$store)
    getModule(AuthModule, this.$store)
    this.syncWithSessionStorage()
    if (this.isAuthenticated) {
      await this.loadUserInfo()
      await this.syncAccount()
      await this.updateProfile()
    }
  }

  @Watch('isAuthenticated')
  private async onisAuthenticated (isAuthenitcated: string, oldVal: string) {
    if (isAuthenitcated) {
      await this.updateProfile()
    }
  }

  private async updateProfile () {
    if (this.isBceid) {
      await this.syncUserProfile()
    }
  }

  private goToHome () {
    this.redirectToPath(this.inAuth, Pages.HOME)
  }

  private goToUserProfile () {
    this.redirectToPath(this.inAuth, Pages.USER_PROFILE)
  }

  private goToCreateAccount () {
    this.redirectToPath(this.inAuth, Pages.CHOOSE_AUTH_METHOD)
  }

  private goToCreateBCSCAccount () {
    this.redirectToPath(this.inAuth, Pages.CREATE_ACCOUNT)
  }

  private async goToAccountInfo (settings: UserSettings) {
    if (!this.currentAccount || !settings) {
      return
    }
    await this.syncCurrentAccount(settings)
    this.redirectToPath(this.inAuth, `${Pages.ACCOUNT}/${this.currentAccount.id}/${Pages.SETTINGS}/account-info`)
  }

  private goToTeamMembers () {
    if (!this.currentAccount) {
      return
    }
    this.redirectToPath(this.inAuth, `${Pages.ACCOUNT}/${this.currentAccount.id}/${Pages.SETTINGS}/team-members`)
  }

  private goToTransactions () {
    if (!this.currentAccount) {
      return
    }
    this.redirectToPath(this.inAuth, `${Pages.ACCOUNT}/${this.currentAccount.id}/${Pages.SETTINGS}/transactions`)
  }

  private async switchAccount (settings: UserSettings, inAuth?: boolean) {
    this.$emit('account-switch-started')
    if (this.$route.params.orgId) {
      // If route includes a URL param for account, we need to refresh with the new account id
      this.$router.push({ name: this.$route.name, params: { orgId: settings.id } })
    }
    await this.syncCurrentAccount(settings)
    this.$emit('account-switch-completed')

    if (!inAuth) {
      window.location.assign(`${ConfigHelper.getAuthContextPath()}${Pages.HOME}`)
    }
  }

  logout () {
    if (this.redirectOnLogout) {
      const url = encodeURIComponent(this.redirectOnLogout)
      window.location.assign(`${this.getContextPath()}signout/${url}`)
    } else {
      window.location.assign(`${this.getContextPath()}signout`)
    }
  }

  login (idpHint) {
    if (this.redirectOnLoginSuccess) {
      let url = encodeURIComponent(this.redirectOnLoginSuccess)
      url += this.redirectOnLoginFail ? `/${encodeURIComponent(this.redirectOnLoginFail)}` : ''
      window.location.assign(`${this.getContextPath()}signin/${idpHint}/${url}`)
    } else {
      window.location.assign(`${this.getContextPath()}signin/${idpHint}`)
    }
  }

  private getContextPath (): string {
    let baseUrl = (this.$router && (this.$router as any)['history'] && (this.$router as any)['history'].base) || ''
    baseUrl += (baseUrl.length && baseUrl[baseUrl.length - 1] !== '/') ? '/' : ''
    return baseUrl
  }
}
</script>
-->

<style lang="scss" scoped>
@import '../assets/scss/theme.scss';

$app-header-font-color: white;

nav {
  ul {
    font-size: 0.875rem;
    list-style-type: none;
  }

  li {
    display: inline-block;

    + li {
      margin-left: 2rem;
    }
  }

  a {
    color: $app-header-font-color;
    font-weight: 700;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

.brand {
  display: flex;
  align-items: center;
  padding-right: 1rem;
  text-decoration: none;
  color: inherit;
}

.brand__image {
  display: block;
  margin-right: 1.25rem;
  max-height: 70px;
}

.brand__title {
  letter-spacing: -0.03rem;
  font-size: 1.125rem;
  font-weight: 700;
  color: inherit;
}

@media (max-width: 900px) {
  .brand__image {
    margin-right: 0.75rem;
    margin-left: -0.15rem;
  }

  .brand__title {
    font-size: 1rem;
    line-height: 1.25rem;
  }

  .brand__title--wrap {
    display: block;
  }
}
</style>
