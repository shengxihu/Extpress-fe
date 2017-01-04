<style scoped>
@import '~vux/dist/vux.css';
</style>

<template>
    <div class='headbar'>
       <x-header v-if="this.$route.name == 'index'" :left-options="{showBack: false}">首页</x-header>
       <x-header v-if="this.$route.name == 'mail'" :left-options="{showBack: true}">寄件</x-header>
       <x-header v-if="this.$route.name == 'express'" :left-options="{showBack: true}">物流</x-header>
       <x-header v-if="this.$route.name == 'sign'" :left-options="{showBack: true}">主页</x-header>
       <x-header v-if="this.$route.name == 'auth'" :left-options="{showBack: true}">我的信息</x-header>
       <x-header v-if="this.$route.name == 'order'" :left-options="{showBack: true}">订单</x-header>
    </div>
</template>
<script>
    import * as actions from '../vuex/actions'
    import { XHeader } from 'vux-components'
    module.exports = {
        data:function(){
            return {
                title: this.$route.title
            }
        },
        components:{
            XHeader
        }
    }
</script>