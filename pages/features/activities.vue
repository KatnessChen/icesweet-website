<template>
  <feature-page
    title="創新活動"
    icon="activities"
  >
    <div class="paragraph">
      【精采活動    陸續推出】
    </div>
    <div class="paragraph">
      為了讓您在冰山撞甜心擁有最不一樣的體驗與感受，我們特別策劃了一系列不同主題的精采活動。如:線上闖關活動、貴妃商城、推出貴妃聯名商品、線上語音聊天系統、異國情緣等活動，還請您持續關注本平台，並且希望您能加入冰山撞甜心Facebook、IG的粉絲專頁及用戶限定的官方LINE，您將可獲得最新最完整的活動資訊。
    </div>
    <img :src="require('/static/image/activities/activities-1.png')" class="mt-7">
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
    title: '創新活動'
  }
})
</script>
