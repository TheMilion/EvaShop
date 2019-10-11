<template>
<div>
<div v-if="returnSession" class="show">
<b-nav-item-dropdown text="Login" right>
    <div class="row">
        <div class="container">
        <b-form @submit.prevent="onSubmit" >
            <h6>Username: <b-form-input type="text" v-model="form.username" ></b-form-input></h6>
            <h6>Password: <b-form-input type="text" v-model="form.password" ></b-form-input></h6>
            <b-button type="submit" size="sm" variant="success">Entra</b-button>              
        </b-form>
        </div>
    </div>
</b-nav-item-dropdown>
</div>
<div v-else >
    <b-nav-item-dropdown :text="this.$store.state.user.username" right>
        <b-dropdown-item :to="{path: '/Profile/'+ this.$store.state.user.username}">Profile</b-dropdown-item>
        <b-dropdown-item @click="logout()">Sign Out</b-dropdown-item>     
    </b-nav-item-dropdown>
</div>
</div>
</template>

<script>
export default {
  name: "LoginForm",
  components: {},
  methods: {

      logout(){
          this.$store.dispatch("logOut")
          this.$router.push({
                 path:"/"})
      },
      onSubmit(){
          var obj = {...this.form}
          this.$store.dispatch("checkExist", obj.username)

   }
   
},
  props: ["items"],
  watch: {
},
  computed: {
      returnSession(){
          console.log("user", !!this.$store.state.user)
          if(this.$store.state.user == '') return true
          return false;
      }
  },
  data() {
    return {
        loginData: true,
        form: {
            username: "",
            password: "",
        }
    }
  },
  mounted() {
      //console.log(this.$refs.productName.innerHTML)
      //console.log(this.$refs.formGroup.disabled)
  }
};
</script>

<style scoped>
.container{
    width: 300px;
    padding:25px;
}
</style>