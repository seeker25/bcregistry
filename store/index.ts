interface StateI {
  isStaff: boolean
  isSbcStaff: boolean
  roles: string[]
}

export function state (): StateI {
  return {
    isStaff: null,
    isSbcStaff: null,
    roles: [],
  }
}

 // Use "commit" to call a mutation, eg:
 // this.$store.commit('setStaff', true)
 // or use vuex mapMutations() helper.
 export const mutations = {
  setStaff (state: StateI, val: boolean) {
    state.isStaff = val
  },
  setSbcStaff (state: StateI, val: boolean) {
    state.isSbcStaff = val
  },
  setRoles (state: StateI, val: string[]) {
    state.roles = val
  },
}

// Use "dispatch" to call an action, eg:
// this.$store.dispatch('setStaff', true)
// or use vuex "mapActions" helper.
export const actions = {
  setStaff ({ commit }, val: boolean) {
    commit('setStaff', val)
  },
  setSbcStaff ({ commit }, val: boolean) {
    commit('setSbcStaff', val)
  },
  setRoles ({ commit }, val: string[]) {
    commit('setRoles', val)
  },
}

 // Use "getters" to call a getter, eg:
 // this.$store.getters.isStaff
 // or use vuex mapGetters() helper.
 export const getters = {
  isStaff (state: StateI): boolean {
    return state.isStaff
  },
  isSbcStaff (state: StateI): boolean {
    return state.isSbcStaff
  },
  getRoles (state: StateI): string[] {
    return state.roles
  },
}
