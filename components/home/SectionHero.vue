<template>
  <section class="section-hero">
    <div
      class="action flex flex-col items-center"
      :style="styleInfo.actionBoxPosition"
    >
      <div
        class="action-text whitespace-nowrap"
        :style="styleInfo.actionText"
      >
        找到百分百戀人
      </div>
      <div
        class="btn action-btn"
        @click="onClickRegister"
      >
        快速註冊
      </div>
    </div>
    <div
      class="banner-img"
      :style="{
        height: styleInfo.height,
        'background-image': 'url(' + require(`@/static/image/${styleInfo.bannerFile}.png`) + ')'
      }"
    />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SectionHero',
  computed: {
    ...mapGetters(['isMobile']),
    styleInfo () {
      return this.isMobile
        ? {
            height: '100vh',
            bannerFile: 'banner-sm',
            actionBoxPosition: {
              padding: '30px',
              top: '56%',
              left: '50%',
              transform: 'translateX(-50%)'
            },
            actionText: {
              'font-size': '24px'
            }
          }
        : {
            height: '80vh',
            bannerFile: 'banner',
            actionBoxPosition: {
              padding: '62px 54px 71px 55px',
              'font-size': '34px',
              top: '50%',
              left: '25%',
              transform: 'translate(-50%, -50%)'
            },
            actionText: {
              'font-size': '34px'
            }
          }
    }
  },
  methods: {
    onClickRegister () {
      const qaEnv = ['beta', 'localhost']
      const isQaEnv = qaEnv.find(env => window.location.hostname.includes(env))
      window.open(isQaEnv ? 'https://www.icebaby.ml/' : 'https://platform.icesweet.com.tw/')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.section-hero {
  position: relative;

  .banner-img {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .action {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.7);

    &-text {
      font-size: 34px;
      color: #5e5e5e;
      margin-bottom: 40px;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        top: 130%;
        left: 50%;
        transform: translateX(-50%);
        background-color: $theme-primary-deep;
        width: 60px;
        height: 2px;
      }
    }

    &-btn {
      padding: 8px 40px;
    }
  }
}
</style>
