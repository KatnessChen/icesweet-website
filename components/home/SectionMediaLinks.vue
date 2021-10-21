<template>
  <div class="section-media-links">
    <ul class="flex justify-center gap-8">
      <li
        v-for="media in mediaLinks"
        :key="media.key"
        @click="onClickMediaLink(media.key)"
      >
        <img
          :src="require(`/static/image/media/${media.key}.png`)"
          :alt="media.key"
          class="media-img"
        >
      </li>
    </ul>
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SectionMediaLinks',
  computed: {
    ...mapGetters(['isTabletOrAbove']),
    mediaLinks () {
      return [
        { key: 'facebook', callBackFn: '' },
        { key: 'instagram', callBackFn: '' },
        { key: 'line', callBackFn: '' }
      ]
    }
  },
  methods: {
    onClickMediaLink (mediaType) {
      switch (mediaType) {
        case 'facebook':
          console.log(1)
          break
        case 'instagram':
          console.log(2)
          break
        case 'line':
        default:
          console.log(3)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.section-media-links {
  padding: 36px;

  .media-img {
    width: 88px;
    cursor: pointer;
  }
}
</style>
