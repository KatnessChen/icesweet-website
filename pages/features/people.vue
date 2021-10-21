<template>
  <feature-page
    title="海量貴妃"
    icon="people"
  >
    <div class="paragraph">
      【貴妃增加速度   全台第一】
    </div>
    <div class="paragraph">
      本平台每週都會舉行不下10場的貴妃說明會，每次參加的貴妃人數約在15~30人不等，目前冰山撞甜心每個月貴妃增加的人數為400~600人，這些新進的貴妃們將在完成上線前的準備之後，陸續登上我們貴妃大廳的版面與您見面。
    </div>
    <div class="paragraph">
      還請您多多上線，保證您每次上線都會有不一樣的驚喜喔!
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
    title: '海量貴妃'
  }
})
</script>
