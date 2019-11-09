<template>
  <div v-if="loading" class="loading">
    <h2>Загрузка...</h2>
  </div>
  <div v-else class="notes">
    <Note v-for="note in notes" :key="note.id" :note="note" />
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import Note from "@/components/Note";

export default {
  components: {
    Note
  },
  created() {
    this.$store.dispatch("getNotesAsync");
  },
  computed: {
    ...mapGetters({
      notes: "getNotes"
    }),
    ...mapState({
      loading: state => state.ui.loading
    })
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

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 220px;
}
</style>
