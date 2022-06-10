import Vue from 'vue'
import Vuex from 'vuex'
import state from '@/store/modules/Tasks/state'
import getters from '@/store/modules/Tasks/getters'
import mutations from '@/store/modules/Tasks/mutations'
import actions from '@/store/modules/Tasks/actions'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
