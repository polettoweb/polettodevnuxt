<template>
  <div class="container-inner mx-auto my-16 bg-background-secondary">
    <h1 class="text-4xl font-bold leading-tight">{{ article.title }}</h1>
    <div class="text-xl text-gray-600 mb-4">{{ article.date }}</div>
    <p>{{ article.description }}</p>
    <nuxt-content :document="article" class="markdown-body mb-8" />
    <div class="flex mb-8 text-sm">
      <nuxt-link
        v-if="prev"
        :to="{ name: 'articles-slug', params: { slug: prev.slug } }"
        >&lt; {{ prev.title }}</nuxt-link
      >&nbsp;|
      <nuxt-link
        v-if="next"
        :to="{ name: 'articles-slug', params: { slug: next.slug } }"
        >{{ next.title }} &gt;</nuxt-link
      >
    </div>
    <div class="mb-8">
      <nuxt-link to="/articles" class="font-bold uppercase">Articles</nuxt-link>
    </div>
  </div>
</template>

<script>
import '@/assets/css/prism-monokai.css'
export default {
  async asyncData({ $content, params, error }) {
    let article
    try {
      article = await $content('articles', params.slug).fetch()
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: 'Article not found' })
    }
    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('date', 'desc')
      .surround(params.slug)
      .fetch()
    return {
      article,
      prev,
      next
    }
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description
        },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.article.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.article.description
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.article.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.article.description
        }
      ]
    }
  }
}
</script>
