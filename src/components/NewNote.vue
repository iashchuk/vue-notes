<template>
  <div class="new-note">
    <label for="new-input">Title</label>
    <input v-model="note.title" id="new-input" type="text" />
    <label for="new-textarea">Description</label>
    <textarea v-model="note.descr" id="new-textarea"></textarea>
    <button class="btn btnPrimary" @click="addNote">New note</button>
  </div>
</template>

<script>
export default {
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  methods: {
    addNote() {
      this.$emit("addNote", this.note);
    }
  }
};
</script>

<style lang='scss' scoped>
.new-note {
  margin-bottom: 30px;
  text-align: center;
}
</style>
