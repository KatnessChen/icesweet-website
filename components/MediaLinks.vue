<template>
  <ul
    class="media-links flex justify-center gap-8"
    :class="{ 'is-fixed': positionFixed }"
  >
    <li
      v-for="media in mediaLinks"
      :key="media.key"
      class="flex flex-col items-stretch"
      @click="media.callBack"
    >
      <img
        :src="require(`/static/image/media/${media.key}.png`)"
        :alt="media.key"
        class="media-img"
      >
      <span
        v-if="showTitle"
        class="media-title text-center mt-2"
      >{{ media.title }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'MediaLinks',
  props: {
    positionFixed: {
      type: Boolean,
      default: false
    },
    showTitle: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    mediaLinks () {
      return [
        { key: 'facebook', title: 'Facebook', callBack: this.onClickFacebook },
        { key: 'instagram', title: 'Instagram', callBack: this.onClickInstagram },
        { key: 'line', title: 'Line 官方帳號', callBack: this.onClickLine }
      ]
    }
  },
  methods: {
    onClickFacebook () {
      console.log(1)
    },
    onClickInstagram () {
      console.log(2)
    },
    onClickLine () {
      window.open('https://lin.ee/MlVgV2e')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.media-links {
  &.is-fixed {
    position: fixed;
    right: 20px;
    bottom: 20px;
    display: flex;
    flex-direction: column-reverse;
    z-index: 1;
  }

  .media-img {
    width: 88px;
    cursor: pointer;
  }

  .media-title {
    background-color: $gray-300;
    color: $white;
    font-size: 12px;
  }
}
</style>
