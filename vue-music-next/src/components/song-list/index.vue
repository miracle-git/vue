<template>
  <ul class="vm-song-list">
    <li class="song-item" v-for="item in data" :key="item.id">
      <div class="song-wrapper">
        <h2 class="song-name">{{item.name}}</h2>
        <p class="song-desc">{{item.singer}}·{{item.album}}</p>
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'vm-song-list',
    props: {
      data: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style lang="scss">
  @import "./index";
</style>
