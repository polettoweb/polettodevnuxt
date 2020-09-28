<template>
  <div
    class="content-wrapper bg-background-primary font-sans text-copy-primary leading-normal flex flex-col min-h-screen relative overflow-hidden"
  >
    <Header>
      <template v-slot:logo>
        <nuxt-link to="/">
          <img src="@/assets/images/logo.svg" class="w-40" alt="logo" />
        </nuxt-link>
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
export default {
  components: {
    Header,
    Footer,
  },
}
</script>
