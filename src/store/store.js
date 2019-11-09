import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import ui from "./modules/ui";
import notes from "./modules/notes";

export default new Vuex.Store({
    modules: {
        ui,
        notes
    }
});
