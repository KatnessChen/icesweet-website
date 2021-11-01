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
  },
  isQaEnv () {
    if (process.browser) {
      const qaEnv = ['beta', 'localhost', 'icebaby']
      return qaEnv.find(env => window.location.hostname.includes(env))
    }
    return false
  },
  platformUrl (state, getters) {
    if (process.browser) {
      return getters.isQaEnv ? state.url.platformQaEnvUrl : state.url.platformProdEnvUrl
    }
    return null
  }
}
