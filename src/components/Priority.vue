<template>
  <div class="priority">
    <div v-for="(value, index) in values" :key="index" class="priority__field">
      <input
        class="priority__input"
        type="radio"
        :name="name"
        :value="value"
        :id="`${name}-${value}`"
        :checked="activeValue === value"
        @click="setValue(value)"
      />
      <label class="priority__label" :for="`${name}-${value}`">{{value}}</label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    },
    values: {
      type: Array
    },
    activeValue: {
      type: String,
      required: true
    },
    setValue: {
      type: Function
    }
  }
};
</script>

<style lang='scss' scoped>
.priority {
  display: flex;
  justify-content: center;
  box-sizing: border-box;
}

.priority__field {
  display: flex;
  flex-grow: 1;

  &:not(:last-child) {
    .priority__label {
      border-right: 1px solid #ccc;
    }
  }

  &:first-child {
    .priority__label {
      border: 1px solid #ccc;
      border-top-left-radius: 14px;
      border-bottom-left-radius: 14px;
    }
  }

  &:last-child {
    .priority__label {
      border: 1px solid #ccc;
      border-left: 0;
      border-top-right-radius: 14px;
      border-bottom-right-radius: 14px;
    }
  }
}

.priority__label {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  margin: 0;
  padding: 0 10px;
  text-transform: capitalize;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  cursor: pointer;

  &:hover {
    color: #494ce8;
  }
}

.priority__input {
  display: none;

  &:checked + .priority__label {
    border-color: #494ce8;
    background-color: #494ce8;
    color: #fff;
    cursor: auto;
  }
}
</style>
