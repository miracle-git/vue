<template>
  <vm-scroll ref="scrollRef" class="vm-singer-list" :probe-type="3" @scroll="onScroll">
    <ul ref="groupRef">
      <li v-for="group in data" :key="group.title" class="group-item">
        <h2 class="group-title">{{group.title}}</h2>
        <ul>
          <li v-for="item in group.list" :key="item.id" class="singer-item" @click="onItemClick(item)">
            <img class="singer-avatar" v-lazy="item.pic"/>
            <span class="singer-name">{{item.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
    <div class="fixed-layer" :style="fixedStyle" v-show="fixedTitle">
      <div class="fixed-title">{{fixedTitle}}</div>
    </div>
    <div class="shortcut-list"
         @touchstart.stop.prevent="onTouchStart"
         @touchmove.stop.prevent="onTouchMove"
         @touchend.stop.prevent>
      <ul>
        <li v-for="(item, index) in shortcutList" :key="item" :data-index="index"
            class="shortcut-item" :class="{'active': current===index}">
          {{item}}
        </li>
      </ul>
    </div>
  </vm-scroll>
</template>

<script>
  import { defineComponent } from 'vue'
  import { Scroll } from '@/components'
  import useFixed from './hooks/use-fixed'
  import useShortcut from './hooks/use-shortcut'

  export default defineComponent({
    name: 'vm-singer-list',
    components: {
      VmScroll: Scroll
    },
    props: {
      data: {
        type: Array,
        default: () => []
      }
    },
    emits: ['select'],
    setup(props, { emit }) {
      const { groupRef, current, fixedTitle, fixedStyle, onScroll } = useFixed(props)
      const { shortcutList, scrollRef, onTouchStart, onTouchMove } = useShortcut(props, { groupRef })
      // 定义方法
      function onItemClick(item) {
        emit('select', item)
      }
      return {
        groupRef,
        fixedTitle,
        fixedStyle,
        onScroll,
        current,
        shortcutList,
        scrollRef,
        onTouchStart,
        onTouchMove,
        onItemClick
      }
    }
  })
</script>

<style lang="scss">
  @import "./index";
</style>
