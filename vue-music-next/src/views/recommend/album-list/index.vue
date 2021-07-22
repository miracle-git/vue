<template>
  <ul class="vm-album-list">
    <li v-for="item in data" :key="item.id" class="album-item">
      <div class="album-icon">
        <img v-lazy="item.pic" width="60" height="60"/>
      </div>
      <div class="album-text">
        <h2 class="album-name">{{item.username}}</h2>
        <p class="album-title">{{item.title}}</p>
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'vm-album-list',
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
