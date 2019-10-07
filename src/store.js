import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
  },
  getters: {
    checkCart: state => state.cart
  },
  mutations: {
    addtoCart (state,itemCart){
      state.cart.push(itemCart);
      console.log(this.state.cart);
    }
  },
  actions: {
    callcheckCart(e, obj){
      e.commit("addtoCart", obj);
    }
  },
})
