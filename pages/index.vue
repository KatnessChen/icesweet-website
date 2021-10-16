<template>
  <div>
    Main Index
    <feature-menu />
  </div>
</template>

<script>
import FeatureMenu from '@/components/FeatureMenu'

export default {
  components: {
    FeatureMenu
  },
  layout: 'WithHeaderFooter',
  head: {
    title: '冰山撞甜心 - 官網'
  }
}
</script>
