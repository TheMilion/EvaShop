<template>
  <div id="app">
    <Navbar></Navbar>
    <div id="navsdas">
      <router-link to="/">Home</router-link> |
      <router-link to="/list">List</router-link> |
      <router-link to="/cart">Cart</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'


export default {
  components: {Navbar}
}
</script>

<style>

</style>
