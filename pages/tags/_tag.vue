<template>
  <div class="container-inner mx-auto my-16">
    <h2 class="text-4xl font-bold mb-8 border-b">
      Articles: <span>with tag {{ params.tag.toUpperCase() }}</span>
    </h2>
    <div class="container-inner mx-auto py-16">
      <div
        v-for="article in articles.slice(page * 5, page * 5 + 4)"
        :key="article.id"
        class="post border-gray-400 border-b mb-12"
      >
        <h2 class="text-3xl font-bold">
          <nuxt-link
            :to="article.path"
            class="text-copy-primary hover:text-copy-secondary"
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

  async asyncData({ $content, route, params }) {
    const articles = await $content('blog', { deep: true })
      .where({ tags: { $contains: [params.tag] } })
      .sortBy('date', 'desc')
      .fetch()
    return { articles, params }
  },
  data() {
    return {
      page: 0,
    }
  },
  mounted() {
    if (this.articles.length <= 0) {
      this.$router.push({
        path: '/tags',
      })
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
}
</script>
