<template>
  <div class="app wrapper">
    <div class="app__content wrapper-content">
      <section class="app__section">
        <div class="app__container container">
          <NewNote />
          <div class="app__header">
            <h1 class="app__title">{{title}}</h1>
            <Search placeholder="Find your note" @change="setSearchFilter" />
            <Priority
              name="priorityFilter"
              :activeValue="priorityFilter"
              :values="priorityFilters"
              :setValue="setPriorityFilter"
            />
            <GridButtons />
          </div>
          <p class="app__text">
            Quanity of notes:
            <span
              class="app__count"
            >{{notesQuantity.filtered}}/ {{notesQuantity.common}}</span>
          </p>
          <Notes />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

import NewNote from "@/components/NewNote";
import Notes from "@/components/Notes";
import Search from "@/components/Search";
import GridButtons from "@/components/GridButtons";
import Priority from "@/components/Priority";
import { PriorityFilters } from "@/helpers";

export default {
  components: {
    NewNote,
    Notes,
    Search,
    Priority,
    GridButtons
  },

  data() {
    return {
      priorityFilters: Object.values(PriorityFilters)
    };
  },
  computed: {
    ...mapState({
      title: state => state.ui.title,
      priorityFilter: state => state.notes.priorityFilter
    }),
    ...mapGetters({
      notesQuantity: "getNotesQuantity"
    })
  },
  methods: {
    ...mapActions(["setPriorityFilter", "setSearchFilter"])
  }
};
</script>

<style lang="scss">
.app__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.app__title {
  font-weight: 600;
}

.app__text {
  padding-top: 25px;
  padding-bottom: 10px;
  text-align: right;
}

.app__count {
  display: inline-block;
  min-width: 50px;
}
</style>
