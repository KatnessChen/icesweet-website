<template>
  <feature-page
    title="貴妃嚴選"
    icon="choice"
  >
    <div class="paragraph">
      冰山撞甜心將會不定期舉辦各式主題及各種類型的面對面「粉絲見面會」，也許是共進午餐，也許是來一場音樂饗宴，甚至也可能是一次富有趣味性的戶外烤肉！
    </div>
    <div class="paragraph">
      總之，我們一定會努力滿足您想要一親芳澤的心願。活動細節及辦法，不久的將來，我們將會公佈在粉絲專頁及官方LINE，敬請期待喔~
    </div>
  </feature-page>
</template>

<script lang="ts">
import Vue from 'vue'
import FeaturePage from '@/components/FeaturePage.vue'

export default Vue.extend({
  components: {
    FeaturePage
  },
  layout: 'WithHeaderFooter',
  head: {
    title: '貴妃嚴選'
  }
})
</script>

<style lang="scss" scoped>
.page {
  padding: 40px;
}
</style>
