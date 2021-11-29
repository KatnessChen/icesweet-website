<template>
  <div
    class="card component-article"
    :style="{ padding: isTabletOrAbove ? '40px' : '20px' }"
  >
    <img
      v-if="icon"
      :src="require(`/static/svg/${icon}.svg`)"
      class="card__icon m-auto mb-4 w-8"
    >
    <h2 class="title">
      {{ title }}
    </h2>
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
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
  computed: {
    ...mapGetters(['isTabletOrAbove'])
  }
}
</script>

<style lang="scss" scoped>
.card {
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 20px 0 #e5e5e5;
  background-color: #fff;

  &__icon {
    width: 80px;
  }
}

</style>
