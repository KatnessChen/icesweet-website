<template>
  <swiper
    ref="mySwiper"
    class="swiper"
    :options="swiperOption"
  >
    <!-- 這裡不使用 v-for 產生 swiper-slide 組件的原因 -->
    <!-- https://github.com/surmon-china/vue-awesome-swiper/issues/322 -->
    <swiper-slide>
      <div
        :style="{ 'background-image': 'url(' + require(`@/static/image/swiper/${imagePath}2.webp`) + ')' }"
        class="banner-img"
      />
    </swiper-slide>
    <swiper-slide>
      <div
        :style="{ 'background-image': 'url(' + require(`@/static/image/swiper/${imagePath}3.webp`) + ')' }"
        class="banner-img"
      />
    </swiper-slide>
    <swiper-slide>
      <div
        :style="{ 'background-image': 'url(' + require(`@/static/image/swiper/${imagePath}1.webp`) + ')' }"
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
import { mapGetters } from 'vuex'
import 'swiper/css/swiper.css'

export default {
  name: 'MySwiper',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        grabCursor: true,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        }
      }
    }
  },
  computed: {
    ...mapGetters(['isMobile']),
    swiper () {
      return this.$refs.mySwiper.$swiper
    },
    imagePath () {
      return this.isMobile ? 'image-sm-' : 'image-'
    }
  },
  mounted () {
    this.swiper.autoplay.start()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.swiper {
  height: 100%;
}

.banner-img {
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  pointer-events: none;
}
</style>
