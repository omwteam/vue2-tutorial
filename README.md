# vue.js2.x在移动端的应用


## vue.js移动端应用的优势

    vue.js适用场景：组件化开发，处理数据，少的dom操作，


**你可以查看安装指南来了解其他安装 Vue 的选项。请注意我们不推荐新手直接使用 vue-cli，尤其是对 Node.js 构建工具不够了解的同学。**


1、使用的vue的实例来演示一个基础todolist
    


 vue的实例

 数据绑定 data

 初始化  created

 DOM事件绑定 methods

 列表渲染与过滤器 

 列表渲染  v-for

 过滤器或者属性计算 computed

 表单模型绑定 v-model

 条件渲染 

    v-if
    v-else
    v-show
    
    v-if 是真实的条件渲染，因为它会确保条件块在切换当中适当地销毁与重建条件块内的事件监听器和子组件。
    
    v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——在条件第一次变为真时才开始局部编译（编译会被缓存起来）。
    
    相比之下， v-show 简单得多——元素始终被编译并保留，只是简单地基于 CSS 切换。
    
    一般来说， v-if 有更高的切换消耗而 v-show 有更高的初始渲染消耗。因此，如果需要频繁切换使用 v-show 较好，如果在运行时条件不大可能改变则使用 v-if 较好。


 使用组件 Vue.component(tagName, options)
 
 
 与服务器端交互 vue-resource
     
     get
     $http.get().catch()
    
     $http.post().catch()
     put,delete同理
     
 

常见问题：

    路由启动 render
    v1.x迁移 模板
    组件多次使用 需要包裹
    组件里触发事件 
    
