<template>
  <header class="header">
    <div class="px-4 flex justify-between items-center">
      <logo
        with-text
        :logo-image-height="44"
        class="cursor-pointer"
        @click.native="onClickLogo"
      />
      <!-- mobile -->
      <template v-if="isTabletOrBelow">
        <ul
          class="mobile-menu px-4"
          :class="{ 'is-active': isShowMobileMenu }"
        >
          <nuxt-link
            v-for="link of navItems"
            :key="link.routeName"
            :to="{ name: link.routeName }"
            class="link"
            @click.native="isShowMobileMenu = false"
          >
            {{ link.label }}
          </nuxt-link>
        </ul>
        <app-ham
          :is-active="isShowMobileMenu"
          @click.native="isShowMobileMenu = !isShowMobileMenu"
        />
      </template>
      <!-- desktop -->
      <ul
        v-else
        class="flex items-center"
      >
        <nuxt-link
          v-for="link of navItems"
          :key="link.routeName"
          :to="{ name: link.routeName }"
          class="ml-6"
        >
          {{ link.label }}
        </nuxt-link>
      </ul>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import Logo from './Logo.vue'

export default Vue.extend({
  components: {
    Logo
  },
  data () {
    return {
      isShowMobileMenu: false
    }
  },
  computed: {
    ...mapGetters(['isTabletOrBelow']),
    navItems () {
      return [
        { routeName: 'term', label: '服務條款' },
        { routeName: 'policy', label: '隱私權政策' },
        { routeName: 'faq', label: '常見問題' },
        { routeName: 'about', label: '關於我們' },
        { routeName: 'join', label: '我要當貴妃' }
      ]
    }
  },
  methods: {
    onClickLogo () {
      this.$router.push('/')
      if (this.isTabletOrBelow && this.isShowMobileMenu) {
        this.isShowMobileMenu = false
      }
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-20px);
    transform: translateX(-20px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

.header {
  background-color: $theme-primary-light;
  color: $white;
  width: 100%;
  padding: $app-header-py;
  border-bottom: 1px solid rgba(255, 255, 255, 0.102);

  .mobile-menu {
    display: none;
    flex-direction: column;
    align-items: center;
    top: $app-header-height + 1px;
    left: 0;
    width: 100%;
    position: fixed;
    background-color: $theme-primary-light;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    &.is-active {
      animation-name: fadeInLeft;
      animation-duration: 1s;
      display: block;
    }

    .link {
      cursor: pointer;
      padding: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #fff;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
  }
}
</style>
