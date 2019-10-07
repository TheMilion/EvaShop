<template>
    <b-container fluid>
          <b-row class="header2">
             <b-col cols="3">	
	    <div class="product-image">
			<a href="#" title="Prova">
			<img src="https://www.converse.com/dw/image/v2/AALW_PRD/on/demandware.static/-/Sites-ConverseMaster/default/dwcf2a8fd2/images/hi-res/162054_standard.jpg?sw=165&amp;sh=165&amp;sm=fit" alt="Chuck 70 Classic High Top Girasole/Nero/Egret" title="Chuck 70 Classic High Top Girasole/Nero/Egret" data-comingsoon="{&quot;iscommingsoon&quot;:&quot;null&quot;}" class="">
			</a>
		</div>
		
		 
    </b-col>   
    <b-col cols="3">	
	    <div class="product-name">
			<h4>Prova</h4>
            <h6>Dettaglio Scarpa</h6>
		</div>
    </b-col>  
    <b-col cols="3">	
	    <div class="product-qty">
			<h6>Quantità: <select><option>1</option></select></h6>
			</a>
		</div>
    </b-col>  
       <b-col cols="2">
            <div class="product-pricing" style="display:block;">
			<span class="product-sales-price" title="Sale Price"><h6>90,00 €</h6></span>

        </div>
        </b-col> 
        <b-col cols="1">
            <div class="deleteItem">
           <button>X</button>
           </div>
        </b-col> 
        
          </b-row>
          <hr>
        </b-container>
</template>

<script>
export default {
  name: "CartSummary",
  components: {},
  methods: {},
  props: {},
  computed: {},
  data() {
    return {};
  }
};
</script>

<style scoped>
.header2 {
  margin-top: 50px;
}
.product-name, .product-qty, .product-pricing, .deleteItem{
  position: absolute;
  top: 50%;
  transform: translate(-50%,-50%);
}
</style>