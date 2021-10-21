<template>
  <section
    class="section-swiper"
    :style="styleInfo"
  >
    <my-swiper :banner-paths="banners" />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import MySwiper from '@/components/MySwiper'

export default {
  name: 'SectionSwiper',
  components: {
    MySwiper
  },
  computed: {
    ...mapGetters(['isMobile']),
    banners () {
      return [
        '@/static/image/banner.png',
        '@/static/image/banner.png',
        '@/static/image/banner.png'
      ]
    },
    styleInfo () {
      return this.isMobile
        ? { height: '100vh' }
        : { height: '60vh' }
    }
  }
}
</script>

<style lang="scss" scoped>
.section-swiper {
  .banner-img {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
}
</style>
