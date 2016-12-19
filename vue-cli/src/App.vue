<template>
  <div id="app">
    <!--<v-header></v-header>-->
    <div style="margin-top: 80px;">
      <!-- 路由出口 -->
      <!-- 路由匹配到的组件将渲染在这里 -->
      <router-view></router-view>
    </div>

  </div>
</template>
<script>
//  import header from './components/header.vue';
  export default {
    name: 'index',
//    components: {
//      'v-header': header
//    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

