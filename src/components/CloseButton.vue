<template>
  <button class="close" type="button" @click="onClick"></button>
</template>

<script>
export default {
  props: {
    onClick: {
      type: Function,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.close {
  position: relative;
  width: 24px;
  height: 24px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    &::before,
    &::after {
      background-color: tomato;
    }
  }
}
.close::before,
.close::after {
  position: absolute;
  right: -3px;
  width: 100%;
  height: 2px;
  content: "";
  background-color: #e4e4e4;
}
.close::before {
  transform: rotate(-45deg);
}
.close::after {
  transform: rotate(45deg);
}
</style>
