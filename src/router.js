import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import List from '@/views/List.vue'
import Cart from '@/views/Cart.vue'
import ListItemDetails from '@/views/ListItemDetails.vue'
import Categories from '@/views/Categories.vue'
import Gender from '@/views/Gender.vue'
import Checkout from '@/views/Checkout.vue'
import Search from '@/views/Search.vue'
import Profile from '@/views/Profile.vue'
import PageNotFound from '@/views/PageNotFound.vue'
import UserInfo from '@/components/UserInfo.vue'
import historyOrders from '@/components/historyOrders.vue'
import Address from '@/components/Address.vue'
import DetailOrder from '@/components/DetailOrder.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/listitemdetails/:id',
      name: 'ListItemDetails',
      component: ListItemDetails,
    },
    {
      path: '/categories/:id',
      name: 'Categories',
      component: Categories,
    },
    {
      path: '/gender/:id',
      name: 'Gender',
      component: Gender,
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    },
    {
      path: '/search/:id',
      name: 'Search',
      component: Search,
    },
    {
      path: '/Profile/:id',
      name: 'Profile',
      component: Profile,
      children:[
        {
          path: '',
          name: 'UserInfo',
          component: UserInfo,
        },
        {
          path: 'Address',
          name: 'Address',
          component: Address,
        },
        
        {
          path: 'historyOrders',
          name: 'historyOrders',
          component: historyOrders,
          children:[
            {
              path: 'DetailOrder',
              name: 'DetailOrder',
              component: DetailOrder
            }
          ]
        }
      ]
    },
    { path: "/error404", 
      name: 'NotFound',
    component: PageNotFound },
    { path: "*", 
      name: 'PageNotFound',
    component: PageNotFound }
  ]
})
