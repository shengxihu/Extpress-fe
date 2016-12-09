<style scoped>
@import '~vux/dist/vux.css';
</style>

<template>
    <div class='headbar'>
       <x-header>{{ title }}</x-header>
    </div>
</template>
<script>
    import { XHeader } from 'vux-components'
    module.exports = {
        data:function(){
            return {
                title: '主页'
            }
        },
        ready:function(){
        },
        components:{
            XHeader
        },
        methods:{
            
        }
    }
</script>