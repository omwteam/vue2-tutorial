<template>
  <div>
    <mt-field label="用户名" ref="input" type="text" placeholder="请输入用户名" v-model="username" :attr="{ maxlength: 10 }" :state="state"></mt-field>
    <mt-button type="primary" size="large" @click="addUser()" class="top-50">添加</mt-button>
    <mt-index-list>
      <mt-index-section index="A">
        <mt-cell title="Aaron"></mt-cell>
        <mt-cell title="Alden"></mt-cell>
        <mt-cell title="Austin"></mt-cell>
      </mt-index-section>
      <mt-index-section index="B">
        <mt-cell title="Baldwin"></mt-cell>
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      ...
      <mt-index-section index="Z">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>

</template>

<script>
  import { Field,Button,Toast, IndexList, IndexSection  } from 'mint-ui';

  export default {
    name: 'adduser',
    data () {
      return {
          username: '',
          state: ''
      }
    },
    components: {
        'mt-field': Field,
        'mt-button' : Button,
        'Toast': Toast,
        'IndexList': IndexList,
        'IndexSection': IndexSection
    },
    watch: {
        username: function(val){
            console.log(val);
            if (val.length > 2){
                this.state = 'success';
            } else {
              this.state = 'error';
            }
        }
    },
    created () {
      Toast({
        message: '操作成功',
        iconClass: 'icon icon-success',
        duration: 2000
      });
    },
    methods: {
        addUser: function (){
            if(this.state !== 'success'){
              return this.state = 'warning';
            }
            let self = this;

            this.$http.post('http://www.api.com/todouser/add',{name:this.username}).then(function(response){
              console.log(response.data);
              if (response.data.code == 200) {
                Toast({
                  message: '操作成功',
                  iconClass: 'icon icon-success',
                  duration: 2000
                });
                self.$router.push('/userlist');
              }
            }).catch(function(response) {

            })

        }
    }
  }
</script>
<style>
  .top-50 {
    margin-top: 50px;
  }
</style>
