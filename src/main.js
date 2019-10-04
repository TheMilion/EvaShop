import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vuex from 'vuex';
Vue.use(Vuex);

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
 render: h => h(App)
}).$mount('#app')

export default new Vuex.Store({
  /*state: {
    cart: []
  }, 
  getters: {
 checklistCount(state) {
     return state.cart.length;
 },
 itemsCount(state) {
     return state.cart.reduce((count, cart) => {
         return count + cart.items.length;
     }, 0);
 }}*/
});