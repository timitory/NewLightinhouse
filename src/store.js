import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
    lastClickedTime: null
  },
  mutations: {
    setLastClickedTime(state, time) {
      state.lastClickedTime = time;
    }
  },
  actions: {
    saveLastClickedTime({ commit }, time) {
      commit('setLastClickedTime', time);
    }
  },
  getters: {
    getLastClickedTime(state) {
      return state.lastClickedTime;
    }
  },
  plugins:[createPersistedState()]
});