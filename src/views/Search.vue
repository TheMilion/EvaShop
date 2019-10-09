<template>
  <div class="list">

        <b-container fluid>
        <b-row>
          <b-col cols="1"></b-col>
          <b-col cols="10">
          <div class="info">
              <h1>{{this.$route.params.id}}</h1>
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
  name: 'Search',
  components: { ListItem
  },
    data(){
    return {
      itemList: [],
      nameGender: "",
    }
  },        
  mounted(){
    this.getList();
  },
  methods: {
    getList(){
        console.log(this.$route.params.id);
      this.$axios.get("http://localhost:3000/products?product_name="+ this.$route.params.id)
      .then(res=>{
        this.itemList = res.data
        console.log(res.data)
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
</style>