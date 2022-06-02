import Vuetify from 'vuetify'
import { mount, VueClass, Wrapper } from '@vue/test-utils'

/**
 * Returns the last event for a given name, to be used for testing event propagation in response to component changes.
 *
 * @param wrapper the wrapper for the component that is being tested.
 * @param name the name of the event that is to be returned.
 *
 * @returns the value of the last named event for the wrapper.
 */
export function getLastEvent (wrapper: Wrapper<any>, name: string): any {
  const eventsList: Array<any> = wrapper.emitted(name)
  if (!eventsList) {
    return null
  }
  const events: Array<any> = eventsList[eventsList.length - 1]
  return events[0]
}

/**
  * Creates and mounts a component, so that it can be tested.
  *
  * @param component component that is being created.
  * @param store the vuex store instance for the wrapper.
  * @param propsData the props and their starting key values
  * @param vuetify the Vuetify instance
  * 
  * @returns a Wrapper<any> object with the given parameters.
  */
export function createComponent(
  component: VueClass<Vue>,
  localVue: any,
  store: any,
  propsData: any,
  vuetify: Vuetify,
  mocks: any = {}
): Wrapper<any> {
  document.body.setAttribute('data-app', 'true')
  return mount(component, {
    localVue,
    store,
    propsData: { ...propsData },
    vuetify,
    mocks
  })
}
