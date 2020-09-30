import Vue from "vue";
import App from "./App";
import router from "./router/index.js";
import { RouterMount } from "uni-simple-router";
import routerLink from '../node_modules/uni-simple-router/component/router-link.vue'
Vue.component('router-link',routerLink)
Vue.config.productionTip = false;
import ajax from '@/util/ajax'
Vue.prototype.$ajax = ajax

App.mpType = "app";
import uView from "uview-ui";
Vue.use(uView);

const app = new Vue({
  ...App
});
// #ifdef H5
RouterMount(app, "#app");
// #endif

// #ifndef H5
app.$mount();
// #endif

