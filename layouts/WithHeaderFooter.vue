<template>
  <div class="layout">
    <app-header class="app-header" />
    <Nuxt />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  name: 'WithHeaderFooter',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.app-header {
  position: fixed;
  top: 0;
  z-index: 1000;
}

.layout {
  padding-top: $app-header-height;
}
</style>
