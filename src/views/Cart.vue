<template>

    <b-container fluid>
      <b-row style="margin-top:20px;">
      <b-col cols="1"></b-col>
      <b-col cols="8" class="cartList">
        <h4>Cart List</h4>
        <CartList :cart="allCart" />
        <CartList/>
        <CartList/>
      </b-col>
      <b-col cols="3" class="header2">
        <h4>Cart Summary</h4>
      <CartSummary :cart="allCart" />
            </b-col>
      </b-row>
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

<style scoped>
.cartList{
  border:         none;
    border-right:    1px solid hsla(200, 10%, 50%,100);
    width:          1px;    
}
</style>