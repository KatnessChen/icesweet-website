export default {
  isMobile (state) {
    return state.deviceWidth < state.breakpoint.sm
  },
  isTablet (state) {
    return state.deviceWidth >= state.breakpoint.sm && state.deviceWidth < state.breakpoint.lg
  },
  isTabletOrAbove (state) {
    return state.deviceWidth >= state.breakpoint.sm
  },
  isTabletOrBelow (state) {
    return state.deviceWidth < state.breakpoint.lg
  },
  isDesktop (state) {
    return state.deviceWidth >= state.breakpoint.lg
  }
}
