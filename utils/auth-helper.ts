// Libraries
import { StatusCodes } from 'http-status-codes'
// BC Registry libraries
import { SessionStorageKeys } from 'sbc-common-components/src/util/constants'
// local
import { APIProductI } from '@/interfaces'
import { authAxios } from '@/utils/axios-helper'

// get product subscription authorizations
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
