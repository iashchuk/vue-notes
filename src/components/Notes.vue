<template>
  <div class="notes">
    <Note
      v-for="(note, index) in notes"
      :key="index"
      :grid="grid"
      :title="note.title"
      :descr="note.descr"
      :date="note.date"
      @removeNote="removeNote(index)"
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
