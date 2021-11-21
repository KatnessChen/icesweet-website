<template>
  <section
    class="section-swiper"
    :style="styleInfo"
  >
    <my-swiper />
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
