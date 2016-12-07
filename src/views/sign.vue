<style scoped>
@import '~vux/dist/vux.css';
.sign_up_bt {
    margin-top: 33px;
    width: 88%;
}
.hide {
    display: none;
}
</style>

<template>
    <div class='sign'>
        <group :class="{ 'hide':!is_sign_up }">
            <x-input title="用户名"></x-input>
            <x-input title="密码"></x-input>
            <switch title="记住密码" ></switch>
            <x-button class='sign_up_bt' type="primary">登录</x-button>
        </group>
        <group :class="{ 'hide':!is_sign_in }">
            <x-input title="姓名"></x-input>
            <x-input title="身份证号码"></x-input>
            <x-input title="手机号码"></x-input>
            <x-input title="邮箱"></x-input>
            <x-input title="用户名"></x-input>
            <x-input title="密码"></x-input>
            <x-input title="确认密码"></x-input>
            <x-button class='sign_up_bt' type="primary">注册</x-button>
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
            return {
                is_sign_up: false,
                is_sign_in: true
            }
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