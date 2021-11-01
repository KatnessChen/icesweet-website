<template>
  <feature-page
    title="貴妃嚴選"
    icon="choice"
  >
    <div class="paragraph">
      【上線前】
    </div>
    <div class="paragraph">
      我們對每位前來面試的貴妃，都進行了最完整的資料審核，凡未能提供個人身份證明文件、冒名面試及態度條件不佳者，一律不予錄用。采取如此高標準的面試門檻，就是為了確保每位用戶都能在冰山撞甜心享受到最真實、最高品質的服務內容。
    </div>
    <div class="paragraph">
      【上線後】
    </div>
    <div class="paragraph">
      我們嚴格要求每位貴妃不得非本人代聊或聊天態度不佳，且絕對禁止任何使用聊天機器人欺騙用戶的事發生，因為我們深信真誠是人與人交流中最重要的部份，而這一部份也是任何科技所無法取代的，所以為了有別於某些代聊猖獗的平台，我們會持續以有效率的作為來嚇阻類似的事發生，這一部份將是本平台未來的工作重點。
    </div>
    <div class="paragraph">
      本平台的貴妃，每一位都是貨真價實的；聊天室裡您所看到的每一句話，也一定是本人回覆的，請各位用戶完全可以放心。
    </div>
    <img
      :src="require('/static/image/choice/choice-1.webp')"
      class="mt-7"
      alt="貴妃徵選活動照片"
    >
    <img
      :src="require('/static/image/choice/choice-2.webp')"
      class="mt-7"
      alt="貴妃徵選活動照片"
    >
  </feature-page>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import FeaturePage from '@/components/FeaturePage.vue'

export default Vue.extend({
  components: {
    FeaturePage
  },
  layout: 'WithHeaderFooter',
  head () {
    return {
      titleTemplate: '%s - 貴妃嚴選',
      meta: [
        { hid: `${this.brandName} - 貴妃嚴選`, name: '貴妃嚴選', content: '本平台的貴妃皆經過仔細身分確認和評選，且一定為本人親自聊天，因為我們深信真誠是人與人交流中最重要的部份，而這一部份也是任何科技所無法取代的' },
        { property: 'og:title', content: `${this.brandName} - 貴妃嚴選` },
        { property: 'og:description', content: '本平台的貴妃皆經過仔細身分確認和評選，且一定為本人親自聊天，因為我們深信真誠是人與人交流中最重要的部份，而這一部份也是任何科技所無法取代的' },
        { property: 'og:url', content: this.url.websiteUrl + '/features/choice' },
        { property: 'og:image', content: require('~/static/image/choice/choice-2.webp') }
      ]
    }
  },
  computed: {
    ...mapState(['url', 'brandName'])
  }
})
</script>
