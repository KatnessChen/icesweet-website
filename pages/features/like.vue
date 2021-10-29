<template>
  <feature-page
    title="市場滿意度"
    icon="people"
  >
    <div class="paragraph">
      冰山撞甜心在正式上線前，即針對1500名試用者做滿意度調查，得到了近98％的好評，除了用心聽取他們的意見之外，並對他們所提出的優缺點做加強與修正，因此我們敢大聲地說：「冰山撞甜心」絕對是最重視用戶感受的平台，您的滿意度，就是我們努力經營的原動力！
    </div>
    <div class="paragraph">
      因此若您有任何想法，也歡迎您告訴我們，我們一定會認真聽取所有的建議，唯有您的滿意，才是我們追求的方向。
    </div>
    <img :src="require('/static/image/like/like.webp')" class="mt-7">
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
    title: '市場滿意度'
  }
})
</script>
