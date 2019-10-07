<template>
  <div class="list">
    <b-jumbotron class="secondJumbotron">
      <pre></pre>
    </b-jumbotron>
    <b-container fluid>
      <b-row>
      <b-col cols="1"></b-col>
      <b-col cols="10">

            <ListItem :items="itemList"/>
      
      </b-col>
      <b-col cols="1"></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem'
export default {
  name: 'list',
  components: { ListItem
  },
    data(){
    return {
      itemList: [],
    }
  },        
  mounted(){
    this.getList();
  },
  methods: {
    getList(){
      this.$axios.get("http://localhost:3000/products")
      .then(res=>{
        this.itemList = res.data
      }).catch(e=>{
      })

    }
  },
  props:{

  },
  computed:{

  },

}
</script>

<style scoped>
.secondJumbotron {
  height: 450px;
  margin-top: -3px;
  background-image: url("https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/itIT/Images/originals-fw19-bb-era-launch-glp-k-mh-medium-ozweego-d_tcm213-381063.jpg");
  background-size: 100%;
   background-size:     cover;
    background-repeat:   no-repeat;
    background-position: center center;  
  margin-bottom: 50px;
}
</style>