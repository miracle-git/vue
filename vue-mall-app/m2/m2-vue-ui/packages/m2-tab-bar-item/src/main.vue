<template>
  <div class="m2-tab-bar-item" @click="itemClick">
    <div v-if="!isActive" class="item-icon"><slot name="item-icon"></slot></div>
    <div v-else class="item-icon-active"><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle" class="icon-text"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  import './index.less'
  export default {
    name: 'm2-tab-bar-item',
    props: {
      path: {
        type: String,
        required: true
      },
      activeColor: {
        type: String,
        default: '#ff5777'
      }
    },
    computed: {
      isActive() {
        return this.$route.path.startsWith(this.path)
      },
      activeStyle() {
        return this.isActive ? { color: this.activeColor } : ''
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path)
      }
    }
  }
</script>
