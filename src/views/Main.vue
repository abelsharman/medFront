<template>
  <div id="main">
    <Header></Header>
    <div class="flex">
      <SideBar></SideBar>
      <router-view/>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
export default {
  name: "Main",
  components: {
    SideBar,
    Header,
  }
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
