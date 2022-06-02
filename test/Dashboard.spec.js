import Vue from 'vue'
import Vuetify from 'vuetify'
import { createLocalVue } from '@vue/test-utils'
import { createSandbox } from 'sinon'
import flushPromises from 'flush-promises'
// bcregistry
import { SessionStorageKeys } from 'sbc-common-components/src/util/constants'
// local
import dashboard from '@/pages/dashboard.vue'
import UserProduct from '@/components/UserProduct.vue'
import { getVuexStore } from '@/store'
import { ProductCode, ProductStatus } from '@/enums'
import { authAxios, getProductInfo } from '@/utils'
import { createComponent } from '@/test/utils'

Vue.use(Vuetify)
const vuetify = new Vuetify({})
const store = getVuexStore()
const localVue = createLocalVue()
localVue.use(Vuetify)
jest.useFakeTimers()

const testProducts = [
  {
    code: ProductCode.BUSINESS,
    subscriptionStatus: ProductStatus.ACTIVE
  },
  {
    code: ProductCode.PPR,
    subscriptionStatus: ProductStatus.ACTIVE
  },
  {
    code: ProductCode.MHR,
    subscriptionStatus: ProductStatus.ACTIVE
  }
]

describe('Dashboard tests', () => {
  let wrapper
  let sandbox
  // dev token (need a real token to parse - expired is okay)
  // eslint-disable-next-line max-len
  sessionStorage.setItem('KEYCLOAK_TOKEN', 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJUbWdtZUk0MnVsdUZ0N3FQbmUtcTEzdDUwa0JDbjF3bHF6dHN0UGdUM1dFIn0.eyJleHAiOjE2MTI5MjM1MTEsImlhdCI6MTYxMjkwNTUxMSwiYXV0aF90aW1lIjoxNjEyODk4NDEwLCJqdGkiOiI0YzkyZmE1NC1jNDdkLTQ0MGQtYTU2ZC05ZjY4YmRhNmM3NTgiLCJpc3MiOiJodHRwczovL2Rldi5vaWRjLmdvdi5iYy5jYS9hdXRoL3JlYWxtcy9mY2Ywa3BxciIsImF1ZCI6WyJjb21tb24tc2VydmljZXMiLCJuYW1lLXJlcXVlc3RzLXdlYiIsImVudGl0eS1zZXJ2aWNlcyIsInNiYy1hdXRoLXdlYiIsImFjY291bnQtc2VydmljZXMiLCJhY2NvdW50Il0sInN1YiI6IjA5M2Q4M2RkLTY5NTYtNDVjYS04ODlmLTE3ZTNiMWJiZTY2YyIsInR5cCI6IkJlYXJlciIsImF6cCI6ImFjY291bnQtd2ViIiwibm9uY2UiOiI1NjhmMjY3NC04MTVmLTQ2MGEtOWMyOS05OGRkYmE2N2M5YjUiLCJzZXNzaW9uX3N0YXRlIjoiZjQyMDg0ZmQtMzcxZi00ZTY3LTk2NGUtYTJmYWZhZGY2Zjg1IiwiYWNyIjoiMCIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwOi8vbG9jYWxob3N0OjgwODAiLCJodHRwczovL2Rldi5iY3JlZ2lzdHJ5LmNhIiwiaHR0cDovL2xvY2FsaG9zdDo4MDgyIiwiaHR0cDovL2xvY2FsaG9zdDo4MDgxIiwiKiIsImh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsicHVibGljX3VzZXIiLCJlZGl0IiwiYWNjb3VudF9ob2xkZXIiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQiLCJhY2NvdW50SWQiOiIxMjM0IiwiZmlyc3RuYW1lIjoiQkNSRUdURVNUIERhbGlhIiwicm9sZXMiOlsicHVibGljX3VzZXIiLCJlZGl0IiwiYWNjb3VudF9ob2xkZXIiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl0sIm5hbWUiOiJCQ1JFR1RFU1QgRGFsaWEgT05FIiwiaWRwX3VzZXJpZCI6IkJIR1Y1MjVDQUFPNlVKSlZRVkM3UlFIUzJFRUEyT0QzIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYmNzYy9iaGd2NTI1Y2FhbzZ1amp2cXZjN3JxaHMyZWVhMm9kMyIsImxvZ2luU291cmNlIjoiQkNTQyIsInVzZXJuYW1lIjoiYmNzYy9iaGd2NTI1Y2FhbzZ1amp2cXZjN3JxaHMyZWVhMm9kMyIsImxhc3RuYW1lIjoiT05FIn0.LD72JvfJGabcFqispDZwk6-TEWVLCc7yHhl_xOEfww_FM2j_N26lZEIK0ix08SgBSxDiNil-ZyHglK0SYluKJUB0wb4lJvJwg7Q1_RWY7gq_thb7s5QWUn0djSGt5d3-EupGz1xrNz663nlcbAZKr8vWyHUmUXcu55mDmw3CSPFeTbkN5ijfqMTfEH5AMqqo-x32nbFBEK0BSY4MgJeCqPpBZMgCSBV0iTAxDGeQdYN22No9XM36IvdClheWgFhU-b-bcTihgecfzndT0HzKqNSCUpiVi5srR_u_Y3F7F2h0E9Bi6SSFeDNYtYy_b7A8h-oG9OJo4BAhC1exkVzqBA')
  const currentAccount = { id: 'test_id' }
  sessionStorage.setItem(SessionStorageKeys.CurrentAccount, JSON.stringify(currentAccount))
  sessionStorage.setItem(SessionStorageKeys.AuthApiUrl, 'mocked_url')

  beforeEach(async () => {
    sandbox = createSandbox()
    const getStub = sandbox.stub(authAxios, 'get')
    const getProducts = getStub.withArgs(`orgs/${currentAccount.id}/products`)
    getProducts.returns(new Promise(resolve => resolve({ data: testProducts })))

    const propsData = { getProductInfo: getProducts, loadingProducts: false }
    const mocks = {
      $config: { myBusinessRegistryDashboard: '', pprDashboard: '' }
    }
    wrapper = createComponent(dashboard, localVue, store, propsData, vuetify, mocks)
    await flushPromises()
  })
  afterEach(() => {
    wrapper.destroy()
  })

  // TODO: fix "TypeError: Cannot read properties of undefined (reading 'getters')"
  xtest('Displays active products', () => {
    expect(wrapper.findComponent(dashboard).exists()).toBe(true)
    // PPR is not subscribed in this test, check product list
    expect(wrapper.findAllComponents(UserProduct).length).toBe(1)
    expect(wrapper.findComponent(UserProduct).vm.$props.product)
      .toEqual(getProductInfo(wrapper.vm.$config, ProductCode.BUSINESS))
    // check layout
    expect(wrapper.find('.dash-header').exists()).toBe(true)
    expect(wrapper.find('.dash-header').text()).toBe('BC Registries Dashboard')
    expect(wrapper.find('.dash-header-info').exists()).toBe(true)
    expect(wrapper.find('.dash-sub-header').exists()).toBe(true)
    expect(wrapper.find('.dash-sub-header').text()).toContain('My Products and Services')
    expect(wrapper.find('.dash-sub-header').text()).toContain('(1)')
    expect(wrapper.find('.dash-container-info').exists()).toBe(true)
  })

  test('Displays active products with My Asset Registries tile', async () => {
    expect(wrapper.findComponent(dashboard).exists()).toBe(true)

    // Add a delay because of expicit timeout set in the dashboard
    jest.advanceTimersByTime(250)
    await Vue.nextTick()

    const userProducts = wrapper.findAllComponents(UserProduct)

    expect(userProducts).toHaveLength(2)
    expect(userProducts.at(0).text()).toContain('My Business Registry');
    expect(userProducts.at(1).text()).toContain('My Asset Registries');
  })

})
