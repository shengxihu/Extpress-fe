<style scoped>
@import '~vux/dist/vux.css';
.qr_box {
    margin: 0 32px;
}
.order_num {
    padding: 16px 32px;
}
</style>

<template>
  <div class="order">
      <div class="item">
        <div class="order_num">
            <span class="num_title">订单号:</span>
            <span class="num">abc12345678</span>
        </div>
        <qrcode class="qr_box" val="https://www.baidu.com/" fg-color="green"></qrcode>
      </div>
  </div>
</template>

<script>
import Qrcode from 'vue-qrcode'

export default {
  components: {
    Qrcode,
  },
  data () {
    return {
      
    }
  },
  methods: {
    changeData () {
      
    }
  }
}
</script>