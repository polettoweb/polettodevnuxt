export const state = () => ({
  theme: process.browser
    ? window.localStorage.getItem('theme') || 'dark-theme'
    : '',
})

export const mutations = {
  updateTheme(state) {
    state.theme = state.theme === 'dark-theme' ? 'light-theme' : 'dark-theme'
    if (process.browser) window.localStorage.setItem('theme', state.theme)
  },
}
