<template>
  <section class="section-hero">
    <div
      class="action flex flex-col"
      :style="{...styleInfo.actionBoxPosition}"
    >
      <div
        class="action-text whitespace-nowrap"
        :style="{...styleInfo.actionText}"
      >
        找到百分百戀人
      </div>
      <div class="btn action-btn">
        免費登入
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
import { mapState } from 'vuex'

export default {
  name: 'SectionHero',
  computed: {
    ...mapState(['deviceWidth']),
    styleInfo () {
      return this.deviceWidth < 441
        ? {
            height: '100vh',
            bannerFile: 'banner-sm',
            actionBoxPosition: {
              top: '50%',
              left: '50%',
              transform: 'translateX(-50%)'
            },
            actionText: {
              'font-size': '24px'
            }
          }
        : {
            height: '60vh',
            bannerFile: 'banner',
            actionBoxPosition: {
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
    padding: 62px 54px 71px 55px;
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
      padding: 20px 0;
    }
  }
}
</style>
