<template>
    <div>
        <mt-header title="欢迎">
            <mt-button icon="back" slot="left" onclick="window.history.go(-1)"></mt-button>
        </mt-header>
        <div>
            <div class="hello" v-if="getStatus">
                Hello {{getName}}
                <br>
                <mt-button type="primary" style="margin-top: 20px;" @click="loginout">退出</mt-button>
            </div>
            <div class="hello" v-else>还未登录</div>

        </div>
    </div>
</template>

<script>
//    import { mapGetters,mapActions } from 'vuex';
export default {
    data () {
        return {
            selected:'外卖'
        }
    },
    created(){
        if(!this.getStatus){
            this.$router.push('/login');
        }
    },
    methods:{
        loginout(){
            this.$store.dispatch('loginout');
        }
    },
    computed:{
        getName(){
            return this.$store.state.username;
        },
        getStatus(){
            return this.$store.state.is_login;
        },
    }
}
</script>
<style>
    .hello{
        height:50px;
        line-height: 50px;
        text-align: center;
    }
</style>