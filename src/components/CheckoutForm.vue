<template>
    <b-container>
        <Modal :id="idmodal" @modalclosed="closeModal" ref="modal" >
            <div slot="header">Grazie per aver effettuato l'acquisto</div>
            <div slot="body">
                <OrderConfirmed :orderForm="this.orderForm" />
                </div>
        </Modal>
        <b-form  @submit.prevent="checkForm">
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
import OrderConfirmed from '@/components/OrderConfirmed'
import Modal from '@/components/Modal'
    export default {
        name: 'CheckoutForm',
        components: {
            Modal,
            OrderConfirmed
        },
        data(){
            return{  
                idmodal: "idmodalOrder",
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

            closeModal(){
                this.$store.state.cart = [],
                this.$router.push({path: '/'})
            },
            openModal(){
            this.$refs.modal.openModal()
            },
            checkForm(){
                for(let i in this.orderForm){
                    if(this.orderForm[i]==''){
                        return alert('Fill all fields')
                    }
                }
                $cookies.set('cart', []),
                this.openModal()
            },
            clearForm(){
                for(let i in this.orderForm){
                    this.orderForm[i] = '';
                }
                this.$router.go(-1)
            },
        }
    }
</script>

<style scoped>

</style>