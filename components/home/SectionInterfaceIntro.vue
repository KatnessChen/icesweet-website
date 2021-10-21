<template>
  <section
    class="section-interface-intro"
    @touchstart="onTouchstart"
    @touchend="onTouchend"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
  >
    <h2 class="section-title text-center font-bold">
      平台操作介面
    </h2>
    <div
      class="flex justify-center"
      :style="{
        transform: `translateX(${translate})`,
        transition: 'all .3s ease'
      }"
    >
      <div
        v-for="(intro, index) in intros"
        :key="index"
        class="interface text-center"
        :class="{ 'is-active': index === activeStepIndex || isDesktop }"
        :style="{ 'flex': `0 0 ${imageSize}%` }"
      >
        <div class="intro-text flex flex-col justify-center m-auto mb-12">
          <span class="step">STEP {{ index + 1 }}</span>
          <span class="title">{{ intro.title }}</span>
          <span class="sub-title">{{ intro.subTitle }}</span>
        </div>
        <img
          class="intro-img"
          :src="require(`@/static/image/${intro.imageFile}`)"
        >
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SectionInterfaceIntro',
  data () {
    return {
      activeStepIndex: 1,
      moveStart: 0
    }
  },
  computed: {
    ...mapGetters(['isMobile', 'isTablet', 'isDesktop']),
    translate () {
      switch (this.activeStepIndex) {
        case 0:
          return `${this.imageSize}%`
        case 2:
          return `-${this.imageSize}%`
        case 1:
        default:
          return 0
      }
    },
    intros () {
      return [
        { title: '貴妃大廳', subTitle: '真實在線', imageFile: 'mobile.png' },
        { title: '貴妃簡介', subTitle: '一點即聊', imageFile: 'mobile.png' },
        { title: '聊天畫面', subTitle: '一對一聊天', imageFile: 'mobile.png' }
      ]
    },
    imageSize () {
      if (this.isMobile) { return 60 }
      if (this.isTablet) { return 45 }
      return 30
    }
  },
  mounted () {
    window.addEventListener('resize', () => {
      this.activeStepIndex = 1
    })
  },
  methods: {
    onTouchstart ({ changedTouches }) {
      this.moveStart = changedTouches[0].clientX
    },
    onTouchend ({ changedTouches }) {
      this.slideHandler(changedTouches[0].clientX)
    },
    onMouseDown ({ clientX }) {
      this.moveStart = clientX
    },
    onMouseUp ({ clientX: moveEnd }) {
      this.slideHandler(moveEnd)
    },
    slideHandler (moveEnd) {
      if (this.isDesktop) { return }

      // 往前一張圖
      if (moveEnd > this.moveStart) {
        if (this.activeStepIndex <= 0) {
          this.activeStepIndex = 0
          return
        }
        this.activeStepIndex = (this.activeStepIndex - 1) % this.intros.length
      }
      // 往後一張圖
      if (moveEnd < this.moveStart) {
        if (this.activeStepIndex >= this.intros.length - 1) {
          this.activeStepIndex = this.intros.length - 1
          return
        }
        this.activeStepIndex = (this.activeStepIndex + 1) % this.intros.length
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.section-interface-intro {
  margin: 60px 0;

  .section-title {
    font-size: 34px;
    color: #5e5e5e;
    margin-bottom: 32px;
  }

  .interface {
    opacity: 0.4;
    transition: opacity 0.15s ease;

    &.is-active {
      opacity: 1;
    }
  }

  .intro {
    &-text {
      background-color: rgba(255, 121, 188, 0.1);
      border-radius: 50%;
      width: 140px;
      height: 140px;
      color: $theme-primary-deep;

      .step {
        font-size: 20px;
        font-weight: 600;
      }

      .title {
        font-size: 28px;
        font-weight: 600;
      }

      .sub-title {
        font-size: 18px;
        color: $gray-300;
      }
    }

    &-img {
      pointer-events: none;
      user-select: none;
    }
  }
}
</style>
