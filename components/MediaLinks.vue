<template>
  <ul
    class="media-links flex justify-center gap-4"
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
        class="media-img self-center"
      >
      <span
        v-if="showTitle"
        class="media-title text-center mt-2 px-2"
      >{{ media.title }}</span>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'

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
    ...mapState(['url']),
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
      window.open(this.url.fb)
    },
    onClickInstagram () {
      window.open(this.url.ig)
    },
    onClickLine () {
      window.open(this.url.lineForPlayer)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.media-links {
  .media-img {
    width: 88px;
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 0 0 20px 0 #fff;
  }

  &.is-fixed {
    position: fixed;
    right: 20px;
    bottom: 20px;
    display: flex;
    flex-direction: column-reverse;
    z-index: 1;

    .media-img {
      width: 60px;
    }
  }

  .media-title {
    background-color: $gray-300;
    color: $white;
    font-size: 12px;
  }
}
</style>
