<template>
	<div class="timeline-demo">
        <timeline>
            <div class="order_num">
                <span class="num_title">订单号:</span>
                <span class="num">abc12345678</span>
            </div>
            <switch class="sith" title="显示二维码" :value.sync="value"></switch>
            <qrcode v-if="value" class="qr_box" val="http://www.meitianzhifu.com/version2/#!/express" fg-color="green"></qrcode>
            <timeline-item>
                <h4> 商家正在通知快递公司揽件</h4>
                <p>2016-04-15 9:00:00</p>
            </timeline-item>
            <timeline-item>
                <h4> 申通快递员 广东广州 收件员 xxx 已揽件</h4>
                <p>2016-04-16 10:23:00</p>
            </timeline-item>
            <timeline-item>
                <h4 class="recent">【广东】 广州市 已发出</h4>
                <p class="recent">2016-04-17 12:00:00</p>
            </timeline-item>
        </timeline>
	</div>
</template>
<script>
import Qrcode from 'vue-qrcode'
import { Timeline, TimelineItem, Switch } from 'vux-components'

export default {
    data() {
        return {
            value: false
        }
    },
    components: {
        Timeline,
        TimelineItem,
        Switch,
        Qrcode 
    }
}
</script>

<style lang="less" scoped>
.sith { 
    padding: 6px 0 !important;
}
.weui_cell:before {
    height: 0 !important;
    width: 0 !important;
}
p {
        color: #888;
        font-size: 0.8rem;
}
h4 {
        color: #666;
        font-weight: normal;
}
.recent {
        color: rgb(4, 190, 2)
}
</style>
