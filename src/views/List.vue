<template>
  <div class="list">
 
        <b-container fluid>
        <b-row>
          <b-col cols="1"></b-col>
          <b-col cols="10">
           <div class="info">
              <h1>Tutti i Prodotti</h1>
          </div>
          <ListItem :items="itemList"/>
      </b-col>
      <b-col cols="1"></b-col>
      </b-row>
    </b-container></div>
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
        if(res.data[0] == undefined){
              this.$router.replace('/error404')
          } else {
            this.itemList = res.data
          }
      }).catch(e=>{
        alert(e)
        this.$router.replace('/error404')
      })
    }
  },
  props:{

  },
  computed:{
  }

}
</script>

<style scoped>
.info{
  margin-top:100px;
}
</style>