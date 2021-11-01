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
  head () {
    return {
      titleTemplate: '%s - 官網',
      meta: [
        { hid: '冰山撞甜心 icesweet - 官網', name: '首頁', content: '冰山撞甜心，嚴選甜心貴妃。用愛生活，讓世界美好；用心陪伴，讓你我幸福，現在就打開冰山撞甜心與貴妃談心，冰山撞甜心隨時隨地等候你，等你來開啟與貴妃的情緣，讓貴妃的甜蜜爆擊來溫暖你我的心！' },
        { property: 'og:title', content: '冰山撞甜心 icesweet - 官網' },
        { property: 'og:description', content: '冰山撞甜心，嚴選甜心貴妃。用愛生活，讓世界美好；用心陪伴，讓你我幸福，現在就打開冰山撞甜心與貴妃談心，冰山撞甜心隨時隨地等候你，等你來開啟與貴妃的情緣，讓貴妃的甜蜜爆擊來溫暖你我的心！' },
        { property: 'og:url', content: this.url.websiteUrl },
        { property: 'og:image', content: require('~/static/image/logo.png') }
      ]
    }
  },
  computed: {
    ...mapState(['url']),
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
