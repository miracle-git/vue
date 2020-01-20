import { getStore } from 'm2-vue'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default getStore({
  state,
  getters,
  mutations,
  actions
})
