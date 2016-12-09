<style scoped>
@import '~vux/dist/vux.css';
.hide {
    display: none;
}
</style>

<template>
    <div class='item'>
        <headbar></headbar>
        <div>
            <router-view></router-view>
        </div>
        <footbar></footbar>
    </div>
</template>
<script>
    import { Divider,ButtonTab, ButtonTabItem, Tabbar, TabbarItem } from 'vux-components'
    import Footbar from '../components/footbar.vue'
    import Headbar from '../components/headbar.vue'
    module.exports = {
        data:function(){
            return {
            }
        },
        ready:function(){
        },
        components:{
            Tabbar,
            TabbarItem,
            ButtonTab,
            ButtonTabItem,
            Divider,
            Footbar,
            Headbar
        },
        methods:{
            signIn(){
            }
        }
    }
</script>