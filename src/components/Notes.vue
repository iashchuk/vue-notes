<template>
  <div class="notes">
    <Note
      v-for="note in notes"
      :key="note.id"
      :grid="grid"
      :note="note"
      @editNote="editNote"
      @removeNote="removeNote(note.id)"
    />
  </div>
</template>

<script>
import Note from "@/components/Note";

export default {
  components: {
    Note
  },
  props: {
    notes: {
      type: Array,
      required: true
    },
    grid: {
      type: String,
      required: true
    }
  },
  methods: {
    removeNote(id) {
      this.$emit("removeNote", id);
    },
    editNote(title, description, id) {
      this.$emit("editNote", title, description, id);
    }
  }
};
</script>

<style lang="scss">
.notes {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 40px 0;
}
</style>
