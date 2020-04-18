<template>
  <tab-bar>
    <!-- path 绑定路径  activeColor 绑定文字颜色 -->
    <tab-bar-item path="/home" activeColor="red">
      <img slot="item-icon" src="../../assets/img/tabbar/主页 (2).png" alt />
      <img slot="item-icon-active" src="../../assets/img/tabbar/主页 (3).png" alt />
      <div slot="item-text">主页</div>
    </tab-bar-item>

    <tab-bar-item path="/category" activeColor="blue">
      <img slot="item-icon" src="../../assets/img/tabbar/分类 (2).png" alt />
      <img slot="item-icon-active" src="../../assets/img/tabbar/分类 (3).png" alt />
      <div slot="item-text">分类</div>
    </tab-bar-item>

    <tab-bar-item path="/profile" activeColor="orange">
      <img slot="item-icon" src="../../assets/img/tabbar/我的.png" alt />
      <img slot="item-icon-active" src="../../assets/img/tabbar/我的 (1).png" alt />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "./TabBar.vue";
import TabBarItem from "../TabBarItem.vue";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>