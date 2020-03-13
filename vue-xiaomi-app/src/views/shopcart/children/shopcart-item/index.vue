<template>
  <li class="shopcart-item">
    <div class="col-check">
      <span class="checkbox" :class="{'checked': data.productSelected}" @click="$emit('update', params)"></span>
    </div>
    <div class="col-3 col-product">
      <a :href="`/product/${data.productId}`">
        <img v-lazy="data.productMainImage" :alt="data.productName" class="item-img">
        <span class="item-name ellipsis">
        {{data.productName}}
        <span class="sub-title">
          {{data.productSubtitle}}
        </span>
      </span>
      </a>
    </div>
    <div class="col-1 col-price">{{data.productPrice | currency}}</div>
    <div class="col-2 col-number">
      <xm-number-box :data="data"
                     @minus="$emit('update', { ...params, action: 'minus' })"
                     @plus="$emit('update', { ...params, action: 'plus' })"/>
    </div>
    <div class="col-1 col-price">{{data.productTotalPrice | currency}}</div>
    <div class="col-1 col-op">
      <span class="icon-remove" @click="$emit('delete', data.productId)"></span>
    </div>
  </li>
</template>

<script>
  import { XmNumberBox } from 'components'

  export default {
    name: 'shopcart-item',
    props: {
      data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      params() {
        return { item: this.data, vm: this.$parent }
      }
    },
    components: {
      XmNumberBox
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
