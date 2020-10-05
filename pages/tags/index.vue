<template>
  <div class="container-inner mx-auto my-16">
    <h2 class="text-4xl font-bold mb-8 border-b">Tags</h2>
    <div class="container-inner mx-auto py-16">
      <div v-for="(tag, i) in filteredTags" :key="i">
        <nuxt-link :to="'/tags/' + tag">{{ tag }}</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, route }) {
    const articles = await $content('blog', { deep: true }).only('tags').fetch()
    return { articles }
  },
  data() {
    return {
      page: 0,
    }
  },
  computed: {
    filteredTags() {
      let filtered = []
      this.articles.map(item => {
        filtered.push(...item.tags)
      })
      filtered = this.removeDuplicates(filtered)
      return filtered
    },
  },
  methods: {
    removeDuplicates(array) {
      return array.filter((a, b) => array.indexOf(a) === b)
    },
  },
  head: {
    title: 'Tags | Poletto.dev | Marco Poletto | Web Developer | Mentor',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      { name: 'author', content: 'Marco Poletto Web Developer' },
      {
        name: 'description',
        content:
          'Marco Poletto Frontend Web Developer, Tech enthusiast, Coffee aficionado, Gamer, mentor, tutor, blog, articles',
      },
    ],
  },
}
</script>
