<template>
<div style="margin-top:56px"> 
  <b-container fluid>
            <b-row>
                <b-col class="userSideBar" xl="2" lg="4" md="5" sm="12">
                    <SidebarUser />
                </b-col>
                <b-col class="userRouterLink"  xl="9" lg="8" md="7" sm="12">
                    <router-view />
                </b-col>
            </b-row>
        </b-container>
  </div>
</template>

<script>
import SidebarUser from '@/components/SidebarUser'
export default {
  name: 'Profile',
  components: {
      SidebarUser
  },
  methods: {},
  props:{},
  computed:{},
  data(){
    return {}
  }
}
</script>

<style>
.userSideBar{
    position: fixed;
    background-color: red;
    height: 100vh;
}
</style>