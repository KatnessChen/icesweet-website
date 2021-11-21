<template>
  <div
    class="card component-article relative overflow-hidden"
    :class="{ 'hide-shadow': !isShowScrollHint }"
    :style="{
      'padding-top': cardPadding,
      'padding-left': cardPadding
    }"
  >
    <div
      class="h-full overflow-auto"
      :style="{ 'padding-right': cardPadding }"
    >
      <img
        v-if="icon"
        :src="require(`/static/svg/${icon}.svg`)"
        class="card__icon m-auto mb-4 w-8"
      >
      <h2 class="title">
        {{ title }}
      </h2>
      <div class="pb-10">
        <slot />
        <observer
          @intersect="intersect"
          @hidden="hidden"
        />
        <div class="shadow" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Observer from '@/components/Observer'

export default {
  name: 'FeatureCard',
  components: {
    Observer
  },
  props: {
    title: {
      type: String,
      default: '',
      required: true
    },
    icon: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isShowScrollHint: false
    }
  },
  computed: {
    ...mapGetters(['isTabletOrAbove']),
    cardPadding () {
      return this.isTabletOrAbove ? '40px' : '20px'
    },
    observerOptions () {
      return {
        root: this.$refs.observedObject,
        rootMargin: '0px',
        threshold: 0
      }
    }
  },
  methods: {
    intersect () {
      this.isShowScrollHint = false
    },
    hidden () {
      this.isShowScrollHint = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.card {
  padding: 0;
  border-radius: 10px;
  box-shadow: 0 4px 20px 0 #e5e5e5;
  height: calc(100vh - #{$app-header-height + $app-footer-height + 76px});

  .shadow {
    opacity: 1;
    position: absolute;
    top: 90%;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 10%;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), #eee);
    border-radius: 0 0 15px 15px;
  }

  &.hide-shadow {
    .shadow {
      opacity: 0;
      transition: opacity 0.1s ease;
    }
  }

  &__icon {
    width: 80px;
  }
}

</style>
