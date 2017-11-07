import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import items from '@/components/items'
import login from '@/components/login'
import orders from '@/components/orders'
import orderlist from '@/components/orderlist'
import home from '@/components/home'
import VueResource from "vue-resource"



Vue.use(Router)
Vue.use(VueResource);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/hello',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/items',
      name: 'items',
      component: items
    },
    {
      path: '/orders',
      name: 'orders',
      component: orders
    },
    {
      path: '/orderlist',
      name: 'orderlist',
      component: orderlist
    }
  ]
})