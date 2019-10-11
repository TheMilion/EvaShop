<template>
<div>
    <h1>historyOrders</h1>
    <router-link :to="{name: 'DetailOrder'}">DetailOrder</router-link>
    <router-view/>
</div>
</template>
<script>
export default {
    name: 'historyOrders'    
}
</script>
<style scoped>

</style>