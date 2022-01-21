import { StatusCodes } from 'http-status-codes'
import { SessionStorageKeys } from 'sbc-common-components/src/util/constants'
import { APIProductI } from '@/interfaces'
import { authAxios } from '@/utils/axios-helper'

/**
 * Fetches product subscription authorizations from Auth API.
 */
export async function fetchAccountProducts (accountId: number): Promise<APIProductI[]> {
  const config = {
    baseURL: sessionStorage.getItem(SessionStorageKeys.AuthApiUrl),
    headers: { Accept: 'application/json' }
  }

  return authAxios.get(`orgs/${accountId}/products`, config)
    .then(response => {
      const data = response?.data as APIProductI[]
      if (!data) {
        throw new Error('Invalid API response')
      }
      return data
    })
    .catch(error => {
      throw new Error('Error fetching account products, status code = ' +
        error?.response?.status?.toString() || StatusCodes.NOT_FOUND.toString())
    })
}

/*
 * Fetches organization from Auth API.
 */
export async function fetchOrganization (accountId: number): Promise<any> {
  const config = {
    baseURL: sessionStorage.getItem(SessionStorageKeys.AuthApiUrl),
    headers: { Accept: 'application/json' }
  }

  return authAxios.get(`orgs/${accountId}`, config)
    .then(response => {
      const data = response?.data
      if (!data) {
        throw new Error('Invalid API response')
      }
      return data
    }).catch(error => {
      throw new Error('Error fetching organization, status code = ' +
        error?.response?.status?.toString() || StatusCodes.NOT_FOUND.toString())
    })
}
