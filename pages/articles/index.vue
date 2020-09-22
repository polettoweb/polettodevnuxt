<template>
  <div class="container-inner mx-auto my-16">
    <h2 class="text-4xl font-bold mb-8 border-b">Articles</h2>
    <div class="container-inner mx-auto py-16">
      <div
        v-for="article in articles.slice(page * 5, page * 5 + 4)"
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
      <!-- <pagination-posts
        v-if="articles.length / 5 > 1"
        :totalPages="Math.ceil(articles.length / 5)"
        :currentPage="1"
        base="/articles"
      /> -->
      <div class="flex justify-between text-xl items-center">
        <span
          @click="enablePrevPagination"
          :class="{
            'text-gray-400 hover:text-gray-400 cursor-not-allowed': page <= 1
          }"
        >
          &larr; Prev
        </span>
        <div class="text-base">
          Page {{ page + 1 }} of {{ Math.ceil(articles.length / 5) }}
        </div>
        <span
          @click="enableNextPagination"
          :class="{
            'text-gray-400 hover:text-gray-400 cursor-not-allowed':
              page >= Math.ceil(articles.length / 5) - 1
          }"
        >
          Next &rarr;
        </span>
      </div>
    </div>
  </div>
</template>

<script>
// import PaginationPosts from '../../components/PaginationPosts'
export default {
  // components: { PaginationPosts },
  watchQuery: ['page'],
  data() {
    return {
      page: 0
    }
  },

  async asyncData({ $content, route }) {
    const articles = await $content('articles', { deep: true })
      .sortBy('date', 'desc')
      .fetch()
    return { articles }
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
      this.articles = await this.$content('articles', { deep: true })
        .sortBy('createdAt', 'asc')
        .limit(5)
        .skip(this.page * 5 + 5)
        .fetch()
    }
  }
}
</script>
