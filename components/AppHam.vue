<template>
  <div
    class="ham"
    :class="{ 'is-active': isActive }"
  >
    <span />
    <span />
    <span />
  </div>
</template>

<script>
export default {
  name: 'AppHam',
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.ham {
  width: 25px;
  height: 21px;
  cursor: pointer;
  position: relative;

  span {
    display: inline-block;
    height: 3px;
    width: 100%;
    transition: all ease 0.3s;
    background-color: #fff;
    position: absolute;
    left: 0;

    &:first-child {
      top: 0;
    }

    &:nth-child(2) {
      top: 53%;
      transform: translateY(-65%);
    }

    &:nth-child(3) {
      bottom: 0;
    }
  }

  &.is-active {
    span {
      display: inline-block;
      height: 3px;
      width: 100%;
      transition: all ease 0.3s;
      background-color: #fff;
      position: absolute;
      left: 0;

      &:first-child {
        transform: rotate(45deg) translate(7px, 6px);
      }

      &:nth-child(2) {
        opacity: 0;
      }

      &:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
      }
    }
  }
}
</style>
