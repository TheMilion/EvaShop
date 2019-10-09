<template>
  <div class="containersummary">
    <h4>Cart Summary</h4>
    <p>Subtotale: {{this.$store.getters.totalPrice}}</p> 
    <p>IVA inclusa: {{iva}}€</p>
    <hr>
    <h4>Order Total: {{this.$store.getters.totalPrice}}€</h4>
    <hr>
    <button>Conferma Pagamento</button>
  </div>
</template>

<script>
export default {
  name: "CartSummary",
  components: {},
  methods: {},
  props: {},
  computed: {
    iva(){
      return (this.$store.getters.totalPrice*22)/100
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>

</style>