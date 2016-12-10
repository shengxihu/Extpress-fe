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
                    <img slot="icon" src="../img/home.png">
                    <span slot="label">首页</span>
                </tabbar-item>
            </a>
            <a class="sign_box weui_tabbar_item" v-link="{ name: 'sign' }">
                <tabbar-item>
                    <img slot="icon" src="../img/auth.png">
                    <span slot="label">主页</span>
                </tabbar-item>
            </a>
            <a class="mail_box weui_tabbar_item" v-link="{ name: 'mail' }">
                <tabbar-item>
                    <img slot="icon" src="../img/mail.png">
                    <span slot="label">寄件</span>
                </tabbar-item>
            </a>
            <a class="express_box weui_tabbar_item" v-link="{ name: 'express' }">
                <tabbar-item>
                    <img slot="icon" src="../img/express.png">
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