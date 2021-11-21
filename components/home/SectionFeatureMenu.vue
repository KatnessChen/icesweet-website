<template>
  <div class="section">
    <ul
      class="container m-auto flex py-10 px-3 gap-6 flex-wrap"
      :style="{
        'justify-content': isDesktop ? 'space-between' : 'center'
      }"
    >
      <nuxt-link
        v-for="feature in features"
        v-slot="{ navigate }"
        :key="feature.routeName"
        custom
        :to="{ name: feature.routeName }"
        class="menu-item flex flex-col items-center"
        tag="li"
      >
        <li role="link" class="cursor-pointer" @click="navigate" @keypress.enter="navigate">
          <img
            :src="require(`/static/svg/${feature.icon}.svg`)"
            class="feature-icon"
            :alt="`查看${feature.label}頁面`"
            width="66"
            height="66"
          >
          <span class="mt-2 whitespace-nowrap flex">
            {{ feature.label }}
            <img
              :src="require('/static/image/chevron-pink.svg')"
              class="ml-1"
              :alt="`查看${feature.label}頁面`"
              width="18"
              height="18"
            >
          </span>
        </li>
      </nuxt-link>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
const parentRoute = 'features'

export default {
  name: 'SectionFeatureMenu',
  components: {
  },
  computed: {
    ...mapGetters(['isDesktop']),
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
    min-width: 101px;
    max-width: 125px;
    border-radius: 18px;
    background-color: #fff;
    box-shadow: 1px 1px 3px $gray-700;
    padding: 14px;

    .feature-icon {
      background-color: #fff;
      border-radius: 50%;
      width: 100%;
    }
  }
}

</style>
