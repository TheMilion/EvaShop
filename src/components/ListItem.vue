<template>
<b-row>
	<div class="contentlist" v-for="item in items" :key="item.product_id">
		<b-col :class="item.product_id">
	    <div class="product-image">
			<p><a href="#" title="Prova">
			<img :src="item._links.image_small.href" class="img-thumbnail">
			</a></p>
		</div>
		<div class="product-name">
			<h6>{{item.product_name}}</h6>
		</div>
		<div class="product-pricing">
			<span class="product-sales-price" title="Sale Price">{{item.original_price}} €</span>
		</div>
		</b-col>
		</div>

</b-row>    
        
</template>

<script>
export default {
	name: "ListItem",
	components: {},
	methods: {},
	props:  ["items"],
	computed: {},
	data() {
		return {
			upHere:false,
		};
	}
};
</script>

<style>
.contentlist{
	max-width: 300px;
	margin-bottom: 30px;
}
</style>