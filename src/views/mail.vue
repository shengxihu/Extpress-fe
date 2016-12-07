<style scoped>
@import '~vux/dist/vux.css';
</style>

<template>
  <div>
    <group>
      <address title="始发地址" :value.sync="value_f" :list="addressData"></address>
      <cell title="邮编" :value="value_f"></cell>
      <x-input title="详细地址"></x-input>
      <x-input title="物品信息"></x-input>
      <x-input title="重量"></x-input>
      <x-textarea :max="200" placeholder="备注详细"></x-textarea>
      <address title="收件地址" :value.sync="value_t" :list="addressData"></address>
      <cell title="邮编" :value="value_t"></cell>
      <x-input title="详细地址"></x-input>
      <x-input title="收件人姓名"></x-input>
      <x-input title="收件人手机号"></x-input>
    </group>
    <br/>
    <x-button type="primary" @click="changeData">提交</x-button>
  </div>
</template>

<script>
import Group from 'vux-components/group'
import Address from 'vux-components/Address'
import AddressChinaData from '../../mock/china-area-data.js'
import XButton from 'vux-components/x-button'
import Cell from 'vux-components/Cell'
import XInput from 'vux-components/x-input'
import XTextarea from 'vux-components/x-textarea'

console.log(AddressChinaData)
export default {
  components: {
    Group,
    Address,
    XButton,
    Cell,
    XInput,
    XTextarea
  },
  data () {
    return {
      value_f: [],
      value_t: [],
      addressData: AddressChinaData,
    }
  },
  methods: {
    changeData () {
      
    }
  }
}
</script>