<template>
<div>
 <b-container fluid>
   <h4 align="left">Numero Ordine: {{orderNumber}}</h4>
   <h4 align="left">Items Details</h4>
   <b-row v-for="(item, i) in this.$store.state.cart" :key="i" class="header2">
     <b-col class="product-image" xl="3" lg="3" md="6" sm="12">
        <img class="img-thumbnail" style="width:200px;" :src="item.urlImg">
     </b-col>
     <b-col class="product-name" xl="3" lg="3" md="6" sm="12">
        <h4>{{item.name}}</h4>
       <h6>{{item.id}}</h6>
       <h6>Size: {{item.size}}</h6>
     </b-col>
     <b-col class="product-qty" xl="3" lg="3" md="6" sm="12">
              <h6>Quantità: {{item.quantity}}
       </h6>
     </b-col>
     <b-col class="product-pricing" xl="2" lg="2" md="4" sm="8">
              <span class="product-sales-price" title="Sale Price">
         <h6>{{item.price}} €</h6>
       </span>
     </b-col>
   </b-row>
   <hr>
<div align="left">
   <h4 >Dettagli Spedizione</h4> 
   </div>
    <p>Name: {{orderForm.name}}</p>
    <p>Surname: {{orderForm.surname}} </p>   
    <p>Street: {{orderForm.streetAddress}}</p>
    <p>Zip Code: {{orderForm.zipCode}}</p>
    <p>City: {{orderForm.city}}</p>
    <p>Country: {{orderForm.country}}</p>
<hr>
   <div class="padding">
    <h4>Total: {{this.$store.getters.totalPrice}}€</h4>
    <hr>
  </div>


 </b-container>
</div>
</template>
<script>
export default {
 name: "OrderConfirmed",
 components: {},
 methods: {
 },
 props: [
   "orderForm"
 ],
 computed: {
   orderNumber(){
     return (Math.floor(Math.random() * 1000000) + 1567)
 }},
 data() {
   return {};
 }
}
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


