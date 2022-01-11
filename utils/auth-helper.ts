// Libraries
import { StatusCodes } from 'http-status-codes'
// BC Registry libraries
import { SessionStorageKeys } from 'sbc-common-components/src/util/constants'
// local
import { APIProductI } from '@/interfaces'
import { authAxios } from '@/utils/axios-helper'

/** Gets Keycloak JWT and parses it. */
function getJWT (): any {
  const token = sessionStorage.getItem(SessionStorageKeys.KeyCloakToken)
  if (token) {
    return parseToken(token)
  }
  throw new Error('Error getting Keycloak token')
}

/** Decodes and parses Keycloak token. */
function parseToken (token: string): any {
  try {
    const base64Url = token.split('.')[1]
    const base64 = decodeURIComponent(window.atob(base64Url).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''))
    return JSON.parse(base64)
  } catch (err) {
    throw new Error('Error parsing Keycloak token - ' + err)
  }
}

/** Gets Keycloak roles from JWT. */
export function getKeycloakRoles (): Array<string> {
  const jwt = getJWT()
  const keycloakRoles = jwt.roles
  if (keycloakRoles && keycloakRoles.length > 0) {
    return keycloakRoles
  }
  throw new Error('Error getting Keycloak roles')
}

/** Gets product subscription authorizations from Auth API. */
export async function getAccountProducts (): Promise<APIProductI[]> {
  const url = sessionStorage.getItem(SessionStorageKeys.AuthApiUrl)
  const currentAccount = sessionStorage.getItem(SessionStorageKeys.CurrentAccount)
  const accountInfo = JSON.parse(currentAccount)
  const accountId = accountInfo?.id

  const config = { baseURL: url, headers: { Accept: 'application/json' } }
  return authAxios.get(`orgs/${accountId}/products`, config)
    .then(
      response => {
        const data = response?.data as APIProductI[]
        if (!data) {
          throw new Error('Unable to obtain Account Product Information.')
        }
        return data
      }
    ).catch(
      error => {
        throw new Error('Auth API error getting Account Product Subscription: status code = ' +
                        error?.response?.status?.toString() || StatusCodes.NOT_FOUND.toString())
      }
    )
}
