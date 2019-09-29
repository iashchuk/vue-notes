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
              :value="searchTerm"
              placeholder="Find your note"
              @onChange="searchTerm = $event"
            />
            <GridButtons :grid="grid" @setGrid="setGrid" />
          </div>
          <Notes :notes="filteredNotes" :grid="grid" @removeNote="removeNote" />
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
import data from "@/mocks";
import { searchNotes } from "@/helpers/searchNotes";

export default {
  components: {
    Message,
    NewNote,
    Notes,
    Search,
    GridButtons
  },

  data() {
    return {
      title: "Notes App",
      searchTerm: "",
      message: "",
      grid: "row",
      note: {
        title: "",
        description: ""
      },
      notes: data
    };
  },
  computed: {
    filteredNotes() {
      return searchNotes(this.notes, this.searchTerm);
    }
  },
  methods: {
    addNote() {
      const { title, description } = this.note;

      if (!title) {
        this.message = "title can't be blanck!";
        return;
      }

      const newNote = {
        title,
        description,
        date: new Date(Date.now()).toLocaleString()
      };

      this.message = "";
      this.notes = [...this.notes, newNote];
      this.note = { title: "", description: "" };
    },
    removeNote(id) {
      this.notes = this.notes.filter((item, index) => index !== id);
    },
    setGrid(type) {
      this.grid = type;
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
