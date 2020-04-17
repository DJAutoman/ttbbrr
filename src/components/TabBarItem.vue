<template>
  <div class="tab_bar_item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  // 传值：路径 & 字体样式
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "yellow"
    }
  },
  data() {
    return {
      // isActive:false,
    };
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    }
  },
  computed: {
    // 动态绑定路由是否为当前页面路径
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    // 动态绑定字体样式
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  }
};
</script>

<style lang="less" scoped>
.tab_bar_item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
  img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
  // .active{
  //   color: red;
  // }
}
</style>