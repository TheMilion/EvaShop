<template>
  <div class="padding">
    <h4>Cart Summary</h4>
    <p>Subtot: {{this.$store.getters.totalPrice}}€</p> 
    <p>IVA included: {{iva}}€</p>
    <hr>
    <h4>Total: {{this.$store.getters.totalPrice}}€</h4>
    <hr>
    <button v-show="position" @click="goCheckout">Checkout</button>
  </div>
</template>

<script>
export default {
  name: "CartSummary",
  components: {},
  methods: {
    goCheckout(){
      this.$router.push({path: '/checkout'})
    }
  },
  mounted(){
    if(this.$route.name=='cart'){
      this.position=true
    }
  },
  props: {},
  computed: {
    iva(){
      return (this.$store.getters.totalPrice*22)/100
    }    
  },
  data() {
    return {
      position: false
    };
  }
};
</script>

<style scoped>

</style>