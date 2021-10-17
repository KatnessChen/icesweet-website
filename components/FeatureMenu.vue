<template>
  <div>
    <ul>
      <nuxt-link
        v-for="feature in features"
        :key="feature.routeName"
        :to="{ name: feature.routeName }"
      >
        {{ feature.label }}
      </nuxt-link>
    </ul>
  </div>
</template>

<script>
const parentRoute = 'features'

export default {
  data () {
    return {
      features: [
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
