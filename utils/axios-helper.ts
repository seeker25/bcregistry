import Axios from 'axios'
import { SessionStorageKeys } from 'sbc-common-components/src/util/constants'

const authAxios = Axios.create()

authAxios.interceptors.request.use(
  config => {
    config.headers.common.Authorization = `Bearer ${sessionStorage.getItem(SessionStorageKeys.KeyCloakToken)}`
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
