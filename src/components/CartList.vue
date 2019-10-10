<template>
<div>
<b-container fluid>
  <b-row v-for="(item, i) in this.$store.state.cart" :key="i" class="header2">
    <b-col class="product-image" xl="3" lg="3" md="6" sm="12">
               <img class="img-thumbnail" style="width:200px;" @click="backToitem(item.id)" :src="item.urlImg">
    </b-col>
    <b-col class="product-name" xl="3" lg="3" md="6" sm="12">
             <h4>{{item.name}}</h4>
      <h6>{{item.id}}</h6>
      <h6>Size: {{item.size}}</h6>
    </b-col>
    <b-col class="product-qty" xl="3" lg="3" md="6" sm="12">
             <h6>Quantità:
        <select v-model="item.quantity" @change="updateQuantity(item.quantity)">
          <option v-for="n in 10" :key="n" :value="n">{{n}}</option>
        </select>
      </h6>
    </b-col>
    <b-col class="product-pricing" xl="2" lg="2" md="4" sm="8">
             <span class="product-sales-price" title="Sale Price">
        <h6>{{item.price}} €</h6>
      </span>
    </b-col>
    <b-col class="deleteItem" xl="1" lg="1" md="2" sm="4">
      <button @click="removeToCart(item.id, item.size)">X</button>
    </b-col>
  </b-row>
</b-container>
</div>
</template>
<script>
export default {
name: "CartList",
components: {},
methods: {
  removeToCart(id, size){
    let obj = {id: id, size: size}
    this.$store.dispatch('removeToCart', obj)
  },
  updateQuantity(qnt){
    $cookies.set('cart', JSON.stringify(this.$store.state.cart))
  },
  backToitem(el){
     this.$router.push({
                 name: 'ListItemDetails', params: {id: el}
      })
  }
},
props: {},
computed: {},
data() {
  return {};
}
};
</script>
<style scoped>
@media (min-width: 1200px) {
.product-name, .product-qty, .product-pricing, .deleteItem{
margin-top: 50px;
}
}
.circle {
  width:35px;
  height:35px;
  border-radius: 50px;
}
img{
width: 100%;
}
</style>