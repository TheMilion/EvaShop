<template>
    <b-container>
        <b-form  @submit.prevent="openModal">
            <h3>Insert Address</h3>
            <hr>
            <b-row>
                <b-col cols="6">
                    <h5>Name
                        <b-form-input type="text" v-model="orderForm.name"></b-form-input>
                    </h5>
                </b-col>
                <b-col cols="6">
                    <h5>Surname
                        <b-form-input type="text" v-model="orderForm.surname"></b-form-input>
                    </h5>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="6">
                    <h5>Street Address
                        <b-form-input type="text" v-model="orderForm.streetAddress"></b-form-input>
                    </h5>
                </b-col>
                <b-col cols="3">
                    <h5>Po box
                        <b-form-input type="text" v-model="orderForm.poBox"></b-form-input>
                    </h5>
                </b-col>
                <b-col cols="3">
                    <h5>Zip Code
                        <b-form-input type="text" v-model="orderForm.zipCode"></b-form-input>
                    </h5>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="6">
                    <h5>City
                        <b-form-input type="text" v-model="orderForm.city"></b-form-input>
                    </h5>
                </b-col>
                <b-col cols="6">
                    <h5>Country
                        <b-form-input type="text" v-model="orderForm.country"></b-form-input>
                    </h5>
                </b-col>
            </b-row>
            <hr>
            <b-row>
                <b-col cols="6">
                    <b-button size="md" variant="outline-danger" @click="clearForm">Cancel</b-button>
                </b-col>
                <b-col cols="6">
                    <b-button type="submit" size="lg" variant="success">Buy</b-button>
                </b-col>
            </b-row>
        </b-form>
    </b-container>
</template>

<script>
    export default {
        name: 'CheckoutForm',
        computed:{

        },
        data(){
            return{
                orderForm:{
                    name: '',
                    surname: '',
                    streetAddress: '',
                    poBox: '',
                    zipCode: '',
                    city: '',
                    country: ''
                }

            }
        },
        methods:{
            openModal(){
                for(let i in this.orderForm){
                    if(this.orderForm[i]==''){
                        return alert('Fill all fields')
                    }
                }
                console.log(this.orderForm)
                alert('SUCCESS')
            },
            clearForm(){
                for(let i in this.orderForm){
                    this.orderForm[i] = '';
                    this.$router.go(-1)
                }
            }
        }
    }
</script>

<style scoped>

</style>