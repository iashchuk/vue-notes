<template>
  <div class="message">
    <h1 class="message__text">{{text}}</h1>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
      default: "field can't be blank"
    }
  }
};
</script>

<style lang='scss' scoped>
.message {
  text-align: center;
  padding: 20px;
}

.message__text {
  color: #ba3838;
}
</style>
