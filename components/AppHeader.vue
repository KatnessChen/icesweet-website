<template>
  <header class="header">
    <div class="container m-auto flex justify-between">
      <logo
        with-text
        :logo-image-height="60"
        class="cursor-pointer"
        @click.native="$router.push('/')"
      />
      <ul class="flex items-center">
        <nuxt-link
          v-for="link of navItems"
          :key="link.routeName"
          :to="{ name: link.routeName }"
          class="ml-2"
        >
          {{ link.label }}
        </nuxt-link>
      </ul>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from './Logo.vue'

export default Vue.extend({
  components: {
    Logo
  },
  data () {
    return {
      navItems: [
        { routeName: 'term', label: '服務條款' },
        { routeName: 'faq', label: '常見問題' },
        { routeName: 'about', label: '關於我們' },
        { routeName: 'join', label: '我要當貴妃' }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.header {
  background-color: $theme-primary;
  color: $white;
  width: 100%;
  padding: $app-header-py;
}
</style>
