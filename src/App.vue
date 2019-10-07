<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  components: {Navbar},
data() {
    return {
    };
  }

}
</script>

<style>

</style>
