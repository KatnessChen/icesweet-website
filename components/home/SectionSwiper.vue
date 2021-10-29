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
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: '/assets/styles/swiper.css'
      }
    ]
  },
  computed: {
    ...mapGetters(['isMobile']),
    banners () {
      return this.isMobile
        ? [
            'image-sm-2.webp',
            'image-sm-3.webp',
            'image-sm-1.webp'
          ]
        : [
            'image-2.webp',
            'image-3.webp',
            'image-1.webp'
          ]
    },
    styleInfo () {
      return this.isMobile
        ? { height: '115vw' }
        : { height: '34.73vw' }
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
