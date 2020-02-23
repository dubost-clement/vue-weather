import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    moreInfo: false,
    ActualDate: null,
  },

  mutations: {
    showMoreInfo (state, bool) {
      state.moreInfo = bool;
    },

    setDate(state, date) {
      state.ActualDate = date;
    }
  },

  getters: {
    showInfo: state => state.moreInfo,
    getDate: state => state.ActualDate
  }
});

export default store;