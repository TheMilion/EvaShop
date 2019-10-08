import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import List from './views/List.vue'
import Cart from './views/Cart.vue'
import ListItemDetails from './views/ListItemDetails.vue'
import Categories from './views/Categories.vue'

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
    }
  ]
})
