<style scoped>
@import '~vux/dist/vux.css';
.sign_up {
    width: 66%;
}
</style>

<template>
    <div class='sign'>
        <group title="登录">
            <x-input title="用户名"></x-input>
            <x-input title="密码"></x-input>
            <switch title="记住密码" ></switch>
            <x-button class='sign_up' type="primary">登录</x-button>
        </group>
    </div>
</template>

<script>
    import Group from 'vux-components/group'
    import Switch from 'vux-components/switch'
    import XInput from 'vux-components/x-input'
    import XButton from 'vux-components/x-button'
    module.exports = {
        data:function(){
        },
        ready:function(){
        },
        components:{
            Group,
            Switch,
            XInput,
            XButton
        },
        methods:{
        }
    }
</script>