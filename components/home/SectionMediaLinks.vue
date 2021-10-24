<template>
  <div class="section-media-links">
    <media-links />
    <div
      class="text-lg text-center font-bold my-8 px-3 leading-relaxed"
      :style="{ 'font-size': isTabletOrAbove ? '24px' : '20px' }"
    >
      <p>加入官方ＬＩＮＥ 、粉專、ＩＧ</p>
      <p>你就是ＶＩＰ！</p>
    </div>
    <div
      class="text-center px-3 leading-loose"
      :style="{ 'font-size': isTabletOrAbove ? '16px' : '14px' }"
    >
      <p>活動不用排隊 最新火爆消息</p>
      <p>獲得獨家大熱門 貴妃搶先看 全在官方</p>
    </div>
    <media-links
      position-fixed
      :show-title="isTabletOrAbove"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MediaLinks from '../MediaLinks.vue'

export default {
  name: 'SectionMediaLinks',
  components: {
    MediaLinks
  },
  computed: {
    ...mapGetters(['isTabletOrAbove'])
  }
}
</script>

<style lang="scss" scoped>
.section-media-links {
  padding: 36px;
}
</style>
