<template>
    <div class="margin">
        <h1>CHECKOUT</h1>
        <b-row style="padding: 75px;">
            <b-col style="background-color: grey" xl="10" lg="9" md="7" sm="12"><CheckoutForm/></b-col>
            <b-col style="background-color: brown" xl="2" lg="3" md="5" sm="12"><CartSummary/></b-col>
        </b-row>
    </div>
</template>

<script>
import CartSummary from '@/components/CartSummary'
import CheckoutForm from '@/components/CheckoutForm'
export default {
    name: 'Checkout',
    components: {CartSummary, CheckoutForm},
    computed: {},
    mounted(){
        if(this.$store.state.cart.length == 0){
            this.$router.push({path: '/cart'})
        }
    },
    data() {
        return{}
    },
    methods: {},
}
</script>

<style scoped>
.margin{
    margin-top: 50px;
}
</style>