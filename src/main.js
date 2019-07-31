import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

Vue.config.productionTip = false;

const base = axios.create({
  baseURL: "https://api.github.com/user",
  headers: {
    Authorization: process.env.VUE_APP_Token
  }
});
Vue.prototype.$http = base;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
