<style scoped>
    h1{
        color: #28a7e1;
        text-align: center;
        font-size: 25px;
        font-weight: bold;
        margin-top: 100px;
    }
</style>

<template>
    <div>
        <h1>首页</h1>
        <modal></modal>
    </div>
</template>

<script>

    module.exports = {
        data:function(){
            return {
            
            }
        },
        components:{
            modal:require('../components/modal.vue')
        },
        methods:{
        }
    }
</script>