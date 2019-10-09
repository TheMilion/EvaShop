<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" class="navbarclass" fixed="top">
      <b-navbar-brand to="/">EvaShop by Adidas</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/list">All Shoes</b-nav-item>
          <b-nav-item-dropdown text="Gender" right>
          <b-dropdown-item to="/Gender/M">Men</b-dropdown-item>
          <b-dropdown-item to="/Gender/W">Women</b-dropdown-item>
          <b-dropdown-item to="/Gender/K">Kids</b-dropdown-item>
        </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Category" right>
          <b-dropdown-item to="/categories/Originals">Originals</b-dropdown-item>
          <b-dropdown-item to="/categories/Performance">Performance</b-dropdown-item>
          <b-dropdown-item to="/categories/Essentials">Essentials</b-dropdown-item>
        </b-nav-item-dropdown>
          
        </b-navbar-nav>
        <b-nav-text></b-nav-text>
        <b-navbar-nav class="ml-auto">
          <b-nav-form @submit.prevent="onSubmit">
            <b-form-input size="sm" class="mr-sm-2" v-model="form.search" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            <b-nav-item to="/cart">
            <div class="text-center">Cart <b-badge variant="light">{{ this.$store.getters.countItemsCart }}</b-badge>
            </div>
             </b-nav-item>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "navbar",
  components: {},
  methods: {

onSubmit(){
    this.checkError();
    if(this.counterError == 0){

     this.$router.push({
      			name: 'Search', params: {id: this.form.search}
	  })
    this.clearForm();
    }
},

clearForm(){
    this.form = {
            search: "",
        }
    },

checkError(){
    this.counterError = 0;
if(this.form.search == ""){
    alert("Il campo non puo essere vuoto");
    this.counterError ++
}
  },
    gotoPage(el){
		  this.$router.push({
      			name: 'Categories', params: {id: el}
	  })
  },
  },
  props: {},
  computed: {},
  data() {
    return {
      counterError: "",
      form: {
        search: "",
      },
      menu: [
        {
          label: "List",
          path: "/list"
        },
        {
          label: "Cart",
          path: "/cart"
        }
      ]
    };
  }
};
</script>

<style>
  .router-link-active{
    color: white;
  }
</style>