<template>
  <div class="note" v-click-outside="closeEdit" :class="{note__full: grid === 'column'}">
    <div class="note__header">
      <input
        type="text"
        class="note__title"
        :class="{note__title_editing: isEditing}"
        :disabled="!isEditing"
        :value="note.title"
        @input="title = $event.target.value"
      />
      <EditButton class="note__edit" :isEditing="isEditing" :click="handleEditButton" />
      <CloseButton class="note__remove" :click="removeNote" />
    </div>
    <div class="note__body">
      <textarea
        class="note__description"
        :class="{note__description_editing: isEditing}"
        type="text"
        :disabled="!isEditing"
        :value="note.description"
        @input="description = $event.target.value"
      />
    </div>
    <div class="note__footer">
      <span class="note__date">{{note.date}}</span>
      <span class="note__priority">{{ priorityIcon}}</span>
    </div>
  </div>
</template>

<script>
import CloseButton from "@/components/CloseButton";
import EditButton from "@/components/EditButton";

const PriorityMap = {
  low: "!",
  medium: "!!",
  high: "!!!"
};

export default {
  components: {
    CloseButton,
    EditButton
  },
  props: {
    note: {
      type: Object,
      required: true
    },
    grid: {
      type: String,
      required: true
    }
  },
  mounted() {
    document.addEventListener("keydown", this.handleKeyDown);
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.handleKeyDown);
  },
  data() {
    return {
      isEditing: false,
      title: this.note.title,
      description: this.note.description
    };
  },
  computed: {
    priorityIcon() {
      return PriorityMap[this.note.priority];
    }
  },
  methods: {
    closeEdit() {
      this.isEditing = false;
    },
    editNote() {
      this.$emit("editNote", this.title, this.description, this.note.id);
    },
    removeNote() {
      this.$emit("removeNote");
    },
    handleKeyDown(evt) {
      if (evt.code === "Escape") {
        this.closeEdit();
      }
    },
    handleEditButton() {
      if (this.isEditing) {
        this.editNote();
      }
      this.isEditing = !this.isEditing;
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

.note__footer {
  display: flex;
  justify-content: space-between;
}

.note__title {
  margin: 20px 0;
  padding: 3px 10px;
  color: #402caf;
  font-size: 22px;
  border: 1px solid transparent;
  border-radius: 0;
  background-color: transparent;
  overflow: hidden;
  text-overflow: ellipsis;
}

.note__title_editing {
  border: 1px solid #dcdfe6;
}

.note__remove {
  font-weight: 600;
  font-size: 20px;
  margin-left: 5px;
  cursor: pointer;

  &:hover {
    color: tomato;
  }
}

.note__edit {
  margin-left: 10px;
}

.note__description {
  height: 100px;
  margin: 20px 0;
  padding: 3px 10px;
  border-radius: 0;
  border: 1px solid transparent;
  background-color: transparent;
}

.note__description_editing {
  border: 1px solid #dcdfe6;
}

.note__date {
  font-size: 14px;
  color: #999;
}

.note__priority {
  font-weight: 600;
  color: tomato;
}
</style>
