<template>
  <div
    class="container m-auto"
    :style="{ padding: isTabletOrAbove ? '40px' : '16px' }"
  >
    <div class="feature-page">
      <back
        v-if="isTabletOrAbove"
        :back-callback="backHandler"
        class="mb-2"
      />
      <card
        :title="title"
        :icon="icon"
        class="card"
      >
        <slot />
      </card>
      <div
        v-if="isMobile"
        class="mt-2 flex justify-center"
      >
        <back :back-callback="backHandler" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import Back from '@/components/Back.vue'
import Card from '@/components/FeatureCard.vue'

export default Vue.extend({
  components: {
    Back,
    Card
  },
  layout: 'WithHeaderFooter',
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
  head: {
    title: '創新活動'
  },
  computed: {
    ...mapGetters(['isTabletOrAbove', 'isMobile'])
  },
  methods: {
    backHandler () {
      this.$router.back()
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';
$padding: 16.5px;

.feature-page {
  position: fixed;
  top: #{$app-header-height + $padding};
  right: $padding;
  left: $padding;
  bottom: #{$app-footer-height + $padding};
  z-index: 1;

  .card {
    height: calc(100% - 40px);
  }
}
</style>
