<template>
  <div class="logo__wrapper">
    <img
      alt="logo"
      :src="require(`../static/image/logo${withText ? '-text' : ''}.png`)"
      :style="{ height: `${logoImageHeight}px` }"
    >
  </div>
</template>

<script>
export default {
  name: 'CommonLogo',
  props: {
    withText: {
      type: Boolean,
      default: true
    },
    logoImageHeight: {
      type: [String, Number],
      default: 64
    }
  }
}
</script>
