<template>
  <div class="grid">
    <button
      :class="{grid__button_column_active: grid === 'column'}"
      @click="setGrid('column')"
      class="grid__button grid__button_column"
    />
    <button
      :class="{grid__button_row_active: grid === 'row'}"
      @click="setGrid('row')"
      class="grid__button grid__button_row"
    />
  </div>
</template>

<script>
export default {
  props: {
    grid: {
      type: String,
      required: true
    }
  },
  methods: {
    setGrid(type) {
      this.$emit("setGrid", type);
    }
  }
};
</script>

<style lang="scss">
.grid__button {
  width: 24px;
  height: 24px;
  margin-left: 10px;
  padding: 0;
  border: none;
  background-color: transparent;
  background-size: 24px;
  background-position: center;
  cursor: pointer;
}

.grid__button_column {
  background-image: url("../assets/img/icon_column.svg");
}

.grid__button_row {
  background-image: url("../assets/img/icon_row.svg");
}

.grid__button_column_active {
  background-image: url("../assets/img/icon_column_active.svg");
}

.grid__button_row_active {
  background-image: url("../assets/img/icon_row_active.svg");
}
</style>
