<template>
  <div class="confirm-address-list">
    <h2 class="address-title">收货地址</h2>
    <div class="address-list clear-fix">
      <div class="address-item" v-for="(item, index) in addresses" :key="index">
        <div class="address-inner brick-item" :class="{'checked': checkedAddressId === item.id}" @click="handleSelectAddress(item.id)">
          <h2 class="name">{{item.receiverName}}</h2>
          <p class="phone">{{item.receiverMobile}}</p>
          <p class="addr">{{item.receiverAddress}}</p>
          <p class="action">
            <a href="javascript:void(0)" class="left" @click.stop="$refs.modal.handleShowModal('del-modal', item)">
              <m2-svg-icon name="delete"/>
            </a>
            <a href="javascript:void(0)" class="right" @click.stop="$refs.modal.handleShowModal('edit-modal', item)">
              <m2-svg-icon name="edit"/>
            </a>
          </p>
        </div>
      </div>
      <div class="address-item create-item" @click="$refs.modal.handleShowModal('add-modal')">
        <div class="address-inner brick-item">
          <a href="javascript:void(0)">
            <m2-svg-icon name="add"/>
            添加新地址
          </a>
        </div>
      </div>
    </div>
    <confirm-address-modal ref="modal"/>
  </div>
</template>

<script>
  import { XM_APP_KEYS } from 'config/app.conf'
  import { getAddressList } from 'services/order.service'
  import ConfirmAddressModal from '../confirm-address-modal'

  export default {
    name: 'confirm-address-list',
    data: () => ({
      checkedAddressId: null,
      addresses: []
    }),
    created() {
      this.getAddressList()
    },
    methods: {
      getAddressList() {
        getAddressList().then(res => {
          this.addresses = res.list
        })
      },
      handleSelectAddress(id) {
        this.checkedAddressId = id
        this.$bus.$emit(XM_APP_KEYS.updateShippingId, id)
      }
    },
    components: {
      ConfirmAddressModal
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
