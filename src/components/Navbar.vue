<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" class="navbarclass">
      <b-navbar-brand href="/">EvaShop by Adidas</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav v-for="(link,i) in menu" :key="i">
          <!--<router-link :to="link.path">{{link.label}}</router-link>  -->
        <b-nav-item :to="link.path">{{link.label}}</b-nav-item>
         
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Login In</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "navbar",
  components: {},
  methods: {},
  props: {},
  computed: {},
  data() {
    return {
      menu: [
        {
          label: "Home",
          path: "/"
        },
        {
          label: "List",
          path: "/list"
        },
        {
          label: "Cart",
          path: "/cart"
        }
      ]
    };
  }
};
</script>

<style>

</style>