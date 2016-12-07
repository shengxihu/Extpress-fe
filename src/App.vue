<style scoped>
@import './styles/common.css';
.sign_box, .mail_box, .express_box {
    display: inline-block;
    width: 100%;
    margin-top: 33px;
    font-size: 20px;
    text-align: center;
}
</style>
<template>
    <div>
        <!--<a class="sign_box" v-link="{ name: 'sign' }">个人中心</a>-->
        <!--<a class="mail_box" v-link="{ name: 'mail' }">寄件中心</a>-->
        <a class="express_box" v-link="{ name: 'express' }">物流信息</a>
    </div>
    <div>
        <router-view></router-view>
    </div>

</template>


<script>
    import store from './vuex/store' // import 我们刚刚创建的 store

    module.exports = {
        data: function() {
            return {
                showBack:true,
                showHeader:true
            }
        },
        ready: function() {

        },
        components:{
            
        },
        store: store, // 在根组件加入 store，让它的子组件和 store 连接
        beforeDestroy: function() {

        },
        methods: {

        }
    }
</script>
