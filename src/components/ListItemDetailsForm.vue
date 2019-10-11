<template>
<div class="header2">
<b-form @submit.prevent="onSubmit" >
<div class="infoshow">
    <h2 ref="productName">{{items.product_name}}</h2>
    <h6>Product: {{items.product_id}} </h6>
    <h6>Model: {{items.model_number}} </h6>
    <h4>{{items.original_price}}€</h4>
</div>
<div>
    <b-form-group label="Choose Color:">   
<template v-if="items && items._embedded">
<span v-for ="(item,i) in items._embedded.color_variations" :key="i">
        <div class="color">
        <img :src="item._links.image_small.href" :class="{ 'active': activeClass === item.product_id }" @click="itemDetails(item.product_id)" class="img-thumbnails" style="border-radius:20px; width:80px">
        </div>
</span>
</template>
    </b-form-group>
</div>
    <b-form-group label="Choose Size:" ref="formGroup">
        <div>
            <EDropdown v-model="form.sizeselected" :options="options" />
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
</b-form>
</div>


</template>

<script>
import EDropdown from '@/components/EDropdown'
export default {
  name: "ListItemDetailsForm",
  components: {EDropdown},
  methods: {
      
    getGenderSize(){
        if(this.items.gender == 'K'){
            for(var i = 28; i < 39; i++){
                this.options.push({"value": i, "label": i})
                this.options.push({"value": i+' 1/2', "label": i+' 1/2'})
            } 
            return this.options
        } else {
            for(var i = 38; i < 50; i++){
                this.options.push({"value": i, "label": i})
                this.options.push({"value": i+' 1/2', "label": i+' 1/2'})
            }
            return this.options
        }
    },

      getSize(){
            for(var i = 1; i < 11; i++){
                this.optionsItem.push({"value": i, "label": i})
            }
            return this.optionsItem
    },
    getActiveClass(){
        this.activeClass = this.items.product_id;
    },
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
    let obj = {id: this.form.product_id, name: this.form.product_name, price: this.form.original_price, urlImg: this.form.image, size: this.form.sizeselected, quantity: this.form.quantity}
    console.log(obj)
    //console.log(this.$store.dispatch('addToCart', obj))
for(var i in this.$store.state.cart){
        if(this.$store.state.cart[i].size != obj.size) continue
				if(this.$store.state.cart[i].id == obj.id){
                  if(this.$store.state.cart[i].quantity + obj.quantity > 10 ){
                      return    this.makeToastFalse(this.$store.state.cart[i].quantity)
                  }
				}
            }
    this.sizeSelectError = false;
    this.makeToast()
    this.$store.dispatch('addToCart', obj)
    console.log(this.$store.state.cart)
    //??????this.clearForm();
    }
},


checkQty(obj){
    
},

makeToast() {
        this.$bvToast.toast(`Click here for see cart`, {
          href: '/cart',
          title: 'Itemd added correctly',
           variant: "success",
           toaster: "b-toaster-top-right",
            delay: 1,
        })
      },

makeToastFalse(count) {
        this.$bvToast.toast(`Item Selected: `+count, {
          title: 'Error: Max item: 10',
          variant: "danger",
          toaster: "b-toaster-top-right",
        })
      },

clearForm(){
    this.form = {
            product_name: "",
            product_id: "",
            original_price: "",
            image: "",
            sizeselected:"",
            quantity: 1,

        }
    },

checkError(){
    this.counterError = 0;
if(this.form.sizeselected == ""){
    this.sizeSelectError = true
    this.counterError ++
}
  }
  },
  props: ["items"],
  
  watch: {
    items: [{
      handler: 'getActiveClass'
    }]
},
  computed: {},
  data() {
    return {
        optionsItem: "",
        options: [],
        showTop: false,
        form:{
            product_name: "",
            product_id: "",
            original_price: "",
            image: "",
            colorselected: "",
            sizeselected:"",
            quantity: 1,
        },
        activeClass: "",
        counterError: 0,
        selected: '',
        quantity:1,
        sizeSelectError: false
    };
  },
  mounted() {
      this.getGenderSize();
      //console.log(this.$refs.productName.innerHTML)
      //console.log(this.$refs.formGroup.disabled)
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
.color {
    float:left;
    margin: 5px;   
}
.active{
 border: 1px solid gray;
}
.sizeError{
    border: 1px solid red;
}
</style>