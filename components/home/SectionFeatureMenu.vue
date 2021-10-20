<template>
  <div class="section">
    <ul class="flex justify-center py-10 gap-10 flex-wrap">
      <nuxt-link
        v-for="feature in features"
        :key="feature.routeName"
        :to="{ name: feature.routeName }"
        class="menu-item flex flex-col items-center"
      >
        <img
          :src="require(`/static/svg/${feature.icon}.svg`)"
          class="feature-icon"
        >
        <span class="mt-4 whitespace-nowrap">{{ feature.label }}</span>
      </nuxt-link>
    </ul>
  </div>
</template>

<script>
const parentRoute = 'features'

export default {
  name: 'SectionFeatureMenu',
  components: {
  },
  computed: {
    features () {
      return [
        { routeName: `${parentRoute}-choice`, label: '貴妃嚴選', icon: 'choice' },
        { routeName: `${parentRoute}-fans-only`, label: '粉絲見面會', icon: 'fans-only' },
        { routeName: `${parentRoute}-activities`, label: '創新活動', icon: 'activities' },
        { routeName: `${parentRoute}-people`, label: '海量貴妃', icon: 'people' },
        { routeName: `${parentRoute}-like`, label: '市場滿意度', icon: 'like' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.section {
  background-color: rgba(255, 121, 188, 0.1);

  .menu-item {
    flex-basis: 24%;
    min-width: 60px;
    max-width: 80px;

    .feature-icon {
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 1px 1px 3px $gray-700;
      width: 100%;
    }
  }
}

</style>
