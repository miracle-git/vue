import { createStore, createLogger } from 'vuex'
import state from './state'
import mutations from './mutations'
import * as getters from './getters'
import * as actions from './actions'

const isDev = process.env.NODE_ENV !== 'production'

export default createStore({
  state,
  mutations,
  getters,
  actions,
  strict: isDev,
  plugins: isDev ? [createLogger()] : []
})
