import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

Vue.config.productionTip = false;

const base = axios.create({
  baseURL: "https://api.github.com/user",
  headers: {
    Authorization: "token 9db183b515adfe5ce029ed421e1ac8d5ad9f4b23"
  }
});
Vue.prototype.$http = base;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
