<style scoped>
@import '~vux/dist/vux.css';
.bt {
  margin-bottom: 122px;
}
</style>

<template>
  <div class="mail">
    <group>
      <address title="寄件地址" :value.sync="value_f" :list="addressData"></address>
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
      <br/>
      <toast :show="flag"  type="warn" :time='st'>未注册,请返回注册！</toast>
      <x-button class="bt" type="primary" @click="changeData">提交</x-button>
    </group>
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
import Toast from 'vux-components/toast'

export default {
  components: {
    Group,
    Address,
    XButton,
    Cell,
    XInput,
    XTextarea,
    Toast
  },
  data () {
    return {
      value_f: [],
      value_t: [],
      addressData: AddressChinaData,
      flag: false
    }
  },
  vuex: {
      getters: { 
          is_res: function (state) {
              return state.is_res
          },
      }
  },
  ready(){
    var self = this
    if(!this.is_res) {
      self.flag = true
      setTimeout(function(){
          self.$router.go({name:'sign'})
      },1000)
    }
  },
  methods: {
    changeData () {
        var self = this
        setTimeout(function(){
            self.$router.go({name:'order'})
        },2000)
    }
  }
}
</script>