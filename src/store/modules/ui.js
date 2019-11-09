const START_LOADING = "START_LOADING";
const FINISH_LOADING = "FINISH_LOADING";
const SET_GRID = "SET_GRID";

export default {
    state: {
        title: "Notes App",
        grid: "row",
        loading: false
    },
    actions: {
        setGrid({ commit }, payload) {
            commit(SET_GRID, payload);
        },
        startLoading({ commit }) {
            commit(START_LOADING);
        },
        finishLoading({ commit }) {
            commit(FINISH_LOADING);
        }
    },
    mutations: {
        [SET_GRID](state, payload) {
            state.grid = payload;
        },
        [START_LOADING](state) {
            state.loading = true;
        },
        [FINISH_LOADING](state) {
            state.loading = false;
        }
    },
    getters: {}
};
