<template>
  <div class="container-inner mx-auto my-16">
    <h2 class="text-4xl font-bold mb-8 border-b">Articles</h2>
    <div class="container-inner mx-auto py-16">
      <div v-for="(article, i) in filteredTags" :key="i">
        <nuxt-link :to="'/tags/' + article">{{ article }}</nuxt-link>
        <!-- <h2 class="text-3xl font-bold">
          <nuxt-link
            v-for="tag in article.tags"
            :key="tag"
            :to="article.path"
            class="text-copy-primary hover:text-copy-secondary"
            >{{ tag }}</nuxt-link
          >
        </h2> -->
      </div>
      <!-- end article -->
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
      this.articles.map((item) => {
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
}
</script>
