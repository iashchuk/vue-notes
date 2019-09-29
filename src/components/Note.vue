<template>
  <div class="note" :class="{note__full: grid === 'column'}">
    <div class="note__header">
      <p class="note__title">{{title}}</p>
      <span class="note__remove" @click="removeNote">X</span>
    </div>
    <div class="note__body">
      <p class="note__description">{{description}}</p>
      <span class="note__date">{{date}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    grid: {
      type: String,
      required: true
    }
  },
  methods: {
    removeNote() {
      this.$emit("removeNote");
    }
  }
};
</script>

<style lang="scss">
.note {
  width: 49%;
  padding: 18px 20px;
  margin-bottom: 20px;
  background-color: #fff;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.02);

  &:hover {
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.04);
    transform: translate(0, -6px);
    transition-delay: 0s;
    cursor: pointer;
  }
}

.note__full {
  width: 100%;
  text-align: center;

  .note__header {
    justify-content: center;
  }
}

.note__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.note__title {
  margin: 20px 0;
  color: #402caf;
  font-size: 22px;
}

.note__remove {
  font-weight: 600;
  font-size: 20px;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    color: tomato;
  }
}

.note__description {
  margin: 20px 0;
}

.note__date {
  font-size: 14px;
  color: #999;
}
</style>
