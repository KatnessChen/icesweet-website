<template>
  <div class="home-page">
    <!-- 大圖 -->
    <section-hero />
    <!-- 輪播大圖 -->
    <section-swiper />
    <!-- 社群連結 -->
    <section-media-links />
    <!-- 特色菜單 -->
    <section-feature-menu ref="observedObject" />
    <observer
      :options="observerOptions"
      @intersect="intersect"
    />
    <template v-if="loadRestPage">
      <!-- 平台操作介面 -->
      <section-interface-intro />
      <!-- 影音區 -->
      <section-video />
      <!-- 統計數字 -->
      <!-- <section-slogan /> -->
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SectionHero from '@/components/home/SectionHero'
import SectionSwiper from '@/components/home/SectionSwiper'
import SectionMediaLinks from '@/components/home/SectionMediaLinks'
import SectionFeatureMenu from '@/components/home/SectionFeatureMenu'
import SectionInterfaceIntro from '@/components/home/SectionInterfaceIntro'
import SectionVideo from '@/components/home/SectionVideo'
import Observer from '@/components/Observer'

export default {
  name: 'Index',
  components: {
    SectionHero,
    SectionSwiper,
    SectionMediaLinks,
    SectionFeatureMenu,
    SectionInterfaceIntro,
    SectionVideo,
    Observer
  },
  layout: 'WithHeaderFooter',
  data () {
    return {
      loadRestPage: false
    }
  },
  head: {
    title: '冰山撞甜心 - 官網',
    meta: [
      { hid: '冰山撞甜心 - 官方行銷宣傳網站', name: '首頁', content: '冰山撞甜心是最新的社交聊天平台，內有眾多經過嚴選的優質貴妃與您專屬一對一聊天，未來並會舉辦實體粉絲見面會，歡迎使用推薦碼立即註冊' }
    ]
  },
  computed: {
    observerOptions () {
      return {
        root: this.$refs.observedObject,
        rootMargin: '0px',
        threshold: 0
      }
    }
  },
  mounted () {
    const invite = this.$route.query.invite
    if (invite) {
      localStorage.setItem('invite', invite)
    }
  },
  methods: {
    intersect () {
      this.loadRestPage = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.home-page {
  width: 100vw;
  overflow: hidden;
}
</style>
