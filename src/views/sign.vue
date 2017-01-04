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
        <toast :show="!is_ok" type="warn" :time='st'>身份信息不符</toast>
        <loading :show="is_load" :text="text1" :time='st'></loading>
    </div>
</template>

<script>
    import { isRegistedN, isRegistedY, setData } from '../vuex/actions'
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
                is_load: false,
                is_ok: true,
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
        vuex: {
            getters: { 
                is_res: function (state) {
                    return state.is_res
                } 
            },
            actions: {
                isRegistedN,
                isRegistedY,
                setData,
            },
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
                var self = this
                self.is_load = true
                var url = 'http://www.meitianzhifu.com/version2/phpweb.php' + '?cardNo=' + self.form_sign_in.id_num + '&realName=' + self.form_sign_in.name + '&key=115027c46da0470ab5270128d60828de'
                this.$http.get(url).then((response) => {
                    var da = JSON.parse(response.data)
                    console.log(da)
                   if( da.result.isok == true) {
                       console.log(response)
                       self.is_load = false
                       self.show = true
                       self.isRegistedY()
                       self.setData(self.form_sign_in)
                       self.$router.go({name:'auth'})
                   } else {
                       self.is_load = false
                       self.is_ok = false
                       setTimeout(() => {
                           self.is_ok = true
                       },800)
                   }
                }, (response) => {
                    console.log(response)
                    // error callback
                })
            },
            signUp(){
                this.show = true
                console.log(this.form_sign_up)
            }
        }
    }
</script>