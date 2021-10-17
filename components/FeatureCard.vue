<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <div v-html="text" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
      required: true
    },
    text: {
      type: String,
      default: '這是一串很長很長的話',
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  background-color: #fff;
  padding: 40px;
}

</style>
