<template>
  <div class="maintenance-page text-secondary">
    <logo :logo-image-height="48" />
    <span class="mt-4 text-white">Sorry，網站維護中！請稍後再訪</span>
  </div>
</template>

<script>
import Logo from '@/components/Logo'

export default {
  name: 'Maintenance',
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.maintenance-page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $theme-primary;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
