<template>
  <div class="confirm-address-modal">
    <m2-modal title="新增地址" ref="add-modal"
              customClass="address-modal"
              @ok="handleAddAddress">
      <div class="modal-wrapper" slot="body">
        <div class="addr-item">
          <input type="text" placeholder="姓名" class="input-item" v-model="item.receiverName">
          <input type="text" placeholder="电话" class="input-item" v-model="item.receiverMobile">
        </div>
        <div class="addr-item">
          <select name="province" placeholder="请选择省份" class="select-item" v-model="item.receiverProvince">
            <option value="北京">北京市</option>
            <option value="天津">天津市</option>
            <option value="广东">广东省</option>
          </select>
          <select name="city" placeholder="请选择城市" class="select-item" v-model="item.receiverCity">
            <option value="北京">北京市</option>
            <option value="天津">天津市</option>
            <option value="广州市">广州市</option>
            <option value="深圳市">深圳市</option>
          </select>
          <select name="district" placeholder="请选择区县" class="select-item" v-model="item.receiverDistrict">
            <option value="海淀区">海淀区</option>
            <option value="东城区">东城区</option>
            <option value="西城区">西城区</option>
            <option value="朝阳区">朝阳区</option>
          </select>
          <input type="text" placeholder="邮编" class="input-item" v-model="item.receiverZip">
        </div>
        <div class="addr-item">
          <textarea name="address" v-model="item.receiverAddress"></textarea>
        </div>
      </div>
    </m2-modal>
    <m2-modal title="修改地址" ref="edit-modal"
              customClass="address-modal"
              @ok="handleEditAddress"
              @cancel="handlePureModal()"
              @close="handlePureModal()">
      <div class="modal-wrapper" slot="body">
        <div class="addr-item">
          <input type="text" placeholder="姓名" class="input-item" v-model="item.receiverName">
          <input type="text" placeholder="电话" class="input-item" v-model="item.receiverMobile">
        </div>
        <div class="addr-item">
          <select name="province" placeholder="请选择省份" class="select-item" v-model="item.receiverProvince">
            <option value="北京">北京市</option>
            <option value="天津">天津市</option>
            <option value="广东">广东省</option>
          </select>
          <select name="city" placeholder="请选择城市" class="select-item" v-model="item.receiverCity">
            <option value="北京">北京市</option>
            <option value="天津">天津市</option>
            <option value="广州市">广州市</option>
            <option value="深圳市">深圳市</option>
          </select>
          <select name="district" placeholder="请选择区县" class="select-item" v-model="item.receiverDistrict">
            <option value="海淀区">海淀区</option>
            <option value="东城区">东城区</option>
            <option value="西城区">西城区</option>
            <option value="朝阳区">朝阳区</option>
          </select>
          <input type="text" placeholder="邮编" class="input-item" v-model="item.receiverZip">
        </div>
        <div class="addr-item">
          <textarea name="address" v-model="item.receiverAddress"></textarea>
        </div>
      </div>
    </m2-modal>
    <m2-modal title="删除地址确认？" ref="del-modal"
              customClass="address-modal"
              @ok="handleDeleteAddress">
      <p slot="body">确认要删除当前收货地址吗？</p>
    </m2-modal>
  </div>
</template>

<script>
  import { createAddress, updateAddress, deleteAddress } from 'services/order.service'

  export default {
    name: 'confirm-address-modal',
    data: () => ({
      item: {},
      $modal: null
    }),
    methods: {
      handleShowModal(modalKey, item = null) {
        this.$modal = this.$refs[modalKey]
        if (!this.$modal) return
        if (item) {
          this.$modal._id = item.id
          this.item = item
        }
        this.$modal.show()
      },
      handlePureModal() {
        this.$modal._id && delete this.$modal._id
        this.$parent.getAddressList()
        this.$modal.hide()
      },
      handleValidateData() {
        if (!this.item.receiverName) {
          this.$message.warning('请填写收货人姓名！')
          return false
        }
        if (!this.item.receiverMobile) {
          this.$message.warning('请填写收货人手机号！')
          return false
        }
        if (!this.item.receiverProvince || !this.item.receiverCity || !this.item.receiverDistrict) {
          this.$message.warning('请选择省市区！')
          return false
        }
        if (!this.item.receiverAddress) {
          this.$message.warning('请填写收货人详细地址！')
          return false
        }
        return true
      },
      handleAddAddress() {
        if (!this.$modal || !this.handleValidateData()) return
        createAddress(this.item).then(_ => {
          this.$message.success('新增成功！')
          this.handlePureModal()
        })
      },
      handleEditAddress() {
        if (!this.$modal || !('_id' in this.$modal)) return
        if (!this.handleValidateData()) return
        updateAddress(this.$modal._id, this.item).then(_ => {
          this.$message.success('修改成功！')
          this.handlePureModal()
        })
      },
      handleDeleteAddress() {
        if (!this.$modal || !('_id' in this.$modal)) return
        deleteAddress(this.$modal._id).then(_ => {
          this.$message.success('删除成功！')
          this.handlePureModal()
        })
      }
    }
  }
</script>

<style scoped lang="less">
  @import "./index.less";
</style>
