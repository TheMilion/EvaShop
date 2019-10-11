<template>
<div>
    <h2>Riepilogo Address: </h2>
    <span v-for="(item, i) in this.$store.state.user.DettaglioSpedizione" :key="i">
        <h2>Address : {{i+1}}</h2>
        <h5>Dettagli utente :</h5>
        <br>
        <h5>{{item.nome}}</h5>
        <h5>{{item.cognome}}</h5>
        <br>
        <h5>Indirizzo:</h5>
        <br>
        <span v-for="(item, i) in item.indirizzo" :key="i">
            <h5>{{item.via}}  {{item.civico}}  {{item.cap}}</h5>
            <h5>{{item.citta}}  {{item.paese}}</h5>  
        </span>
    </span>
</div>
</template>
<script>
export default {
    name: 'Address'
}
</script>