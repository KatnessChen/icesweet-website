<template>
  <div
    class="collapse"
    :class="{ 'is-collapsed': isCollapsed }"
  >
    <div
      class="collapse__header"
      @click="isCollapsed = !isCollapsed"
    >
      <span class="collapse__header-title">{{ title }}</span>
      <span class="control">
        <img
          :src="require('/static/image/chevron.png')"
          alt="點按以打開或收合回答區塊"
          width="24"
          height="24"
        >
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
    align-items: flex-start;
    justify-content: space-between;
    cursor: pointer;

    &-title {
      font-size: 22px;
      color: $theme-primary-deep;
      transition: color 0.3s ease;
    }

    .control {
      transition: all 0.2s ease;
      flex: 0 0 24px;
      margin-left: 12px;
      margin-top: 8px;
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

    .collapse__header-title {
      color: #5e5e5e;
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
