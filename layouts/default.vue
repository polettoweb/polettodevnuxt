<template>
  <div
    class="content-wrapper bg-background-primary font-sans text-copy-primary leading-normal flex flex-col min-h-screen relative overflow-hidden"
    :class="theme === 'null' ? 'light-theme' : 'dark-theme'"
  >
    <Header>
      <template v-slot:logo>
        <nuxt-link v-if="theme === 'dark-theme'" to="/">
          <img src="@/assets/images/logo.svg" class="w-40" alt="logo" />
        </nuxt-link>
        <nuxt-link v-else to="/">
          <img src="@/assets/images/logo_light_mode.svg" class="w-40" alt="logo" />
        </nuxt-link>
      </template>
      <template v-slot:switcher>
        <li class="mr-8 mb-6 lg:mb-0">
          <theme-switcher :theme="theme" />
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
      return this.$colorMode.value == null ? 'light-theme' : this.$colorMode.value
    },
  },
}
</script>
