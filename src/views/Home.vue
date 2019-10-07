<template>
  <div class="home">
    <h1>Home</h1>
    <button @click="addToCart">Add to cart</button>
    Prezzo tot {{ this.$store.getters.totalPrice }}€
    <button @click="removeToCart">rm</button>
  </div>
</template>

<script>
export default {
  name: 'home',
  props:{},
  data(){
    return {}
  },
  computed:{},
  components: {},
  methods: {
    addToCart(){
      let obj = {id : this.$store.state.cart[0].id + 1,price:30}
      this.$store.dispatch('addToCart', obj)
    },
    removeToCart(){
      this.$store.dispatch('removeToCart', 1)
    }
  }
}
</script>

<style scoped>

</style>
