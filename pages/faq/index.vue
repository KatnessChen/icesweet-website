<template>
  <div class="container m-auto">
    <div class="component-article">
      <div class="title">
        常見問題
      </div>
      <collapse
        title="請問點數有什麼用途呢？"
        body="加值後，您將能開啟隱身功能（隱藏拜訪記錄與不被新對象搜尋到），搜尋到高人氣、高回覆率的對象，還可以知道對方是否已經讀取你的訊息，此外，每次發送給您的Like次數也將大幅提升喔！（SweetRing Plus目前僅開放給部分用戶訂閱，將陸續開放，敬請期待！）"
      />
      <collapse
        title="請問點數有什麼用途呢？"
        body="加值後，您將能開啟隱身功能（隱藏拜訪記錄與不被新對象搜尋到），搜尋到高人氣、高回覆率的對象，還可以知道對方是否已經讀取你的訊息，此外，每次發送給您的Like次數也將大幅提升喔！（SweetRing Plus目前僅開放給部分用戶訂閱，將陸續開放，敬請期待！）"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Collapse from '@/components/Collapse.vue'

export default Vue.extend({
  components: {
    Collapse
  },
  layout: 'WithHeaderFooter',
  head: {
    title: '常見問題'
  }
})
</script>
