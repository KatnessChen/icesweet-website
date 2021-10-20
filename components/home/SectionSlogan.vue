<template>
  <section class="flex flex-col my-12 lg:flex-row justify-center">
    <div
      v-for="(slogan, index) in slogans"
      :key="index"
      class="slogan flex flex-col my-6 lg:mx-10"
    >
      <p class="statistics">
        {{ slogan.statistics }}
      </p>
      <p class="description">
        {{ slogan.description }}
      </p>
      <p class="subtitle">
        {{ slogan.subtitle }}
      </p>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SectionSlogan',
  computed: {
    ...mapGetters(['isMobile']),
    slogans () {
      return [
        { statistics: '85%', description: '25 歲以上使用者', subtitle: '20~30 歲註冊人數愈來愈多' },
        { statistics: '3,500,000', description: '註冊會員', subtitle: '全球使用 SweetRing 人數不斷提升' },
        { statistics: '80%', description: '25 歲以上使用者', subtitle: '尋找認真交往的對象' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.slogan {
  line-height: 1.6;
  text-align: center;

  .statistics {
    line-height: 1.6;
    font-size: 50px;
    color: $theme-primary-deep;
    font-weight: 600;
  }

  .description {
    line-height: 2;
    font-size: 24px;
    color: #5e5e5e;
  }

  .subtitle {
    line-height: 2;
    font-size: 20px;
    color: #5e5e5e;
    font-weight: 300;
  }
}
</style>
