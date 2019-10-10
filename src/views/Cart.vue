<template>
  <b-container fluid class="cart" >
    <b-row v-if="this.$store.state.cart.length" >
      <b-col xl="9" sm="12" class="cartList">
        <h4>Cart List : {{this.$store.getters.countItemsCart}}</h4>
        <CartList/>
      </b-col>
  
      <b-col xl="3" sm="12" lg="3" class="header2">
            <div id="right-container">
        <CartSummary/>
         </div>
      </b-col>
    </b-row>
    <div v-else class="emptyCart">
      <h1>The Cart is empty, add shoes to cart</h1>
    </div>
  </b-container>
</template>

<script>
import CartSummary from '@/components/CartSummary'
import CartList from '@/components/CartList'
export default {
  name: 'cart',
  components: {
CartSummary,
CartList
  },
  methods: {

  },
  props:{

  },
  computed:{
    allCart() {
      return this.$store.getters.getItems
    }
  },
  data(){
    return {

    }
  }
}
</script>

<style>
.cart{
padding: 80px;
}
.emptyCart{
  margin-top: 100px;
}

.header2 {
  padding: 80px; 
}
@media (min-width: 1200px) {
    #right-container {
  height: 100%;
  position: fixed;
  width: inherit; 
}
.cartList{
  border:         none;
    border-right:    1px solid hsla(200, 10%, 50%,100);
    width:          1px;       
}

}

</style>