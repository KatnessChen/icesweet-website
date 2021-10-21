<template>
  <div class="page">
    <back
      v-if="isTabletOrAbove"
      class="mb-2"
    />
    <card
      :title="title"
      :icon="icon"
    >
      <slot />
    </card>
    <div
      v-if="isMobile"
      class="mt-2 flex justify-center"
    >
      <back />
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
  }
})
</script>

<style lang="scss" scoped>
.page {
  padding: 40px;
}
</style>
