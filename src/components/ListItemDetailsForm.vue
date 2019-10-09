<template>
<div class="header2">
<<<<<<< HEAD
<!--b-form @submit.prevent="onSubmit" >
=======
<b-form @submit.prevent="onSubmit" >

>>>>>>> d04c585156c113305219df0814624c10913fb981
<div class="infoshow">
    <h2>{{items.product_name}}</h2>
    <h6>Model: {{items.model_number}} </h6>
    <h4>{{items.original_price}}€</h4>
</div>
<div>
    <b-form-group label="Choose Color:">
        <span v-for="(color,i)  in items.color_variation_colors" :key="i" class="color">
            <div class="circle" :style="{ backgroundColor: color }"></div>
            <b-form-radio v-model="form.colorselected" name="color-radio" :value="color" ></b-form-radio>
        </span>
    </b-form-group>
     
</div>
prova
<span v-for ="(item,i) in items._embedded.color_variations">
        {{item.product_id}}
        <img :src="item._links.image_small.href" @click="itemDetails(item.product_id)" class="img-thumbnails" style="border-radius:20px; width:80px">
</span>
    <b-form-group label="Choose Size:">
        <div>
        <b-form-select v-model="form.sizeselected">
             <option v-for="i in numberFromTo" :key="i" :value="i">{{i}}</option>
        </b-form-select>
        </div>  
    </b-form-group>  
    <b-form-group label="Choose Quantity:">
        <b-form-select v-model="form.quantity">
             <option v-for="n in 10" :key="n" :value="n">{{n}}</option>
        </b-form-select>
    </b-form-group>  
<br>
    <hr>
        <b-button type="submit" style="width:100%" variant="primary">Add to Cart</b-button>
    <hr>
</b-form-->
</div>
</template>

<script>
export default {
  name: "ListItemDetailsForm",
  components: {},
  mounted(){
      for(var i=35;i<50;i++){
          this.numberFromTo.push(i);
      }
  },
  methods: {

      itemDetails(el){
		  this.$router.push({
      			name: 'ListItemDetails', params: {id: el}
	  })
  },

onSubmit(){
    this.checkError();
    if(this.counterError == 0){
    this.form.product_name = this.items.product_name;
    this.form.product_id = this.items.product_id;
    this.form.original_price = this.items.original_price;
    this.form.image = this.items._links.image_small.href;
    let obj = {id: this.form.product_id, name: this.form.product_name, price: this.form.original_price, urlImg: this.form.image, size: this.form.sizeselected, color: this.form.colorselected, quantity: this.form.quantity}
    this.$store.dispatch('addToCart', obj)
     this.$router.push({
      			name: 'cart',
	  })
    this.clearForm();
    }
},

clearForm(){
    this.form = {
            product_name: "",
            product_id: "",
            original_price: "",
            image: "",
            colorselected: "",
            sizeselected:"",
            quantity: 1,

        }
    },

checkError(){
    this.counterError = 0;
if(this.form.colorselected == ""){
    alert("Seleziona Un Colore");
    this.counterError ++
} 
else{

}

if(this.form.sizeselected == ""){
    alert("Seleziona Un Taglia");
    this.counterError ++
}else{
    
}
  }
  },
  props: ["items"],
  computed: {},
  data() {
    return {
        numberFromTo: [],
        form:{
            product_name: "",
            product_id: "",
            original_price: "",
            image: "",
            colorselected: "",
            sizeselected:"",
            quantity: 1,

        },
        counterError: 0,
        selected: '',
        quantity:1,
    };
  }
};
</script>

<style scoped>
.header2 {
  margin-top: 50px;
}
.circle {
    width:50px;
    height:50px;
    border-radius: 50px;
}
.color{
float: left;
  margin: 1em;
}
</style>