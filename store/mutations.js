export default {
  /**
   * toggle the navbar so it closes or opens
   * @param {*} state
   */
  toggleNavbar (state) {
    state.navbar = !state.navbar
  },
  /**
   * set language
   * @param {*} state
   * @param {*} locale
   */
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}
