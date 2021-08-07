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
      <div class="bottom">
        <div class="player-icons">
          <div class="icon left-icon">
            <i class="icon-sequence"></i>
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
            <i class="icon-not-favorite"></i>
          </div>
        </div>
      </div>
    </div>
    <audio ref="audioRef" @pause="onPause" @canplay="onReady" @error="onError"/>
  </div>
</template>

<script>
  import { defineComponent, ref } from 'vue'
  import { useStore } from 'vuex'
  import usePlay from './hooks/use-play'

  export default defineComponent({
    name: 'vm-player',
    setup() {
      const store = useStore()
      const audioRef = ref(null)

      return {
        audioRef,
        ...usePlay(store, { audio: audioRef })
      }
    }
  })
</script>

<style lang="scss">
  @import "./index";
</style>
