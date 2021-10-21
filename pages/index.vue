<template>
  <div class="home-page">
    <!-- 大圖 -->
    <section-hero />
    <!-- 輪播大圖 -->
    <section-swiper />
    <!-- 社群連結 -->
    <section-media-links />
    <!-- 特色菜單 -->
    <section-feature-menu />
    <!-- 平台操作介面 -->
    <section-interface-intro />
    <!-- 影音區 -->
    <section-video />
    <!-- 統計數字 -->
    <section-slogan />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SectionHero from '@/components/home/SectionHero'
import SectionSwiper from '@/components/home/SectionSwiper'
import SectionMediaLinks from '@/components/home/SectionMediaLinks'
import SectionFeatureMenu from '@/components/home/SectionFeatureMenu'
import SectionInterfaceIntro from '@/components/home/SectionInterfaceIntro'
import SectionSlogan from '@/components/home/SectionSlogan'
import SectionVideo from '@/components/home/SectionVideo'

export default {
  name: 'Index',
  components: {
    SectionHero,
    SectionSwiper,
    SectionMediaLinks,
    SectionFeatureMenu,
    SectionInterfaceIntro,
    SectionSlogan,
    SectionVideo
  },
  layout: 'WithHeaderFooter',
  head: {
    title: '冰山撞甜心 - 官網'
  },
  computed: {
    ...mapState(['deviceWidth'])
  },
  mounted () {
    this.$store.commit('setDeviceWidth')
    window.addEventListener('resize', () => {
      this.$store.commit('setDeviceWidth')
    })
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
