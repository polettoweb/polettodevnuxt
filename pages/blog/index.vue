<template>
  <div class="container-inner mx-auto my-16">
    <h1 class="text-4xl font-bold mb-8 pb-4 border-b border-copy-secondary">Blog</h1>
    <div class="container-inner mx-auto py-16">
      <div
        v-for="(article, i) in articles.slice(page * 5, page * 5 + 4)"
        :key="article.id"
        :class="['mb-12 p-6', { 'bg-background-secondary': i % 2 == 0 }]"
      >
        <h2 class="text-2xl">
          <nuxt-link :to="article.path" class="text-copy-primary hover:text-copy-secondary">
            {{ article.title }}
          </nuxt-link>
        </h2>
        <div class="text-copy-secondary mb-4 uppercase text-md">
          <span>{{ formatDate(article.date) }}</span>
          <span>&middot;</span>
          <span>{{ formatTime(article.readingTime) }} min read</span>
        </div>
        <div class="text-sm my-2">{{ article.summary }}</div>
        <div class="text-copy-secondary mb-4 text-md">
          <nuxt-link :to="article.path" class="font-bold uppercase">Read More</nuxt-link>
        </div>
      </div>
      <!-- end article -->
      <Pagination
        :length="articles.length"
        :page="page"
        :on-prev="enablePrevPagination"
        :on-next="enableNextPagination"
      />
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/partials/Pagination'
export default {
  components: {
    Pagination,
  },

  async asyncData({ $content, route }) {
    const articles = await $content('blog', { deep: true }).sortBy('date', 'desc').fetch()
    return { articles }
  },
  data() {
    return {
      page: 0,
    }
  },
  methods: {
    enablePrevPagination() {
      if (this.page <= 0) return
      this.page--
    },
    enableNextPagination() {
      if (this.page >= Math.ceil(this.articles.length / 5) - 1) return
      this.page++
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('gb', options)
    },
    formatTime(time) {
      return Math.ceil(time / 60000)
    },
    async fetchArticles() {
      this.articles = await this.$content('blog', { deep: true })
        .sortBy('createdAt', 'asc')
        .limit(5)
        .skip(this.page * 5 + 5)
        .fetch()
    },
  },
  head: {
    title: 'Blogs | Poletto.dev | Marco Poletto | Web Developer | Mentor',
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
