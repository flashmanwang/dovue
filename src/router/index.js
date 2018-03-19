import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ViewDetails from '@/page/viewDetails'
import test from '@/components/test'
import currentList from '@/page/currentList'
import index from '@/page/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'HelloWorld',
      component: HelloWorld
    },{
    	path:'/viewDeatils',
    	name: 'viewDetails',
      	component: ViewDetails
    }
    ,{
      path:'/',
      name: 'index',
        component: index
    },{
      path:'/test',
      name:'test',
      component:test
    },{
      path:'/currentList',
      name:'currentList',
      component:currentList
    }
  ]
})
