export const state = () => ({
  theme: process.browser ? window.localStorage.getItem('theme') : 'dark-theme',
})

export const mutations = {
  updateTheme(state) {
    console.log('PRE ', state.theme)
    state.theme = state.theme === 'dark-theme' ? 'light-theme' : 'dark-theme'
    if (process.browser) window.localStorage.setItem('theme', state.theme)
    console.log('POST ', state.theme)
  },
}
