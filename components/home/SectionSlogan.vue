<template>
  <section class="flex flex-col my-12 lg:flex-row justify-center">
    <div
      v-for="(slogan, index) in slogans"
      :key="index"
      class="slogan flex flex-col my-6 lg:mx-10"
    >
      <p
        class="statistics"
        :style="{ 'font-size': isTabletOrAbove ? '50px' : '9vmin' }"
      >
        {{ slogan.statistics }}
      </p>
      <p
        class="description"
        :style="{ 'font-size': isTabletOrAbove ? '24px' : '5vmin' }"
      >
        {{ slogan.description }}
      </p>
      <p
        class="subtitle"
        :style="{ 'font-size': isTabletOrAbove ? '20px' : '4vmin' }"
      >
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
    ...mapGetters(['isTabletOrAbove']),
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
    color: $theme-primary-deep;
    font-weight: 600;
  }

  .description {
    line-height: 2;
    color: #5e5e5e;
    font-weight: 600;
  }

  .subtitle {
    line-height: 2;
    color: #5e5e5e;
    font-weight: 300;
  }
}
</style>
