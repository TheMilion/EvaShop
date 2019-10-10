<template>
  <div class="home">
    {{this.$store.state.checkcart}}
    <b-jumbotron class="firstJumbotron">
      <div class="firstJumboContent">
      <h2 style="color:white" >Adidas Originals </h2>
      <p style="color:white">was designed to focus on the brand's earlier designs which remained a popular life-style icon</p>
      <router-link :to="{path: '/Categories/Originals'}"><b-button variant="primary">Go to Page Originals</b-button></router-link>
      </div>
    </b-jumbotron>

<b-container fluid class="header2">
  <b-row>
      <b-col cols= "6">
        <b-card
          title="Adidas Men"
          img-src="https://www.wallpaperflare.com/static/416/549/131/adidas-robin-van-persie-men-s-wallpaper.jpg"
          img-alt="Image"
        >
          <router-link :to="{path: '/Gender/M'}"><b-button variant="primary">Go to Page Adidas Men</b-button></router-link>
        </b-card>
      </b-col>
      <b-col cols= "6">
        <b-card
          title="Adidas Women"
          img-src="https://i.ibb.co/P6tdJ01/wallpaperflare-com-wallpaper.jpg"
          img-alt="Image"
        >
          <router-link :to="{path: '/Gender/W'}"><b-button variant="primary">Go to Page Adidas Women</b-button></router-link>
        </b-card>
      </b-col>
  </b-row>
  </b-container>
<b-jumbotron class="secondJumbotron">
<div class="secondJumboContent">
      <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enGB/Images/originals-fw19-bb-era-launch-glp-k-mh-medium-ozweego-logo_tcm143-381064.png">
      <h2 style="color:black" >Adidas Kids </h2>
      <router-link :to="{path: '/Gender/K'}"><b-button variant="primary">Go to Page Adidas Kids</b-button></router-link>
</div>     
    </b-jumbotron>

<b-container fluid class="header2">
  <b-row>
      <b-col cols= "6">
        <b-card
          title="Adidas Performance"
          img-src="https://wallpapercave.com/wp/wp2022639.jpg"
          img-alt="Image"
        >
          <b-card-text>This shoes was designed to maintain their devotion to the athlete.</b-card-text>
          <router-link :to="{path: '/Categories/Performance'}"><b-button variant="primary">Go to Page Performance</b-button></router-link>
        </b-card>
      </b-col>
      <b-col cols= "6">
        <b-card
          title="Adidas Essentials"
          img-src="https://wallpapercave.com/wp/wp2671830.jpg"
          img-alt="Image"
        >
          <b-card-text>Which dealt with the fashion market; the main group within this being.</b-card-text>
          <router-link :to="{path: '/Categories/Essentials'}"><b-button variant="primary">Go to Page Essentials</b-button></router-link>
        </b-card>
      </b-col>
  </b-row>
  </b-container>    
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
};
</script>

<style scoped>
.firstJumbotron {
  height: 770px;
  margin-top: -3px;
  background-image: url("https://wallpaperaccess.com/full/1252105.jpg");
  background-size: 100%;
   background-size:     cover;
    background-repeat:   no-repeat;
    background-position: center center;  
  margin-bottom: 50px;
}

.secondJumbotron {
  height: 800px;
  margin-top: -3px;
  background-image: url("https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/itIT/Images/originals-fw19-bb-era-launch-glp-k-mh-medium-ozweego-d_tcm213-381063.jpg");
  background-size: 100%;
   background-size:     cover;
    background-repeat:   no-repeat;
    background-position: center center;  
  margin-bottom: 50px;
}
.header2 {
  margin-bottom: 50px;
}

.firstJumboContent{
  position: absolute;
top: +600px;
left: 100px;
bottom: 100px;
} 

</style>
