import Vue from "vue";
import App from "./App.vue";
import vco from "v-click-outside";

import "./assets/scss/main.scss";

Vue.use(vco);

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount("#app");
