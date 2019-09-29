<template>
  <div class="new">
    <div class="new__field">
      <label for="new-input">Title</label>
      <input v-model="note.title" id="new-input" type="text" />
    </div>
    <div class="new__field">
      <label for="new-textarea">Description</label>
      <textarea v-model="note.description" id="new-textarea"></textarea>
    </div>
    <Priority
      class="new__priority"
      name="priority"
      :activeValue="priority"
      :values="priorityValues"
      :setValue="setPriority"
    />
    <button class="new__button btn btnPrimary" @click="addNote">New note</button>
  </div>
</template>

<script>
import Priority from "@/components/Priority";

export default {
  components: {
    Priority
  },
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      priority: this.note.priority,
      priorityValues: ["low", "medium", "high"]
    };
  },
  methods: {
    addNote() {
      this.$emit("addNote", { ...this.note, priority: this.priority });
      this.priority = "medium";
    },
    setPriority(value) {
      this.priority = value;
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
