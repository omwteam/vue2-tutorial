// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
// import Mint from 'mint-ui';
// import 'mint-ui/lib/style.css'
// Vue.use(Mint);
// import { Cell, Checklist } from 'minu-ui';
// Vue.component(Cell.name, Cell);
// Vue.component(Checklist.name, Checklist);

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;
/* eslint-disable no-new */
const routes = [
  { path: '/',  redirect: '/index'},
  // { path: '/adduser', component: resolve => require(['./components/adduser.vue'], resolve)},
  // { path: '/userlist', component: resolve => require(['./components/userlist.vue'], resolve) },
  { path: '/index', component: resolve => require(['./components/index.vue'], resolve) },
  // { path: '/edit', component: resolve => require(['./components/edititem.vue'], resolve) },
  // { path: '/add', component: resolve => require(['./components/additem.vue'], resolve) }
];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes,
});

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
