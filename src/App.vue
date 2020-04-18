<template>
  <div id="app">
    <!-- <Header></Header> -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <MainTabBar></MainTabBar>
  </div>
</template>

<script>
import MainTabBar from "./components/tabbar/MainTabBar.vue";
// import Header from "./components/header/Header.vue";
export default {
  name: "App",
  components: {
    MainTabBar,
    // Header
  },
  created() {
    if (this.$router.path !== "/home") {
      this.$router.replace("/home");
    }
  }
};
</script>

<style lang="less">
body,
html,
#app {
  height: 100%;
  width: 100%;
}
#app {
  font-size: 1rem;
  .page {
    height: calc(100% - 49px - 64px);
    overflow: scroll;
  }
}
</style>
