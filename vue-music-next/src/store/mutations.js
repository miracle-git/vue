import {
  SET_SEQUENCE_LIST,
  SET_PLAY_LIST,
  SET_PLAY_STATE,
  SET_PLAY_MODE,
  SET_CURRENT_INDEX,
  SET_FULL_SCREEN,
  SET_FAVORITE_LIST,
  ADD_SONG_LYRIC
} from '@/config/store.config'

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
  },
  [SET_FAVORITE_LIST](state, list) {
    state.favoriteList = list
  },
  [ADD_SONG_LYRIC](state, { song, lyric }) {
    const current = state.sequenceList.find(item => item.mid === song.mid)
    current && (current.lyric = lyric)
  }
}

export default mutations
