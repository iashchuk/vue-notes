<template>
  <div class="search">
    <input v-model="term" class="search__input" type="text" :placeholder="placeholder" />
    <CloseButton v-if="term" class="search__reset" :click="resetTerm" />
  </div>
</template>

<script>
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    CloseButton
  },
  props: {
    placeholder: {
      type: String,
      default: "Search"
    }
  },
  data() {
    return {
      term: ""
    };
  },
  watch: {
    term(value) {
      this.$emit("change", value);
    }
  },
  methods: {
    resetTerm() {
      this.term = "";
    }
  }
};
</script>

<style scoped>
.search {
  position: relative;
}
.search__input {
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

.search__reset {
  position: absolute;
  top: 19px;
  right: 16px;
  width: 15px;
  height: 15px;
}
</style>


