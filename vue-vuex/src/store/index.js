/**
 * Created by linxin on 2016/12/1.
 */
import Vue from 'vue';
import Vuex from  'vuex';
import * as actions from './actions';
// import * as getters from './getters';
Vue.use(Vuex);
const local_name = localStorage.getItem('username');
const state = {
    is_login: local_name ? true : false,
    username: local_name ? local_name : '登录'
}
const mutations = {
    LOGIN:function(states,obj){
        states.is_login = true ;
        states.username = obj.username ;

    },
    LOGINOUT:function(state){
        state.is_login = false ;
        localStorage.setItem('username','');
        state.username = '登录' ;
    }
}

export default new Vuex.Store({
    state,
    actions,
    // getters,
    mutations
})