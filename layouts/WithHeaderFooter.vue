<template>
  <div>
    <app-header />
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
