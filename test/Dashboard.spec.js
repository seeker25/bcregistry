import Vue from 'vue'
import Vuetify from 'vuetify'
import { createLocalVue } from '@vue/test-utils'
import { createSandbox } from 'sinon'
import flushPromises from 'flush-promises'
// local
import dashboard from '@/pages/dashboard.vue'
import UserProduct from '@/components/UserProduct.vue'
import { state } from '@/store'
import { ProductCode, ProductStatus } from '@/enums'
import { ProductInfo } from '@/resources'
import { authAxios } from '@/utils'
import { createComponent } from '@/test/utils'

Vue.use(Vuetify)
const vuetify = new Vuetify({})
const store = state
const localVue = createLocalVue()
localVue.use(Vuetify)

const testProducts = [
  {
    code: ProductCode.BUSINESS,
    subscriptionStatus: ProductStatus.ACTIVE
  },
  {
    code: ProductCode.PPR,
    subscriptionStatus: ProductStatus.NOT_SUBSCRIBED
  }
]

describe('Dashboard tests', () => {
  let wrapper
  let sandbox
  // FUTURE: use sbc-common-component constants
  sessionStorage.setItem('KEYCLOAK_TOKEN', 'token')
  const currentAccount = { id: 'test_id' }
  sessionStorage.setItem('CURRENT_ACCOUNT', JSON.stringify(currentAccount))
  sessionStorage.setItem('AUTH_API_URL', 'mocked_url')
  
  beforeEach(async () => {
    sandbox = createSandbox()
    const getStub = sandbox.stub(authAxios, 'get')
    const getProducts = getStub.withArgs(`orgs/${currentAccount.id}/products`)
    getProducts.returns(new Promise(resolve => resolve({ data: testProducts })))

    const propsData = {}
    wrapper = createComponent(dashboard, localVue, store, propsData, vuetify)
    await flushPromises()
  })
  afterEach(() => {
    wrapper.destroy()
  })

  test('Displays active products', () => {
    expect(wrapper.findComponent(dashboard).exists()).toBe(true)
    // PPR is not subscribed in this test, check product list
    expect(wrapper.findAllComponents(UserProduct).length).toBe(1)
    expect(wrapper.findComponent(UserProduct).vm.$props.product).toEqual(ProductInfo[ProductCode.BUSINESS])
    // check layout
    expect(wrapper.find('.dash-header').exists()).toBe(true)
    expect(wrapper.find('.dash-header').text()).toBe('BC Registries Dashboard')
    expect(wrapper.find('.dash-header-info').exists()).toBe(true)
    expect(wrapper.find('.dash-sub-header').exists()).toBe(true)
    expect(wrapper.find('.dash-sub-header').text()).toBe('My Products and Services (1)')
    expect(wrapper.find('.dash-container-info').exists()).toBe(true)
  })
})
