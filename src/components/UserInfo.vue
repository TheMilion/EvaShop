<template>
<div>
    <h2>Riepilogo Utente:</h2>
    <br>
        <h5>{{this.$store.state.user.nome}} {{this.$store.state.user.cognome}}</h5>
        <h5>{{this.$store.state.user.username}}</h5>
        <h5>{{this.$store.state.user.email}}</h5>

</div>
</template>
<script>
export default {
    name: 'UserInfo'
}
</script>