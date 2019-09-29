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
    <button class="new__button btn btnPrimary" @click="addNote">New note</button>
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
.new {
  margin-bottom: 30px;
  text-align: center;
}
</style>
