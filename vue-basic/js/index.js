/**
 * Created by freddy on 2016/12/1.
 */
Vue.http.options.emulateJSON = true;

let data = {
    title: '菜单名称',
    subMenu: ['xxx','aaa'],
    flag: false,

};

Vue.component('drop-menu', {
    // 选项
    template: '<div class="menu"><div @click="toggle()">{{title}}<i class="caret"></i></div><ul class="menu-select" v-show="flag"><li v-for="item in subMenu">{{item}}</li> </ul></div>',
    data: function () {
        return data;
    },
    methods: {
        toggle: function ( ) {
            this.flag = !this.flag;
        }
    }
});
let Vm = new Vue({
    el: '#app',
    data: {
        addUrl: 'http://www.api.com/todo/add',
        listUrl: 'http://www.api.com/todo/index',
        delUrl: 'http://www.api.com/todo/del',
        updateUrl: 'http://www.api.com/todo/update',
        showUrl: 'http://www.api.com/todo/show',
        list: [],
        listFlag: false,
        editFlag: false,
        status: 1,
        title: '',
        detail: '',
        id: '',
        test: '',
        search: '',
        uid: localStorage.getItem('userid'),
        user: localStorage.getItem('username')
    },
    computed: {
        // a computed getter
        screenData: function () {
            // `this` points to the vm instance
            var that = this;
            return this.list.filter(function(d){
                if (that.search !== '') {
                    return d.status == that.status && ( d.title.indexOf(that.search) >= 0 || d.detail.indexOf(that.search) >= 0)
                }
                return d.status == that.status
            });
            //TODO
            // var that = this,
            //     i = 0,
            //     l = that.list.length,
            //     data = [];
            // if (that.search !== '') {
            //
            //     for ( ; i < l; i++) {
            //         if (that.list[i].status == that.status && ( that.list[i].title.indexOf(that.search) >= 0 || that.list[i].detail.indexOf(that.search) >= 0)) {
            //             console.log((that.list[i].title).indexOf(that.search) > 0);
            //             data.push(that.list[i]);
            //         }
            //     }
            // } else {
            //     for ( ; i < l; i++) {
            //         if (that.list[i].status == that.status) {
            //             data.push(that.list[i]);
            //         }
            //     }
            // }
            //
            // return data;
        }
    },
    created: function () {
        var that = this;
        that.getList();
    },
    methods: {
        add: function(param) {
            var that = this;
            that.$http.post(that.addUrl,{name:param}).then(function(response){
                console.log(response.data);
                if (response.data.code == 200) {
                    alert('插入成功');
                    window.location.href = 'userlist.html';
                }
            }).catch(function(response) {
                console.log(response)
            })
        },
        goUserlist: function () {
            alert(111);
            window.location.href = "userlist.html"
        },
        goAdd: function (){
            window.location.href = "add.html?type=todo"
        },
        doSearch: function(){
            alert(this.search);
        },
        getList: function () {
            var that = this;
            that.$http.post(that.listUrl,{uid: that.uid}).then(function(response){
                console.log(response.data.result);
                if (response.data.code == 200) {
                    that.list = response.data.result;
                    that.listFlag = that.list.length > 0;
                }
            }).catch(function(response) {
                console.log(response)
            })
        },
        del: function (id) {
            var that = this;
            that.$http.post(that.delUrl,{id:id}).then(function(response){
//                    console.log(response.data);
                if (response.data.code == 200) {
                    // that.list.splice(id-1,1);
                    that.getList();
                }
            }).catch(function(response) {
                console.log(response)
            })
        },
        goEdit: function (id) {
            this.editFlag = true;
            this.edit(id);
        },
        edit: function(id){
            var that = this;
            that.$http.post(that.showUrl,{id:id}).then(function(response){
                   console.log(response.data);
                if (response.data.code == 200) {
                    that.title = response.data.result['title'];
                    that.detail = response.data.result['detail'];
                    that.id = response.data.result['id'];
                }
            }).catch(function(response) {
                console.log(response)
            })
        },
        update: function () {
            var that = this;
            that.$http.post(that.updateUrl,{title: that.title,detail: that.detail,id: that.id}).then(function(response){
                console.log(response.data);
                if (response.data.code == 200) {
                    that.editFlag = false;
                    that.title = '';
                    that.detail = '';
                    that.id = '';
                }
            }).catch(function(response) {
                console.log(response)
            })
        }

    }
});