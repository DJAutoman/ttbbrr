<template>
  <div class="header" v-show="isfoshow">
    <van-icon class="back" v-show="isshow" size="20" name="arrow-left" @click="$router.go(-1)" />
    <div class="header-text" v-if="issan">{{title}}</div>
    <div class="header-text" v-else>{{titles}}</div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isshow: false,
      isfoshow: true,
      title: "首页",
      titles: "",
      issan: true
    };
  },
  watch: {
    $route(route) {
      this.title = route.meta.title;
      let routes = ["Cart", "Home", "Profile"];
      // 匹配到 routes 裡面的就不顯示返回按鈕
      if (routes.includes(route.name)) {
        this.isshow = false;
      } else {
        this.isshow = true;
      }
      // 是否隐藏头部
      if (route.name === "Profile") {
        this.isfoshow = false;
      } else {
        this.isfoshow = true;
      }
      // 设置标题
      // if (route.params.title) {
      //   this.titles = route.params.title;
      //   this.issan = false;
      // } else {
      //   this.issan = true;
      // }
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  height: 64px;
  text-align: center;
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  background: #f6f6f6;
  box-shadow: 0px 1px 1px rgba(100, 100, 100, 0.3);
  .back {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 1rem;
  }
  .header-text {
    height: 64px;
    text-align: center;
    line-height: 64px;
    font-size: 2rem;
    font-weight: bold;
    background-color: aquamarine;
  }
}
</style>