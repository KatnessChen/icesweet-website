<template>
  <swiper
    ref="mySwiper"
    class="swiper"
    :options="swiperOption"
  >
    <swiper-slide
      v-for="(bannerPath, index) in bannerPaths"
      :key="index"
    >
      <div
        :style="{ 'background-image': `url(${require('@/static/image/banner.png')})` }"
        class="banner-img"
      />
    </swiper-slide>
    <div
      slot="pagination"
      class="swiper-pagination"
    />
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'MySwiper',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    bannerPaths: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.banner-img {
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  pointer-events: none;
}
</style>
