<template>
  <header>
    <nav
      class="container mx-auto flex flex-wrap justify-between items-center py-8"
    >
      <div>
        <div>
          <slot name="logo" />
        </div>
      </div>
      <div class="block lg:hidden">
        <button @click="toggle" class="toggle-container">
          <svg
            class="current-color h-6 w-6 toggle"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <ul
        :class="isOpen ? 'block' : 'hidden'"
        class="uppercase tracking-wide font-bold w-full block flex-grow lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0"
      >
        <slot name="switcher" />
        <!-- Added theme switcher as slot to avoid emit event from child-->
        <!-- <li class="mr-8 mb-6 lg:mb-0">
          <nuxt-link to="/projects" class="text-copy-primary hover:text-blue-600">Projects</nuxt-link>
        </li>-->
        <li class="mr-8 mb-6 lg:mb-0">
          <nuxt-link to="/" class="text-copy-primary hover:text-blue-600 home"
            >Home</nuxt-link
          >
        </li>
        <li class="mr-8 mb-6 lg:mb-0">
          <nuxt-link
            to="/articles"
            class="text-copy-primary hover:text-blue-600"
            >Articles</nuxt-link
          >
        </li>
        <li class="mr-8 mb-6 lg:mb-0">
          <nuxt-link to="/code" class="text-copy-primary hover:text-blue-600"
            >Code</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/resume" class="text-copy-primary hover:text-blue-600"
            >Resume</nuxt-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style></style>
