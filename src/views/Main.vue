<template>
  <div id="main">
    <Header></Header>
    <div class="flex">
      <SideBar></SideBar>

      <Personal v-show="itemNav == 2"/>
      <Clients v-show="itemNav == 5" />
      <router-view/>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Personal from "@/components/Personal";
import Clients from "@/components/Clients";

export default {
  name: "Main",
  components: {
    SideBar,
    Header,
    Personal,
    Clients,
  },
  computed:{
    itemNav(){
      return this.$store.state.navItem
    }
  },
}
</script>
<style lang="scss">
#main {
  font-family: Proxima Nova, sans-serif;
  font-style: normal;
  font-weight: normal;
}
a{
  text-decoration: none !important;
}
.flex{
  display: flex;
}
</style>
