import { PLAY_MODE } from '@/config/store.config'
import { CACHE_KEY } from '@/config/key.config'
import { load } from '@/assets/scripts/array-store'

const state = {
  sequenceList: [],
  playList: [],
  playing: false,
  playMode: PLAY_MODE.sequence,
  currentIndex: 0,
  fullScreen: false,
  favoriteList: load(CACHE_KEY.favorite)
}

export default state
