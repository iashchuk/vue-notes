<template>
  <div class="new">
    <Message :text="errorMessage" />
    <div class="new__field">
      <label for="new-input">Title</label>
      <input v-model="title" id="new-input" type="text" />
    </div>
    <div class="new__field">
      <label for="new-textarea">Description</label>
      <textarea v-model="description" id="new-textarea"></textarea>
    </div>
    <Priority
      class="new__priority"
      name="priority"
      :activeValue="priority"
      :values="priorityValues"
      :setValue="setPriority"
    />
    <button class="new__button btn btnPrimary" @click="createNote">New note</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Priority from "@/components/Priority";
import Message from "@/components/Message";
import { getUniqueId, PriorityFilters } from "@/helpers";

export default {
  components: {
    Message,
    Priority
  },
  data() {
    return {
      title: "",
      description: "",
      priority: PriorityFilters.MEDIUM,
      priorityValues: [
        PriorityFilters.LOW,
        PriorityFilters.MEDIUM,
        PriorityFilters.HIGH
      ],
      errorMessage: ""
    };
  },
  methods: {
    ...mapActions(["addNote"]),
    createNote() {
      if (!this.title) {
        this.errorMessage = "title can't be blanck!";
        return;
      }

      if (!this.description) {
        this.errorMessage = "description can't be blanck!";
        return;
      }

      const newNote = {
        id: getUniqueId(),
        title: this.title,
        description: this.description,
        priority: this.priority,
        date: new Date(Date.now()).toLocaleString()
      };

      this.addNote(newNote);
      this.resetNewNoteInfo();
      this.resetErrorMessage();
    },
    setPriority(value) {
      this.priority = value;
    },
    resetNewNoteInfo() {
      this.title = "";
      this.description = "";
      this.priority = PriorityFilters.MEDIUM;
    },
    resetErrorMessage() {
      this.errorMessage = "";
    }
  }
};
</script>

<style lang='scss' scoped>
.new {
  margin-bottom: 30px;
  text-align: center;
}

.new__priority {
  width: 100%;
  margin-bottom: 30px;
  height: 35px;

  label {
    padding: 10px 0;
  }
}
</style>
