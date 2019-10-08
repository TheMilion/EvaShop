<template>
    <b-container fluid>
    <b-row class="header2">
             <b-col cols="3">	
	    <div class="slider_vert">
        <div v-for="(items,i) in item._links.images_small" v-if="i <= 4" :key="'image_small'+i">
          <img :src="items.href"  :class="{ 'active': activeIndex === i }"  @click="setActive(items, i)"  class="img-thumbnail item_leftslider" >
        </div>
		</div>
		
		 
    </b-col>   
    <b-col cols="9">	
	    <div class="slider_info">
            <div v-for="(items,i) in item._links.images_large" v-if="i <= 4" :key="'image_large'+i">
          <img :class="{ 'active': activeIndex === i }"  @blur="setActive(i)" :src="items.href" :id="'image_large'+i" class="img-thumbnail item_rightslider">
      </div>
		</div>
    </b-col>  
          </b-row>
          <hr>
          
          <div class="item_info">
                <h2>{{item.product_name}}</h2><br>
      <p>{{item.description_headline}}</p>
        </div>

      
        </b-container>
</template>

<script>
export default {
  name: "ListItemDetailsInfo",
  components: {},
  methods: {
      setActive(items,index){ 
      this.activeIndex = index;
      },

  },
  props: ["item"],
  computed: { 
  },
  data() {
    return {
        activeIndex: 0,
        displayslider:false,
    };
  }
};
</script>

<style scoped>
.header2 {
  margin-top: 50px;
}
.item_leftslider{
    margin-bottom:20px;
    width:100px;
}
.item_rightslider{
    width:650px;
    height:580px;
    display:none;
}
.item_info{
    text-align:center;
    margin-top: 20px;
    margin-bottom: 50px;
}
.active{
 display:block;
 border: 1px solid gray;
}
</style>