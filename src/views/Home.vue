<template>
  <div class="home">
    {{this.$store.state.checkcart}}
    <b-jumbotron class="firstJumbotron">
      <div class="prova">
      <h2 style="color:white" >Adidas Originals </h2>
      <p style="color:white">was designed to focus on the brand's earlier designs which remained a popular life-style icon</p>
      <b-button variant="primary" @click="gotoPage('Originals')">Go to Page Originals</b-button>
      </div>
    </b-jumbotron>

<b-container fluid class="header2">
  <b-row>
      <b-col col= "6">
        <b-card
          title="Adidas Performance"
          img-src="https://wallpapercave.com/wp/wp2022639.jpg"
          img-alt="Image"
        >
          <b-card-text>This shoes was designed to maintain their devotion to the athlete.</b-card-text>
          <b-button href="#" @click="gotoPage('Performance')" variant="primary">Go to Page Performance</b-button>
        </b-card>
      </b-col>
      <b-col col= "6">
        <b-card
          title="Adidas Essentials"
          img-src="https://wallpapercave.com/wp/wp2671830.jpg"
          img-alt="Image"
        >
          <b-card-text>Which dealt with the fashion market; the main group within this being.</b-card-text>
          <b- <b-button href="#" @click="gotoPage('Essentials')" variant="primary">Go to Page Essentials</b-button>
        </b-card>
      </b-col>
  </b-row>
  </b-container>
<b-jumbotron class="secondJumbotron">
      
    </b-jumbotron>

  <b-container fluid class="bv-example-row">
  <b-row>
      <b-col col= 12>Popolari della settimana</b-col>
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
    gotoPage(el){
		  this.$router.push({
      			name: 'Categories', params: {id: el}
	  })
  },
    
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
  height: 550px;
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

.prova{
  position: absolute;
top: +600px;
left: 100px;
bottom: 100px;
} 
</style>
