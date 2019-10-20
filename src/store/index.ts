import Vue from 'vue'
import Vuex from 'vuex'
import { RootState } from '@/store/types'
import AbstractCurrency from '@/models/AbstractCurrency'

Vue.use(Vuex)

export default new Vuex.Store<RootState>({
  state: {
    currencies: []
  },

  mutations: {
    addCurrency (state, currency: AbstractCurrency) {
      state.currencies.push(currency)
    },

    toggleCurrency (state, index: number) {
      state.currencies[index].selected = !state.currencies[index].selected
    }
  }
})
