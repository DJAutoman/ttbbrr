import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home.vue";
import Category from "../views/Category/Category.vue";
import Cart from "../views/Cart/Cart.vue";
import Profile from "../views/Profile/Profile.vue";

Vue.use(VueRouter);

const routes = [
  // 重定向
  // {
  //   path: "",
  //   redirect: "/home"
  // },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      title: "首页"
    }
  },
  {
    path: "/category",
    name: "Category",
    component: Category,
    meta: {
      title: "分类"
    }
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
    meta: {
      title: "购物车"
    }
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      title: "我的"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
// 全局守卫
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router