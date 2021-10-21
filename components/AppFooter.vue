<template>
  <footer class="footer flex flex-col sm:flex-row justify-center items-center">
    <span class="sm:mr-2">Copyright © {{ year }} 冰山撞甜心</span>
    <span>All Rights Reserved.</span>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  computed: {
    year () {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.footer {
  background-color: $theme-primary;
  font-size: 14px;
  height: $app-footer-height;
  color: $white;
}
</style>
