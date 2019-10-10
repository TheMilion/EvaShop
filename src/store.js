import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: []
  },

  getters:{
    getItems: state => {
      return state.cart
    },
    countItemsCart: state => {
      return state.cart.length
    },
    totalPrice: state =>{
      let totPrice = 0;
      for(var i in state.cart){
        totPrice += state.cart[i].price * state.cart[i].quantity
      }
      return totPrice
    }
  },
  
  mutations: {
    addToCart(state, obj){
      for(var i in state.cart){
        if(state.cart[i].size != obj.size) continue
				if(state.cart[i].id == obj.id){
				  state.cart[i].quantity += obj.quantity;
      		$cookies.set('cart', JSON.stringify(state.cart))
					return
				}
			}
      state.cart.unshift(obj)
      $cookies.set('cart', JSON.stringify(state.cart))
    },
    removeToCart(state, obj){
      for(var i in state.cart){
        if(state.cart[i].id == obj.id && state.cart[i].size == obj.size){
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
    removeToCart(e, obj){
      e.commit('removeToCart', obj)
    }
  }
})
