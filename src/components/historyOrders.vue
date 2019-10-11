<template>
<div>
<h2>List Orders : </h2>
    <span v-for="(item, i) in this.$store.state.user.historyOrder" :key="i">
        <h6>ID: {{item.id}}  Data: {{item.data}} <button @click="toggle(item.id)">Show Details</button></h6>
        <div v-if="hideEl.id == item.id">
            <span v-if="hideEl.show">
                <h5>List Orders:</h5>
                <span v-for="(article) in item.buy" :key="article.id">
                    <DetailOrder :item="article"/>
                    <hr>
                </span>
             </span>
        </div>    
       </span>
</div>
</template>
<script>
import DetailOrder from '@/components/DetailOrder'
export default {
    name: 'historyOrders',
    components: {
        DetailOrder
    },
    data(){
        return{
            hideEl: {
                id: "",
                show: false,
            },
        }
    },
    methods:{
        toggle(el) { 
        this.hideEl.id = el,
            this.hideEl.show = !this.hideEl.show
            console.log(this.hideEl)
}
    }    
}
</script>
<style scoped>

</style>