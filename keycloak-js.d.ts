// REMOVE THIS IN THE FUTURE.
// This is just some bogus so sbc-common-components is happy and doesn't nuke the build.
declare module 'keycloak-js' {
  export interface KeycloakInitOptions {
    [key: string]: any
  }

  export interface KeycloakLoginOptions {
    [key: string]: any
  }

  export interface KeycloakInstance {
    [key: string]: any
    init(initOptions?: KeycloakInitOptions): any
    login(options?: KeycloakLoginOptions): any
    logout(options?: KeycloakLoginOptions): any
    authenticated: boolean
    loadUserProfile(): Promise<any>
    token: string | null
    tokenParsed: any | null
    idToken: string | null
    refreshToken: string | null
    clearToken(): any
    updateToken(minValidity?: number): any
  }

  const Keycloak: (initOptions?: KeycloakInitOptions | string) => KeycloakInstance
  export default Keycloak
}
