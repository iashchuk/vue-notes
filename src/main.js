import Vue from "vue";
import App from "./App.vue";
import vco from "v-click-outside";
import store from "./store/store";

import "./assets/scss/main.scss";

Vue.use(vco);

Vue.config.productionTip = false;

new Vue({
    store,
    render: h => h(App)
}).$mount("#app");
