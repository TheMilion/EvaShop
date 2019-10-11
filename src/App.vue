<template>
  <div id="app">

    <Navbar></Navbar>
    <div style="min-height:670px"><router-view/></div>
    <!--<EDropdown v-model="value" :options="options" :return-object="true" :render-option="myRenderOption"/>-->
    <Footer></Footer>
 
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import EDropdown from '@/components/EDropdown'


export default {
  components: {Navbar,Footer,EDropdown},
data() {
    return {
      value: {value:'A22',label: "gas"},
      options: [{value:'A22',label: "gas"},{value:'A40',label: "luce"}] 
    };
  },
  methods: {
    myRenderOption(option) {
      return  (option.value + ' (' + option.label + ')')
    }
  },
}
</script>

<style>

</style>
