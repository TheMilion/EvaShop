import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [
      {
        id: 4,
        price:30
      },
      {
        id: 3,
        price:30
      },
      {
        id: 2,
        price:30
      },
      {
        id: 1,
        price:30
      }
    ]
  },

  getters:{
    getItems: state=> {
      return state.cart
    },
    countItemsCart: state => {
      return state.cart.length
    },
    totalPrice: state =>{
      let totPrice = 0;
      for(var i in state.cart){
        totPrice += state.cart[i].price
      }
      return totPrice
    }
  },
  
  mutations: {
    addToCart(state, obj){
      state.cart.unshift(obj)
      $cookies.set('cart', JSON.stringify(state.cart))
    },
    removeToCart(state, id){
      for(var i in state.cart){
        if(state.cart[i].id == id){
          console.log('item: '+i+', id: '+state.cart[i].id)
          state.cart.splice(i, 1)
          $cookies.set('cart', JSON.stringify(state.cart))
        }
      }
    }
  },
  
  actions: {
    addToCart(e, obj){
      e.commit('addToCart', obj)
    },
    removeToCart(e, id){
      e.commit('removeToCart', id)
    }
  }
})
