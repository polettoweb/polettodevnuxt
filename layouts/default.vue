<template>
  <div
    :class="[
      'content-wrapper bg-background-primary font-sans text-copy-primary leading-normal flex flex-col min-h-screen relative overflow-hidden',
      theme,
    ]"
  >
    <Header>
      <template v-slot:logo>
        <nuxt-link to="/">
          <img src="@/assets/images/logo.svg" class="w-40" alt="logo" />
        </nuxt-link>
      </template>
      <template v-slot:switcher>
        <li class="mr-8 mb-6 lg:mb-0">
          <theme-switcher :theme="theme" @themeChanged="updateTheme" />
        </li>
      </template>
    </Header>
    <div class="flex-grow">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import ThemeSwitcher from '../components/ThemeSwitcher'

export default {
  components: {
    Header,
    Footer,
    ThemeSwitcher,
  },
  computed: {
    theme() {
      return this.$store.state.theme
    },
  },
  methods: {
    updateTheme(theme) {
      this.$store.commit('updateTheme', theme)
    },
  },
}
</script>
