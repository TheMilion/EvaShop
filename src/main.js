import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'

import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

import Vuex from 'vuex';
Vue.use(Vuex)

import axios from 'axios';
Vue.prototype.$axios =  axios;

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created(){
    if($cookies.get('cart') == null){
      $cookies.set('cart', JSON.stringify(this.$store.state.cart), '10d')
    } else {
      this.$store.state.cart = JSON.parse($cookies.get('cart'))
    }
    if($cookies.get('user') != ""){
      this.$store.dispatch('checkExist', $cookies.get('user'), "10d")
    }
  },
  render: h => h(App) 
}).$mount('#app')

export default new Vuex.Store({});
