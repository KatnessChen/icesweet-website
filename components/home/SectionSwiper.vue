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
            'image-sm-1.png',
            'image-sm-2.png',
            'image-sm-3.png'
          ]
        : [
            'image-1.png',
            'image-2.png',
            'image-3.png'
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
