import { localStore } from './index'
import userImage from '../../utils/UserImage'

const state = {
  useBackground: localStore.get('useBackground'),
  usedImage: localStore.get('usedImage') || userImage.getDefault()
}

const getters = {

  usedImage() {
    return state.usedImage
  },

  useBackground() {
    return state.useBackground
  },
}

const mutations = {
  SET_USE_IMAGE(state, payload) {
    state.usedImage = payload
  },

  SET_USE_BACKGROUND(state, payload) {
    state.useBackground = payload
  }
}

const actions = {
  setUsedImage({ commit }, payload) {
    commit('SET_USE_IMAGE', payload)
    localStore.set('usedImage', payload)
  },

  setUseBackground({ commit }, payload) {
    commit('SET_USE_BACKGROUND', payload)
    localStore.set('useBackground', payload)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
