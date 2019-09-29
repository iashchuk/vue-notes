<template>
  <input class="search" type="text" :placeholder="placeholder" v-model="term" />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: "Search"
    }
  },
  data() {
    return {
      term: this.value
    };
  },
  watch: {
    term(event) {
      this.$emit("onChange", event);
    }
  }
};
</script>

<style scoped>
.search {
  width: 400px;
  padding: 16px 16px 16px 56px;
  margin-bottom: 0px;
  border-radius: 30px;
  color: #909399;
  font-size: 16px;
  background-size: 24px;
  background-position: 20px center;
  background-image: url("../assets/img/icon_search.svg");
  background-repeat: no-repeat;
}
</style>


