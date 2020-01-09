<template>
  <div
    :class="theme"
    class="content-wrapper bg-background-primary font-sans text-copy-primary leading-normal flex flex-col min-h-screen relative overflow-hidden"
  >
    <Header>
      <template v-slot:logo>
        <nuxt-link v-if="theme === 'theme-light'" to="/">
          <img
            src="@/assets/images/logo_light_mode.svg"
            class="w-40"
            alt="logo"
          />
        </nuxt-link>
        <nuxt-link v-else to="/">
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
    ThemeSwitcher
  },
  data() {
    return {
      theme: ''
    }
  },
  mounted() {
    this.theme = localStorage.getItem('theme') || 'theme-dark'
  },
  methods: {
    updateTheme(theme) {
      this.theme = theme
    }
  }
}
</script>

<style src="../main.css" />
