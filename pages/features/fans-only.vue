<template>
  <feature-page
    title="粉絲見面會"
    icon="fans-only"
  >
    <div class="paragraph">
      冰山撞甜心將會不定期舉辦各式主題及各種類型的面對面「粉絲見面會」，也許是共進午餐，也許是來一場音樂饗宴，甚至也可能是一次富有趣味性的戶外烤肉！
    </div>
    <div class="paragraph">
      總之，我們一定會努力滿足您想要一親芳澤的心願。活動細節及辦法，不久的將來，我們將會公佈在粉絲專頁及官方LINE，敬請期待喔~
    </div>
    <img
      :src="require('/static/image/fans-only/fans-only-1.webp')"
      class="mt-7"
      alt="與粉絲近距離互動照片"
    >
    <div
      class="sub-img-container"
      :class="[isDesktop && 'is-desktop']"
    >
      <img
        :src="require('/static/image/fans-only/fans-only-2.webp')"
        class="sub-img"
        alt="與粉絲近距離互動照片"
      >
      <img
        :src="require('/static/image/fans-only/fans-only-3.webp')"
        class="sub-img"
        alt="與粉絲近距離互動照片"
      >
      <img
        :src="require('/static/image/fans-only/fans-only-4.webp')"
        class="sub-img"
        alt="與粉絲近距離互動照片"
      >
    </div>
  </feature-page>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import FeaturePage from '@/components/FeaturePage.vue'

export default Vue.extend({
  components: {
    FeaturePage
  },
  layout: 'WithHeaderFooter',
  head: {
    title: '粉絲見面會',
    meta: [
      { hid: '粉絲見面會', name: '粉絲見面會', content: '冰山撞甜心將會不定期舉辦各式主題及各種類型的面對面「粉絲見面會」，也許是共進午餐，也許是來一場音樂饗宴，甚至也可能是一次富有趣味性的戶外烤肉' }
    ]
  },
  computed: {
    ...mapGetters(['isDesktop'])
  }
})
</script>

<style lang="scss" scoped>
.sub-img-container {
  display: flex;
  flex-direction: column;

  .sub-img {
    margin-top: 10px;
  }

  &.is-desktop {
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;

    .sub-img {
      min-width: 0;
    }
  }
}
</style>
