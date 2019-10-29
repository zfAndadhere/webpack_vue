import Vue from 'vue'
import Router from 'vue-router'
const Hello = ()=>import(/* webpackChunkName: "Hello" */ '@pages/Hello.vue');
const Hi = ()=>import(/* webpackChunkName: "Hi" */ "@pages/Hi.vue");
const Hey = ()=>import(/* webpackChunkName: "Hey" */ "@pages/Hey.vue");


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
    ,{
        path: '/hi',
        name: 'Hi',
        component: Hi
    },{
      path:"/hey",
      name:"Hey",
      component:Hey
    }
  ]
})
