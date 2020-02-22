<template>
  <transition name="slide">
    <div class="xm-modal" v-show="showModal">
      <div class="mask"></div>
      <div class="modal-dialog">
        <div class="modal-header">
          <span class="title">{{title}}</span>
          <span class="close" @click="hide"></span>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
            <div class="btn-group">
              <a href="javascript:void(0);" class="btn btn-primary" @click="$emit('ok')">{{okText}}</a>
              <a href="javascript:void(0);" class="btn" @click="hide">{{cancelText}}</a>
            </div>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'xm-modal',
    props: {
      title: {
        type: String,
        required: true
      },
      okText: {
        type: String,
        default: '确定'
      },
      cancelText: {
        type: String,
        default: '取消'
      }
    },
    data: () => ({
      showModal: false
    }),
    methods: {
      show() {
        this.showModal = true
      },
      hide() {
        this.showModal = false
      }
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
