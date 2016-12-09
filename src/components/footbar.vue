<style scoped>
@import '~vux/dist/vux.css';
.hide {
    display: none;
}
</style>

<template>
    <div class='index'>
        <div>
            <router-view></router-view>
        </div>
        <tabbar>
            <a class="index_box weui_tabbar_item" v-link="{ name: 'index' }">
                <tabbar-item>
                    <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_button.png">
                    <span slot="label">首页</span>
                </tabbar-item>
            </a>
            <a class="sign_box weui_tabbar_item" v-link="{ name: 'sign' }">
                <tabbar-item>
                    <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_button.png">
                    <span slot="label">主页</span>
                </tabbar-item>
            </a>
            <a class="mail_box weui_tabbar_item" v-link="{ name: 'mail' }">
                <tabbar-item>
                    <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_button.png">
                    <span slot="label">寄件</span>
                </tabbar-item>
            </a>
            <a class="express_box weui_tabbar_item" v-link="{ name: 'express' }">
                <tabbar-item>
                    <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_button.png">
                    <span slot="label">物流</span>
                </tabbar-item>
            </a>
        </tabbar>
    </div>
</template>
<script>
    import { Divider,ButtonTab, ButtonTabItem, Tabbar, TabbarItem } from 'vux-components'
    module.exports = {
        components:{
            Tabbar,
            TabbarItem,
            ButtonTab,
            ButtonTabItem,
            Divider
        }
    }
</script>