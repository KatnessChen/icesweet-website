<template>
  <div
    class="back flex items-center cursor-pointer"
    @click="backCallback"
  >
    <img
      :src="require('/static/image/arrow.png')"
      class="back-img mr-1"
      width="24"
      height="24"
      :alt="backLabel"
    >
    <span>
      {{ backLabel }}
    </span>
  </div>
</template>

<script>

export default {
  name: 'Back',
  props: {
    backLabel: {
      type: String,
      default: '回首頁'
    },
    backCallback: {
      type: Function,
      default: () => {},
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.back {
  color: $theme-primary-deep;
  font-size: 18px;

  &-img {
    width: 24px;
  }
}
</style>
