<template>
  <div class="list" style="margin-top: 50px">
    <b-container fluid>
        <b-row>
          <b-col xl="1"></b-col>
          <b-col xl="8" lg="12" md="12" sm="12" class="info">
               <ListItemDetailsInfo :item="itemList"/>
      </b-col>   
          <b-col xl="3" lg="12" md="12" sm="12"><ListItemDetailsForm :items="itemList"/></b-col>
      </b-row>
    </b-container>
    </div>
</template>

<script>
import ListItemDetailsForm from '@/components/ListItemDetailsForm'
import ListItemDetailsInfo from '@/components/ListItemDetailsInfo'
export default {
  name: 'ListItemDetails',

    data(){
    return {
      itemList: {},

    }
  },
  components:  {ListItemDetailsForm, ListItemDetailsInfo} ,       
  mounted(){
    this.getItem();
  },
  methods: {
    getItem(){
      this.$axios.get("http://localhost:3000/products?product_id=" + this.$route.params.id)
      .then(
        res=>{
          if(res.data[0] == undefined){
            this.$router.replace('/error404');
          } else {
            this.itemList = res.data[0]
          }
      }).catch(e=>{
      })

    }
  },
  props:{

  },
  computed:{
  },
  watch: {
   
        '$route': function(){
            this.getItem();
        }
    },

}
</script>

<style scoped>
.info{
  margin-top:20px;
  border:         none;
    border-right:    1px solid hsla(200, 10%, 50%,100);
    width:          1px;    

}
</style>