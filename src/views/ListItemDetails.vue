<template>
  <div class="list">
    <b-container fluid>
        <b-row>
          <b-col cols="1"></b-col>
          <b-col cols="8" class="info">
               <ListItemDetailsInfo :item="itemList"/>  
        
      </b-col>   
          <b-col cols="3"><ListItemDetailsForm :items="itemList"/></b-col>
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
  components:  {ListItemDetailsForm,ListItemDetailsInfo} ,       
  mounted(){
    this.getItem();
  },
  methods: {
    getItem(){
      this.$axios.get("http://localhost:3000/products?product_id="+ this.$route.params.id)
      .then(res=>{
          //console.log(res.data)
        this.itemList = res.data[0]
        console.log(itemList)
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
.info{
  margin-top:20px;
  border:         none;
    border-right:    1px solid hsla(200, 10%, 50%,100);
    width:          1px;    

}
</style>