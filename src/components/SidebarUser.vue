<template>
<div >
    <h3>Menu</h3>
    <ul>
        <li><router-link :to="{name: 'UserInfo'}">Home</router-link></li>
        <li><router-link :to="{name: 'Address'}">Manage Address</router-link></li>
        <li><router-link :to="{name: 'historyOrders'}">Orders</router-link></li>
    </ul>
</div>
</template>
<script>
export default {
    name: 'SidebarUser'    
}
</script>
<style scoped>

</style>