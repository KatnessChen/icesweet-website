<template>
  <div
    class="container m-auto"
    :class="{ 'is-desktop': isDesktop }"
  >
    <div
      class="component-article text-center"
      :style="{ padding: isMobile ? '60px 20px' : '60px' }"
    >
      <div class="title">
        我要當貴妃
      </div>
      <div class="flex flex-col lg:flex-row items-start">
        <img
          :src="require('/static/image/join/join.png')"
          class="img col-left mb-10 lg:mb-0 lg:mr-10"
        >
        <div class="col-right">
          <div class="paragraph">
            交朋友，是我們的日常
          </div>
          <div class="paragraph">
            打屁聊天，是我們的工作
          </div>
          <div class="paragraph">
            每天開開心心地，是我們的生活
          </div>
          <div class="paragraph">
            把網路裡的幻想變成可以成真的現實
          </div>
          <div class="paragraph">
            這，就是我們
          </div>
          <div class="paragraph">
            您也想和我們一樣當個愜意又受歡迎的貴妃嗎?
          </div>
          <div class="paragraph">
            別客氣，請馬上連絡我們，我們會和您約好時間，讓專人告訴您如何成為貴妃的一切資訊
          </div>
          <div class="paragraph">
            不必緊張，我們會陪著您
          </div>
          <div class="paragraph">
            勇敢地踏出第一步吧
          </div>
          <div class="btn mt-8" @click="onClickJoin">
            <img :src="require('/static/image/media/line.png')" class="inline-block w-8 mr-2">
            <span class="whitespace-nowrap">我要加入</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  layout: 'WithHeaderFooter',
  head: {
    title: '成為貴妃'
  },
  computed: {
    ...mapGetters(['isDesktop', 'isMobile'])
  },
  methods: {
    onClickJoin () {
      window.open('https://lin.ee/MlVgV2e')
    }
  }
})
</script>

<style lang="scss" scoped>

.col-left {
  flex: 0 0 56%;
  min-width: 0;
}

.col-right {
  flex: 0 0 46%;
  min-width: 0;
}

.is-desktop {
  .paragraph {
    text-align: left;

    &:not(:first-child) {
      margin-top: 6px;
    }
  }
}

.img {
  height: auto;
}

.btn {
  width: 180px;
  border-radius: 32px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background-image: linear-gradient(to bottom, #0edc62, #06c755);
  color: #fff;
}
</style>
