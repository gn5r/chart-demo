import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/sass/chart-demo.sass";
import "vue-loading-overlay/dist/vue-loading.css";
import VLoading from "vue-loading-overlay";

Vue.config.productionTip = false;

Vue.component("VLoading", VLoading);

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
