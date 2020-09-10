// import { localStore } from './index'

const state = {
  roundStartTime: 1,
}

const getters = {
  roundStartTime() {
    return state.roundStartTime
  }
}

const mutations = {
  SET_START_TIME(state, payload) {
    state.roundStartTime = payload
  }
}

const actions = {
  setStartTime({ commit }, payload) {
    commit('SET_START_TIME', payload)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
