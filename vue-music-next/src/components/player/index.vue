<template>
  <div class="vm-player">
    <div class="normal-player" v-show="fullScreen">
      <div class="player-bg">
        <img :src="currentSong.pic" :alt="currentSong.name"/>
      </div>
      <div class="top">
        <div class="back-btn" @click="onGoBack">
          <i class="icon-back"></i>
        </div>
        <h1 class="song-title">{{currentSong.name}}</h1>
        <h2 class="song-subtitle">{{currentSong.singer}}</h2>
      </div>
      <div class="middle">
        <div class="middle-left">
          <div class="cd-wrapper">
            <div class="cd" ref="cdRef">
              <img :class="cdStyle" :src="currentSong.pic" ref="cdImgRef"/>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="progress-bar-wrapper">
          <span class="time time-left">{{beginTime}}</span>
          <vm-progress-bar :current="progress"
                           @changing="onProgressChanging"
                           @changed="onProgressChanged"/>
          <span class="time time-right">{{endTime}}</span>
        </div>
        <div class="player-icons">
          <div class="icon left-icon">
            <i :class="modeIcon" @click="onChangeMode"></i>
          </div>
          <div class="icon left-icon" :class="disabledIcon">
            <i class="icon-prev" @click="onPrev"></i>
          </div>
          <div class="icon center-icon" :class="disabledIcon">
            <i :class="playIcon" @click="onTogglePlay"></i>
          </div>
          <div class="icon right-icon" :class="disabledIcon">
            <i class="icon-next" @click="onNext"></i>
          </div>
          <div class="icon right-icon">
            <i :class="favoriteIcon" @click="onToggleFavorite"></i>
          </div>
        </div>
      </div>
    </div>
    <audio ref="audioRef" @pause="onPause" @canplay="onReady"
           @error="onError" @timeupdate="onUpdateTime" @ended="onEnded"/>
  </div>
</template>

<script>
  import { defineComponent, ref, computed } from 'vue'
  import { useStore } from 'vuex'
  import { ProgressBar } from '@/components'
  import { useCd, usePlay, useProgress, useMode, useFavorite } from './hooks'

  export default defineComponent({
    name: 'vm-player',
    components: {
      VmProgressBar: ProgressBar
    },
    setup() {
      // data
      const store = useStore()
      const audioRef = ref(null)
      const cdRef = ref(null)
      const cdImgRef = ref(null)
      const currentTime = ref(0)
      // computed
      const currentSong = computed(() => store.getters.currentSong)
      const playMode = computed(() => store.state.playMode)
      const playing = computed(() => store.state.playing)

      return {
        audioRef,
        cdRef,
        cdImgRef,
        currentSong,
        ...useCd(store, { cd: cdRef, cdImg: cdImgRef, playing }),
        ...usePlay(store, { audio: audioRef, currentTime, currentSong, playing, playMode }),
        ...useProgress(store, { audio: audioRef, currentTime, currentSong, playing }),
        ...useMode(store, { playMode }),
        ...useFavorite(store, { currentSong })
      }
    }
  })
</script>

<style lang="scss">
  @import "./index";
</style>
