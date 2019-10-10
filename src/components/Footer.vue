<template>
  <!-- Footer -->
  <div class="footer">
    <b-container>
      <b-row class="pt-5 text-center d-flex justify-content-center">
        <b-col md="2" >
          <h6 class="title font-weight-bold"><router-link :to="{name: 'home'}">Home</router-link></h6>
        </b-col>
        <b-col md="2" >
          <h6 class="title font-weight-bold"><router-link :to="{path: '/list'}">All Shoes</router-link></h6>
        </b-col>
        <b-col md="2" >
          <h6 class="title font-weight-bold"><router-link :to="{path: '/cart'}">Cart</router-link></h6>
        </b-col>
      </b-row>
      <hr style="background-color: blue"/>
      <b-row class="text-center justify-content-center mb-md-0 mb-4">
        <b-col md="8" sm="12" class="mt-5">
          <h1>EvaMovieShop</h1>
        </b-col>
      </b-row>
      <hr class="clearfix d-md-none rgba-white-light" style="margin: '10% 15% 5%'" />
      
    </b-container>
    <div class="text-center py-3">
      <b-container fluid>
        &copy; 2019 Copyright
      </b-container>
    </div>
  </div>
  <!-- Footer -->
</template>

<script>
export default {
  name: "Footer",
  components: {},
  methods: {
  },
  props: {},
  computed: {},
  data() {
    return {
    }
    }
};
</script>

<style scoped>
p{
    cursor: pointer;
    color: white;
}
.footer{
    background-color: black;
}
</style>