## 一、什么是Vuex
官方文档是这样说的：Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
简单的说，Vuex 就是一个管理状态的模式，在Vuex中存储和修改的状态会同步在每个组件里。
通俗一点的说呢，Vuex 就是用来存放状态的，这些状态贯穿整个应用，也只能在 Vuex 里才能修改这些状态。



Vuex的工作原理从上图得知，
  ● 数据流都是单向的
  ● 组件能够调用 action
  ● action 用来派发 Mutation
  ● 只有 mutation 可以改变状态
  ● store 是响应式的，无论 state 什么时候更新，组件都将同步更新

## 二、为什么用Vuex
vuex解决了组件之间共享同一状态的麻烦问题。
在vue里，组件之间的作用域是独立的，父组件跟子组件之间的通讯可以通过prop属性来传参，但是在兄弟组件之间传参就无能为力了。vuex正是为了解决这个问题，让多个组件可以同时依赖一个状态。

## 三、怎么用Vuex
先安装vuex：npm install vuex --save ，这样会安装最新版本
可以使用 npm install vuex@版本号 --save  安装其他版本

## 四、如何调试Vuex
可以安装vue-devtools，不仅可以调试vue，也可以调试vuex
官方地址：https://github.com/vuejs/vue-devtools

## 五、部署到生产环境
npm run build 生成dist文件，把文件里的内容放到项目里。
构建完的index.html默认是引用根目录下的资源文件，结合我们当前的项目结构，需要修改配置文件。
common.css等公用文件需在app.vue中引入，则会压缩合并到app.css中并注入到index.html里。
在其他的.vue文件里写的样式，是由js写入头部的<style>标签里，也对全局起作用。可以通过设置作用域scoped来限制该样式只对该.vue文件起作用。

## 六、踩到的坑
项目名命名为vuex时，执行npm install vuex --save时报错，拒绝安装自身依赖，即安装相关依赖时，不可以与项目名重名。