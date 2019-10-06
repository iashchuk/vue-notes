<template>
  <div class="app wrapper">
    <div class="app__content wrapper-content">
      <section class="app__section">
        <div class="app__container container">
          <Message :text="message" />
          <NewNote :note="note" @addNote="addNote" />
          <div class="app__header">
            <h1 class="app__title">{{title}}</h1>
            <Search
              placeholder="Find your note"
              :searchTerm="searchTerm"
              @reset="resetSearch"
              @change="searchTerm = $event"
            />
            <Priority
              name="priorityFilter"
              :activeValue="priorityFilter"
              :values="priorityFilters"
              :setValue="setFilter"
            />
            <GridButtons :grid="grid" :setGrid="setGrid" />
          </div>
          <Notes :notes="filteredNotes" :grid="grid" @removeNote="removeNote" @editNote="editNote" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Message from "@/components/Message";
import NewNote from "@/components/NewNote";
import Notes from "@/components/Notes";
import Search from "@/components/Search";
import GridButtons from "@/components/GridButtons";
import Priority from "@/components/Priority";

import data from "@/mocks";
import { getUniqueId, replaceElement, searchNotes } from "@/helpers";

export default {
  components: {
    Message,
    NewNote,
    Notes,
    Search,
    Priority,
    GridButtons
  },

  data() {
    return {
      title: "Notes App",
      searchTerm: "",
      priorityFilter: "all",
      priorityFilters: ["all", "low", "medium", "high"],
      message: "",
      grid: "row",
      note: {
        title: "",
        description: "",
        priority: "medium"
      },
      notes: data
    };
  },
  computed: {
    filteredNotes() {
      const filteredNotes =
        this.priorityFilter === "all"
          ? this.notes
          : this.notes.filter(item => item.priority === this.priorityFilter);
      const searchedNotes = searchNotes(filteredNotes, this.searchTerm);
      return searchedNotes;
    }
  },
  methods: {
    addNote(note) {
      if (!note.title) {
        this.message = "title can't be blanck!";
        return;
      }

      const notesTitles = this.notes.map(item => item.title);

      if (notesTitles.includes(note.title)) {
        this.message = "note is exist";
        return;
      }

      const newNote = {
        ...note,
        id: getUniqueId(),
        date: new Date(Date.now()).toLocaleString()
      };

      this.notes = [...this.notes, newNote];
      this.resetNewNoteInfo();
      this.resetErrorMessage();
    },
    removeNote(id) {
      this.notes = this.notes.filter(item => item.id !== id);
    },
    setGrid(type) {
      this.grid = type;
    },
    setFilter(type) {
      this.priorityFilter = type;
    },
    resetNewNoteInfo() {
      this.note = { title: "", description: "", priority: "medium" };
    },
    resetSearch() {
      this.searchTerm = "";
    },
    resetErrorMessage() {
      this.message = "";
    },
    editNote(title, description, id) {
      const noteForUpdate = this.notes.find(item => item.id === id);

      if (!noteForUpdate) {
        return;
      }

      const updatedNote = {
        ...noteForUpdate,
        title,
        description,
        date: new Date(Date.now()).toLocaleString()
      };
      this.notes = replaceElement(updatedNote, this.notes);
    }
  }
};
</script>

<style lang="scss">
.app__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
