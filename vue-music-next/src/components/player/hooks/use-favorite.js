import { computed } from 'vue'
import { save, remove } from '@/assets/scripts/array-store'
import { CACHE_KEY } from '@/config/key.config'
import { MAX_FAVORITE_COUNT } from '@/config/component.config'
import { SET_FAVORITE_LIST } from '@/config/store.config'

export default function useFavorite(store) {
  // computed
  const favoriteList = computed(() => store.state.favoriteList)
  const currentSong = computed(() => store.getters.currentSong)
  const isFavorite = computed(() => {
    return favoriteList.value.some(item => item.id === currentSong.value.id)
  })
  const favoriteIcon = computed(() => isFavorite.value ? 'icon-favorite' : 'icon-not-favorite')
  // methods
  function compare(item) {
    return item.id === currentSong.value.id
  }
  function onToggleFavorite() {
    let list
    if (isFavorite.value) {
      list = remove(CACHE_KEY.favorite, compare)
    } else {
      list = save(CACHE_KEY.favorite, compare, currentSong.value, MAX_FAVORITE_COUNT)
    }
    store.commit(SET_FAVORITE_LIST, list)
  }

  return {
    favoriteIcon,
    onToggleFavorite
  }
}
