<template>
  <div class="list">

        <b-container fluid>
        <b-row>
          <b-col cols="1"></b-col>
          <b-col cols="10">
          <div class="info">
              <h1>{{this.nameGender}}</h1>
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
  name: 'Gender',
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
    getName(){
        switch (this.$route.params.id){
            case "M" : this.nameGender = "Men";
                break;
            case "U" : this.nameGender = "Unisex";
                break;
            case "W" : this.nameGender = "Women";
                break;
            case "K" : this.nameGender = "Kids";
                break;
        }
    },
    getList(){
        this.getName();
      this.$axios.get("http://localhost:3000/products?gender="+ this.$route.params.id)
      .then(res=>{
        this.itemList = res.data
      }).catch(e=>{
        alert(e)
        this.$router.go(-1)
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