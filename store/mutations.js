export default {
  setDeviceWidth (state) {
    state.deviceWidth = window.innerWidth
  },
  visited (state) {
    state.firstVisit = false
  }
}
