import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import Vuex from 'vuex';
import store from './store/index';
Vue.use(Vuex);
Vue.use(Mint);
Vue.use(VueRouter);
const router = new VueRouter({
    routes:[
        { path: '/', redirect: '/login' },
        { path: '/login', component: resolve => require(['./components/login.vue'], resolve) },
        { path: '/index', component: resolve => require(['./components/index.vue'], resolve) },
        { path: '/hello', component: resolve => require(['./components/hello.vue'], resolve) }
    ]
});

const app = new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');

