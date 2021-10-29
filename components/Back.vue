<template>
  <div class="back flex items-center">
    <img
      :src="require('/static/image/arrow.png')"
      class="back-img mr-1"
      width="24"
      height="24"
      alt="返回首頁"
    >
    <span
      class="cursor-pointer"
      @click="$router.push({ name: 'index' })"
    >
      回首頁
    </span>
  </div>
</template>

<script>
export default {}
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
