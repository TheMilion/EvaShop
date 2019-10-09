<template>
<b-container fluid class="header2">
<b-row>

	<div class="contentlist" v-for="(item,i) in items" :key="item.product_id">
		<span v-if=" i < loadmore">
		<b-col :class="item.product_id">
		<span class="pointer" @click="itemDetails(item.product_id)">
	    <div class="product-image" >
			<p>
			<img :src="item._links.image_small.href" class="img-thumbnail">
			</p>
		</div>
		</span>
		<div class="product-name">
			<h6>{{item.product_name}}</h6>
		</div>
		<div class="product-pricing">
			<span class="product-sales-price" title="Sale Price">{{item.original_price}} €</span>
		</div>
		</b-col>
		</span>
		</div>
		
		
</b-row>    
<div class="btnload" align="center">
  <b-button variant="primary" v-show="display" @click="checkLoadMore">Load More</b-button>
</div>
</b-container>   
</template>

<script>
export default {
  name: "ListItem",
  components: {},
  methods: {
	  checkLoadMore(){
		  if(this.loadmore > this.items.length){
			  this.display = false;
		  } else {
			this.loadmore += 20
			if(this.loadmore > this.items.length){
				  this.display = false;
				  return
			}
				this.display = true;
		  }
		},
	  itemDetails(el){
		  this.$router.push({
      			name: 'ListItemDetails', params: {id: el}
	  })
  }},
  props:  ["items"],
  watch: {
  	items: [{
    	handler: 'checkLoadMore'
    		}],

		'$route': function(){
        	this.loadmore = 30;
        	}
		},

  computed: {},
  data() {
    return {
		display:true,
		loadmore:30,
		upHere:false,
	};
  }
};
</script>

<style>
.pointer{
	cursor: pointer;
}
.contentlist{
	max-width: 300px;
	margin-bottom: 30px;
}
.btnload{
	margin:20px;
}
</style>