<template>
    <div>
        <mt-header title="登录" style="margin-bottom:40px;">
            <mt-button icon="back" slot="left" onclick="window.history.go(-1)"></mt-button>
        </mt-header>
        <input type="text" placeholder="请输入用户名" v-model="username">
        <input type="password" placeholder="请输入密码" v-model="password">
        <mt-button type="primary" style="width: 100%;margin-top: 20px;" @click="submit">登录</mt-button>
    </div>
</template>
<script>
//import { mapActions } from 'vuex';
export default {
    data() {
        return {
            username:'', password:''
        }
    },
    methods: {
        submit(){
            const self = this;
            if(self.username && self.password){
                localStorage.setItem('username',self.username);
                self.login();
                self.$router.push('/index');
            }
        },
        login(){
            const self = this;
            self.$store.dispatch('login',self.username);
        }

//            ...mapActions(['login'])
    }
}
</script>
<style scoped>
    input{
        display: block;
        width: 90%;
        height:40px;
        margin:0 auto 20px;
        border:1px solid #eee;
        border-radius: 3px;
        padding-left: 20px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
</style>
