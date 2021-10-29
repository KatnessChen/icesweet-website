<template>
  <section class="section-hero">
    <div
      class="action flex flex-col items-center"
      :style="styleInfo.actionBoxPosition"
    >
      <div
        class="action-block whitespace-nowrap"
        :style="styleInfo.actionText"
      >
        <div
          class="action-btn"
          @click="onClickRegister"
        >
          <img
            class="action-icon"
            :src="require('/static/image/entrance.webp')"
          >
          <div class="sup-title">
            進入貴妃大廳
          </div>
          <div class="title">
            按此免費登入
          </div>
        </div>
        <div
          class="action-btn"
          @click="onClickJoin"
        >
          <img
            class="action-icon"
            :src="require('/static/image/star.webp')"
          >
          <div class="sup-title">
            我要當貴妃
          </div>
          <div class="title">
            按此進入徵選
          </div>
        </div>
      </div>
    </div>
    <div
      v-show="deviceWidth > 0"
      class="banner-img"
      :style="{
        height: styleInfo.height,
        'background-image': 'url(' + require(`@/static/image/${styleInfo.bannerFile}.webp`) + ')'
      }"
    />
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'SectionHero',
  computed: {
    ...mapState(['deviceWidth', 'url']),
    ...mapGetters(['isMobile']),
    styleInfo () {
      return this.deviceWidth < 560
        ? {
            height: '100vh',
            bannerFile: 'banner-sm',
            actionBoxPosition: {
              padding: '30px',
              top: '56%',
              left: '50%',
              transform: 'translateX(-50%)'
            }
          }
        : {
            height: '80vh',
            bannerFile: 'banner',
            actionBoxPosition: {
              padding: '62px 54px 71px 55px',
              'font-size': '34px',
              top: '50%',
              left: '33%',
              transform: 'translate(-50%, -50%)'
            }
          }
    }
  },
  methods: {
    onClickRegister () {
      const qaEnv = ['beta', 'localhost', 'ml']
      const isQaEnv = qaEnv.find(env => window.location.hostname.includes(env))
      window.open(isQaEnv ? this.url.qaEnv : this.prodEnv)
    },
    onClickJoin () {
      this.$router.push('/join')
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

    &-block {
      display: flex;
      font-size: 34px;
      color: #5e5e5e;
      margin-bottom: 40px;
      position: relative;
      gap: 10px;
    }

    &-icon {
      width: 3.6rem;
      margin-bottom: 24px;
    }

    &-btn {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem;
      border-radius: 5px;
      cursor: pointer;

      .sup-title {
        font-size: 1.2rem;
      }

      .title {
        font-size: 1.4rem;
      }

      &:first-child {
        color: #fff;
        box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.15);
        background-image: linear-gradient(to bottom, #f22876, #942dd9);
      }

      &:last-child {
        box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.15);
        background-color: #fff;

        .sup-title {
          color: $gray-300;
        }

        .title {
          color: $gray-100;
        }
      }
    }
  }
}
</style>
