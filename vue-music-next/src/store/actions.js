import { shuffle } from '@/assets/scripts/util'
import {
  PLAY_MODE,
  SET_SEQUENCE_LIST,
  SET_PLAY_LIST,
  SET_PLAY_STATE,
  SET_PLAY_MODE,
  SET_CURRENT_INDEX,
  SET_FULL_SCREEN
} from '@/config/store.config'

export const selectPlay = ({ commit, state }, { list, index }) => {
  commit(SET_PLAY_MODE, PLAY_MODE.sequence)
  commit(SET_SEQUENCE_LIST, list)
  commit(SET_PLAY_LIST, list)
  commit(SET_PLAY_STATE, true)
  commit(SET_FULL_SCREEN, true)
  commit(SET_CURRENT_INDEX, index)
}

export const randomPlay = ({ commit, state }, list) => {
  commit(SET_PLAY_MODE, PLAY_MODE.random)
  commit(SET_SEQUENCE_LIST, list)
  commit(SET_PLAY_LIST, shuffle(list))
  commit(SET_PLAY_STATE, true)
  commit(SET_FULL_SCREEN, true)
  commit(SET_CURRENT_INDEX, 0)
}
