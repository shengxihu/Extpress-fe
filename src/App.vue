<style scoped>
@import './styles/common.css';
</style>
<template>
    <item></item>
</template>


<script>
    import Item from './views/item.vue'
    import store from './vuex/store' // import 我们刚刚创建的 store

    module.exports = {
        data: function() {
            return {
                showBack:true,
                showHeader:true
            }
        },
        ready: function() {
            const url = '/api/v1.0/feed/'
            fetch(url).then(response => {
                response.json().then(json => {
                    console.log(json)
                })
            })
        },
        components:{
            Item
        },
        store: store, // 在根组件加入 store，让它的子组件和 store 连接
        beforeDestroy: function() {

        },
        methods: {

        }
    }
</script>
