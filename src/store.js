import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from 'axios';


export default new Vuex.Store({
  state: {
    cart: [],
    user: '',
  },

  getters:{
    getItems: state => {
      return state.cart
    },
    getAllInfouser: state =>{
      return state.user
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
    logOut(state){
      console.log("prima" , state.user)
      state.user = ''
      console.log("dopo" , state.user)
      $cookies.remove('user')
    },
    checkExist(state,obj){
      if(obj[0] == undefined){
        return false
      } else {
      state.user = obj[0]
      console.log(state.user)
      $cookies.set('user', state.user.username)
      return true
    }
  },
    addToCart(state, obj){
      for(var i in state.cart){
        if(state.cart[i].size != obj.size) continue
				if(state.cart[i].id == obj.id){
          if(state.cart[i].quantity>11){
            return false
          }
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
    checkExist(e,obj){
      axios.get("http://localhost:3000/users?username="+ obj)
      .then(res=>{e.commit('checkExist',res.data)})
    },
    addToCart(e, obj){
      e.commit('addToCart', obj)
    },
    removeToCart(e, obj){
      e.commit('removeToCart', obj)
    },
    logOut(e){
      e.commit('logOut')
    }
  }
})
