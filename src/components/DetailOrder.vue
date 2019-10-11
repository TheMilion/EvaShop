<template>
       <div>
<b-container fluid>
  <b-row class="header2">
      <h4>{{item.id}}</h4>
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
    <b-col class="product-pricing" xl="3" lg="2" md="4" sm="8">
             <span class="product-sales-price" title="Sale Price">
        <h6>{{item.price}} €</h6>
      </span>
    </b-col>
  </b-row>
</b-container>
</div>
</template>
<script>
export default {
    name: 'DetailOrder',
    props: [
        "item"
    ]
}
</script>