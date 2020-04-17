import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Axios from "axios";
import Vant from "vant";
import "vant/lib/index.css";

Vue.config.productionTip = false;
Vue.prototype.$axios = Axios;
Vue.use(Vant);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// 导入全局样式
require("./assets/css/base.css")