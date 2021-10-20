export default {
  isMobile (state) {
    return state.deviceWidth < state.breakpoint.md
  }
}
