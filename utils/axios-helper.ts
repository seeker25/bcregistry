import Axios from 'axios'
// import { SessionStorageKeys } from 'sbc-common-components/src/util/constants'

const authAxios = Axios.create()

authAxios.interceptors.request.use(
  config => {
    // FUTURE: use sbc-common-component constant
    config.headers.common.Authorization = `Bearer ${sessionStorage.getItem('KEYCLOAK_TOKEN')}`
    // FUTURE: remove this once auth is setup
    // config.headers.common.Authorization = `Bearer hardcoded_token_here`
    return config
  },
  error => Promise.reject(error)
)

authAxios.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error)
  }
)

export { authAxios }