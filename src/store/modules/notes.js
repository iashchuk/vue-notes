import api from "../../api";
import { replaceElement, searchNotes, PriorityFilters } from "@/helpers";

const FILL_NOTES = "FILL_NOTES";
const ADD_NOTE = "ADD_NOTE";
const REMOVE_NOTE = "REMOVE_NOTE";
const UPDATE_NOTE = "UPDATE_NOTE";
const SET_SEARCH_FILTER = "SET_SEARCH_FILTER";
const SET_PRIORITY_FILTER = "SET_PRIORITY_FILTER";

export default {
    state: {
        notes: [],
        searchFilter: "",
        priorityFilter: PriorityFilters.ALL
    },
    actions: {
        async getNotesAsync({ dispatch, commit }) {
            try {
                dispatch("startLoading");
                dispatch("fillNotes", await api.notes());
            } catch (error) {
                alert(`Failed to load notes: ${error.message}`);
            } finally {
                dispatch("finishLoading");
            }
        },
        fillNotes({ commit }, payload) {
            commit(FILL_NOTES, payload);
        },
        addNote({ commit }, payload) {
            commit(ADD_NOTE, payload);
        },
        removeNote({ commit }, payload) {
            commit(REMOVE_NOTE, payload);
        },
        updateNote({ commit }, payload) {
            commit(UPDATE_NOTE, payload);
        },
        setSearchFilter({ commit }, payload) {
            commit(SET_SEARCH_FILTER, payload);
        },
        setPriorityFilter({ commit }, payload) {
            commit(SET_PRIORITY_FILTER, payload);
        }
    },
    mutations: {
        [FILL_NOTES](state, payload) {
            state.notes = payload;
        },
        [ADD_NOTE](state, payload) {
            state.notes = [...state.notes, payload];
        },
        [REMOVE_NOTE](state, payload) {
            state.notes = state.notes.filter(item => item.id !== payload);
        },
        [UPDATE_NOTE](state, payload) {
            state.notes = replaceElement(state.notes, payload);
        },
        [SET_SEARCH_FILTER](state, payload) {
            state.searchFilter = payload;
        },
        [SET_PRIORITY_FILTER](state, payload) {
            state.priorityFilter = payload;
        }
    },
    getters: {
        getNotes(state) {
            const filteredNotes =
                state.priorityFilter === PriorityFilters.ALL
                    ? state.notes
                    : state.notes.filter(item => item.priority === state.priorityFilter);

            const searchedNotes = searchNotes(filteredNotes, state.searchFilter);

            return searchedNotes;
        }
    }
};
