import {
  SET_SEQUENCE_LIST,
  SET_PLAY_LIST,
  SET_PLAY_STATE,
  SET_PLAY_MODE,
  SET_CURRENT_INDEX,
  SET_FULL_SCREEN
} from './types'

const mutations = {
  [SET_SEQUENCE_LIST](state, list) {
    state.sequenceList = list
  },
  [SET_PLAY_LIST](state, list) {
    state.playList = list
  },
  [SET_PLAY_STATE](state, playing) {
    state.playing = playing
  },
  [SET_PLAY_MODE](state, mode) {
    state.playMode = mode
  },
  [SET_CURRENT_INDEX](state, index) {
    state.currentIndex = index
  },
  [SET_FULL_SCREEN](state, fullScreen) {
    state.fullScreen = fullScreen
  }
}

export default mutations
