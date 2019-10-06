<template>
  <div class="edit" @click="click">
    <button v-if="isEditing" class="edit__button edit__button_save" type="button">save</button>
    <button v-else class="edit__button edit__button_active" type="button">edit</button>
  </div>
</template>

<script>
export default {
  props: {
    isEditing: {
      type: Boolean,
      required: true
    },
    click: {
      type: Function
    }
  }
};
</script>

<style lang="scss" scoped>
.edit__button {
  width: 40px;
  padding: 3px 2px;
  border: none;
  background-color: transparent;
  background-size: cover;
  background-position: center;
  font-size: 12px;
  font-weight: 400;
  border: 1px solid #e4e4e4;
  border-radius: 5px;
  color: #e4e4e4;
  transition: 0.3s;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    border: 1px solid #454545;
    color: #454545;
    transition: 0.3s;
  }
}

.edit__button_save {
  border: 1px solid #494ce8;
  color: #494ce8;

  &:hover {
    border: 1px solid #494ce8;
    color: #494ce8;
  }
}
</style>
