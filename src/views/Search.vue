<template>
  <div class="list">
        <b-container fluid>
        <b-row>
          <b-col cols="1"></b-col>
          <b-col cols="10">
          <div v-if="finder" class="info">
              <h1>Search: {{this.$route.params.id}}</h1>
          </div>
          <ListItem v-if="finder" :items="itemList"/>
          <div class="container" v-else>
                  <h2>Oops! item not found</h2>
      <p>We can't find this item, try to find another one or</p>
      <a href="/">Go back home</a>
            </div>
      </b-col>
      <b-col cols="1"></b-col>
      </b-row>
    </b-container></div>
</template>

<script>
import ListItem from '@/components/ListItem'
export default {
  name: 'Search',
  components: { ListItem
  },
    data(){
    return {
      finder: false,
      itemList: [],
      nameGender: "",
    }
  },        
  mounted(){
    this.getList();
  },
  methods: {
    getList(){
      this.$axios.get("http://localhost:3000/products?product_name="+ this.$route.params.id)
      .then(res=>{
         if(res.data[0] == undefined){
           this.finder = false
          } else {
        this.finder = true
        this.itemList = res.data
          }
      }).catch(e=>{
      })

    }
  },
  watch: {
        '$route': function(){
            this.getList();
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
  margin-top:100px;
}
.container{
  margin-top: 140px;
  width: 100%;
  text-align: center;
  color: #343434
}

.container h1{
  font-size: 330px;
  margin: 0;
  font-weight: 900;
  letter-spacing: 20px;
}
.container h2{
  font-size: 50px;
}

.container a{
  text-decoration: none;
  background: #e55039aa;
  color: #fff;
  padding: 12px 24px;
  display: inline-block;
  border-radius: 25px;
  font-size: 14px;
  text-transform: uppercase;
  transition: 0.4s;
}

.container a:hover{
  background: #e55039;
}

</style>