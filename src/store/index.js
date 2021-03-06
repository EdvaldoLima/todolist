import Vue from 'vue'
import Vuex from 'vuex'
import Tasks from '@/store/modules/Tasks'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Tasks
  }
})
