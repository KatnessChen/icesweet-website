<template>
  <div>
    <!-- 大圖 -->
    <section-hero />
    <!-- 輪播大圖 -->
    <section class="section-slides">
      <my-swiper :banner-paths="banners" />
    </section>
    <!-- 社群連結 -->
    <!-- TODO -->
    <!-- 特色菜單 -->
    <section-feature-menu />
    <!-- 平台操作介面 -->
    <section class="section-steps">
      <h2 class="title text-center">
        簡單的 3 個使用步驟
      </h2>
      <div class="flex justify-center">
        <div
          v-for="img in 3"
          :key="img"
          class="step"
        >
          <img
            class="img"
            src="@/static/image/mobile.png"
          >
        </div>
      </div>
    </section>
    <!-- 影音區 -->
    <section class="section-video">
      <iframe
        class="video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/DWcJFNfaw9c"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </section>
    <!-- 統計數字 -->
    <section-slogan />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MySwiper from '@/components/MySwiper'
import SectionHero from '~/components/home/SectionHero'
import SectionSlogan from '~/components/home/SectionSlogan'
import SectionFeatureMenu from '@/components/home/SectionFeatureMenu'

export default {
  name: 'Index',
  components: {
    MySwiper,
    SectionHero,
    SectionFeatureMenu,
    SectionSlogan
  },
  layout: 'WithHeaderFooter',
  data () {
    return {
      banners: [
        '@/static/image/banner.png',
        '@/static/image/banner.png',
        '@/static/image/banner.png'
      ]
    }
  },
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

.section {
  &-slides {
    .banner-img,
    .swiper-container {
      height: 60vh;
    }

    .banner-img {
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
    }
  }

  &-steps {
    margin: 60px 0;

    .title {
      font-size: 34px;
      color: #5e5e5e;
      margin-bottom: 32px;
    }

    .img {
      max-width: 25vw;
    }
  }

  &-video {
    height: 60vh;

    .video {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
