<style scoped>
@import '~vux/dist/vux.css';
.hide {
    display: none;
}
</style>

<template>
    <div class='sign'>
        <group :class="{ 'hide':!is_sign_up }">
            <x-input :value.sync="form_sign_up.username" title="用户名"></x-input>
            <x-input :value.sync="form_sign_up.passward" title="密码"></x-input>
            <switch title="记住密码" ></switch>
            <x-button @click="signUp" class='sign_up_bt' type="primary">登录</x-button>
        </group>
        <group :class="{ 'hide':!is_sign_in }">
            <x-input is-type="china-name" :value.sync="form_sign_in.name" title="姓名"></x-input>
            <x-input keyboard :value.sync="form_sign_in.id_num" title="身份证号码"></x-input>
            <x-input keyboard is-type="china-mobile" :value.sync="form_sign_in.phone" title="手机号码"></x-input>
            <x-input is-type="email" :value.sync="form_sign_in.email" title="邮箱"></x-input>
            <x-input :value.sync="form_sign_in.username" title="用户名"></x-input>
            <x-input keyboard :value.sync="form_sign_in.passward" title="密码"></x-input>
            <x-input keyboard title="确认密码"></x-input>
            <x-button @click="signIn" class='sign_up_bt' type="primary">注册</x-button>
        </group>
        <toast :show.sync="show" :time='st'>验证成功</toast>
        <toast :show.sync="show" type="warn" :time='st'>身份信息不符</toast>
        <loading :show="show" :text="text1" :time='st'></loading>
    </div>
</template>

<script>
    import Group from 'vux-components/group'
    import Toast from 'vux-components/toast'
    import Switch from 'vux-components/switch'
    import XInput from 'vux-components/x-input'
    import Loading from 'vux-components/loading'
    import XButton from 'vux-components/x-button'
    module.exports = {
        data:function(){
            return {
                is_sign_up: false,
                is_sign_in: true,
                form_sign_in: {
                    name: '',
                    id_num: '',
                    phone: '',
                    email: '',
                    username: '',
                    passward: ''
                },
                form_sign_up: {
                    username: '',
                    passward: ''
                },
                show: false,
                text1: '验证身份信息...',
                st: 5000
            }
        },
        ready:function(){
        },
        components:{
            Group,
            Switch,
            XInput,
            XButton,
            Loading,
            Toast
        },
        methods:{
            signIn(){
                this.show = true
                setTimeout(function(){
                    window.location='http://localhost:3000/#!/auth'
                },2000)
                // const url = '/api/v1.0/feed/'
                // //let url = 'http://apis.haoservice.com/idcard/VerifyIdcard?cardNo=' + this.id_num + '&realName=' + this.name + '&key=115027c46da0470ab5270128d60828de'
                // this.$http.get(url).then((response) => {
                    
                // }, (response) => {
                //     // error callback 
                // });
            },
            signUp(){
                this.show = true
                console.log(this.form_sign_up)
                // const url = '/api/v1.0/feed/'
                // //let url = 'http://apis.haoservice.com/idcard/VerifyIdcard?cardNo=' + this.id_num + '&realName=' + this.name + '&key=115027c46da0470ab5270128d60828de'
                // this.$http.get(url).then((response) => {
                    
                // }, (response) => {
                //     // error callback 
                // });
            }
        }
    }
</script>