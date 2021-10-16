<template>
  <div>
    <app-header />
    <span
      class="cursor-pointer"
      @click="$router.push({ name: 'index' })"
    >
      回首頁
    </span>
    <Nuxt />
    <app-footer />
  </div>
</template>

<script>
export default {
  name: 'WithHeaderFooterBack'
}
</script>
