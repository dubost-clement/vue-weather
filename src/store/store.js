import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    moreInfo: false,
  },

  mutations: {
    showMoreInfo (state, bool) {
      state.moreInfo = bool;
    }
  },

  getters: {
    showInfo: state => state.moreInfo
  }
});

export default store;