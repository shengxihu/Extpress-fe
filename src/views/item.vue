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
            Footbar,
            Headbar
        },
        methods:{
            signIn(){
            }
        }
    }
</script>