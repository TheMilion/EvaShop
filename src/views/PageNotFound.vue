<template>
      <div class="container">
      <h2>Oops! Page not found</h2>
      <h1>404</h1>
      <p>We can't find the page you're looking for.</p>
      <a href="/">Go back home</a>
    </div>
</template>

<script>
export default {
  name: 'PageNotFound',
  props:{},
  data(){
    return {}
  },
  computed:{},
  components: {},
  methods: {}
};
</script>

<style scoped>

.container{
  margin-top: 140px;
  width: 100%;
  text-align: center;
  color: #343434
}

.container h1{
  font-size: 330px;
  margin: 0;
  font-weight: 900;
  letter-spacing: 20px;
}
.container h2{
  font-size: 50px;
}

.container a{
  text-decoration: none;
  background: #e55039aa;
  color: #fff;
  padding: 12px 24px;
  display: inline-block;
  border-radius: 25px;
  font-size: 14px;
  text-transform: uppercase;
  transition: 0.4s;
}

.container a:hover{
  background: #e55039;
}

</style>
