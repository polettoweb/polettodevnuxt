<template>
  <div>
    <h1>Articles</h1>
    <div class="container-inner mx-auto py-16">
      <div
        v-for="article in articles"
        :key="article.id"
        class="post border-gray-400 border-b mb-12"
      >
        <h2 class="text-3xl font-bold">
          <nuxt-link
            :to="article.path"
            class="text-copy-primary hover:text-blue-700"
            >{{ article.title }}</nuxt-link
          >
        </h2>
        <div class="text-copy-secondary mb-4">
          <span>{{ formatDate(article.date) }}</span>
          <span>&middot;</span>
          <span>{{ formatTime(article.readingTime) }} min read</span>
        </div>

        <div class="text-lg mb-4">{{ article.summary }}</div>
        <div class="mb-8">
          <nuxt-link :to="article.path" class="font-bold uppercase"
            >Read More</nuxt-link
          >
        </div>
      </div>
      <!-- end article -->
    </div>
  </div>
</template>

<script>
export default {
  watchQuery: true,
  watch: {
    q() {
      this.$router
        .replace({ query: this.q ? { q: this.q } : undefined })
        .catch(() => {})
    }
  },
  async asyncData({ $content, route }) {
    const q = route.query.q
    let query = $content('articles', { deep: true }).sortBy('date', 'desc')
    if (q) {
      query = query.search(q)
      // OR query = query.search('title', q)
    }
    const articles = await query.fetch()
    return {
      q,
      articles
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('gb', options)
    },
    formatTime(time) {
      return Math.ceil(time / 60000)
    }
  }
}
</script>
