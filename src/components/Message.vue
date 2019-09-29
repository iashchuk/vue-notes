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
      required: true
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
  min-height: 16px;
  font-size: 14px;
  line-height: 16px;
  color: #ba3838;
}
</style>
