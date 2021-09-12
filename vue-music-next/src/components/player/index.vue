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
      <div class="middle"
           @touchstart.prevent="onExchangeTouchStart"
           @touchmove.prevent="onExchangeTouchMove"
           @touchend.prevent="onExchangeTouchEnd">
        <div class="middle-left" :style="middleLeftStyle">
          <div class="cd-wrapper">
            <div class="cd" ref="cdRef">
              <img :class="cdStyle" :src="currentSong.pic" ref="cdImgRef"/>
            </div>
          </div>
          <div class="lyric-wrapper">
            <div class="playing-lyric">{{playingLyric}}</div>
          </div>
        </div>
        <vm-scroll class="middle-right" ref="lyricScrollRef" :style="middleRightStyle">
          <div class="lyric-wrapper">
            <div class="lyric-content" v-if="currentLyric" ref="lyricContentRef">
              <p class="lyric-line" v-for="(item, index) in currentLyric.lines"
                 :class="{'current':currentLine===index}" :key="item.num">
                {{item.txt}}
              </p>
            </div>
            <div class="pure-music" v-show="pureMusicLyric">
              <p>{{pureMusicLyric}}</p>
            </div>
          </div>
        </vm-scroll>
      </div>
      <div class="bottom">
        <div class="dot-wrapper">
          <span class="dot" :class="{'active':currentPanel==='cd'}"></span>
          <span class="dot" :class="{'active':currentPanel==='lyric'}"></span>
        </div>
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
  import { ProgressBar, Scroll } from '@/components'
  import { useCd, usePlay, useProgress, useMode, useFavorite, useLyric, useExchange } from './hooks'

  export default defineComponent({
    name: 'vm-player',
    components: {
      VmProgressBar: ProgressBar,
      VmScroll: Scroll
    },
    setup() {
      // data
      const store = useStore()
      const audioRef = ref(null)
      const cdRef = ref(null)
      const cdImgRef = ref(null)
      const lyricScrollRef = ref(null)
      const lyricContentRef = ref(null)
      const currentLyric = ref(null)
      const currentTime = ref(0)
      const songReady = ref(false)
      // computed
      const currentSong = computed(() => store.getters.currentSong)
      const playMode = computed(() => store.state.playMode)
      const playing = computed(() => store.state.playing)
      // methods
      const toggleLyric = (playing = true) => {
        const $lyric = currentLyric.value
        if (!$lyric) return
        if (playing) {
          $lyric.seek(currentTime.value * 1000)
        } else {
          $lyric.stop()
        }
      }

      return {
        audioRef,
        cdRef,
        cdImgRef,
        lyricScrollRef,
        lyricContentRef,
        currentSong,
        ...useCd(store, { cd: cdRef, cdImg: cdImgRef, playing }),
        ...usePlay(store, { audio: audioRef, currentTime, currentSong, playing, playMode, songReady, toggleLyric }),
        ...useProgress(store, { audio: audioRef, currentTime, currentSong, playing, toggleLyric }),
        ...useMode(store, { playMode }),
        ...useFavorite(store, { currentSong }),
        ...useLyric(store, { lyricScroll: lyricScrollRef, lyricContent: lyricContentRef, currentLyric, currentSong, toggleLyric, songReady }),
        ...useExchange(store)
      }
    }
  })
</script>

<style lang="scss">
  @import "./index";
</style>
