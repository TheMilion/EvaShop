<template>
  <div id="app">
    <Navbar></Navbar>
    <div style="min-height:670px"><router-view /></div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


export default {
  components: {Navbar,Footer},
data() {
    return {
    };
  }

}
</script>

<style>

</style>
