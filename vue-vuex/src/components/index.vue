<template>
    <div>
        <mt-header title="首页">
            <mt-button icon="back" slot="left" onclick="window.history.go(-1)"></mt-button>
            <template v-if="getStatus">
                <mt-button slot="right">{{getName}} </mt-button>
                <mt-button slot="right" @click="loginout">退出</mt-button>
            </template>
            <mt-button slot="right" v-else><router-link to="/login">登录 </router-link></mt-button>
        </mt-header>
        <div class="hello"><router-link to="/hello" slot="left">进入hello页面</router-link></div>
        <mt-index-list>
            <mt-index-section index="A">
                <router-link to="/hello" slot="left"><mt-cell title="Aaron"></mt-cell></router-link>
                <mt-cell title="Alden"></mt-cell>
                <mt-cell title="Austin"></mt-cell>
            </mt-index-section>
            <mt-index-section index="B">
                <mt-cell title="Baldwin"></mt-cell>
                <mt-cell title="Braden"></mt-cell>
            </mt-index-section>
            <mt-index-section index="Z">
                <mt-cell title="Zack"></mt-cell>
                <mt-cell title="Zane"></mt-cell>
            </mt-index-section>
        </mt-index-list>
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
    methods:{
//            ...mapActions(['loginout'])
        loginout(){
            this.$store.dispatch('loginout');
        }
    },
    computed:{
//            ...mapGetters(['getName','getStatus'])
        getName(){
            return this.$store.state.username;
        },
        getStatus(){
            return this.$store.state.is_login;
        }
    }
}
</script>
<style>
    .hello{
        height:50px;
        line-height: 50px;
        text-align: center;
    }
    .hello a{
        color: #333;
        text-decoration: none;
    }
</style>