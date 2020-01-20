<template>
  <div class="m2-smart-route">
    <keep-alive>
      <!-- 需要缓存的视图组件 -->
      <router-view :include="include" v-if="$route.meta.keepAlive">
      </router-view>
    </keep-alive>
    <!-- 不需要缓存的视图组件 -->
    <router-view v-if="!$route.meta.keepAlive">
    </router-view>
  </div>
</template>

<script>
  export default {
    name: 'm2-smart-route',
    data: () => ({
      include: []
    }),
    watch: {
      $route(to, from) {
        // 如果 要 to(进入) 的页面是需要 keepAlive 缓存的，把 name push 进 include数组
        if (to.meta.keepAlive) {
          !this.include.includes(to.name) && this.include.push(to.name)
        }
        // 如果 要 from(离开) 的页面是 keepAlive缓存的，
        // 再根据 level 来判断是前进还是后退
        if (from.meta.keepAlive && to.meta.level < from.meta.level) {
          const index = this.include.indexOf(from.name)
          index !== -1 && this.include.splice(index, 1)
        }
      }
    }
  }
</script>
