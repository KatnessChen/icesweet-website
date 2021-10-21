<template>
  <div
    class="collapse"
    :class="{ 'is-collapsed': isCollapsed }"
  >
    <div class="collapse__header">
      <span class="collapse__header-title">{{ title }}</span>
      <span class="control" @click="isCollapsed = !isCollapsed">
        <img :src="require('/static/image/chevron.png')" alt="">
      </span>
    </div>
    <div class="collapse__body">
      {{ body }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Collapse',
  props: {
    title: {
      type: String,
      default: 'TITLE'
    },
    body: {
      type: String,
      default: 'TEXT'
    }
  },
  data () {
    return {
      isCollapsed: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.collapse {
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-title {
      font-size: 22px;
      color: $theme-primary-deep;
    }

    .control {
      cursor: pointer;
      transition: all 0.2s ease;
      width: 24px;
    }
  }

  &__body {
    padding-top: 20px;
    overflow: hidden;
    height: auto;
    transition: all 0.2s ease;
  }

  &.is-collapsed {
    .control {
      transform: rotate(180deg);
    }

    .collapse__body {
      height: 0;
      padding-top: 0;
    }
  }

  &:not(:last-child) {
    margin-bottom: 24px;
  }
}
</style>
