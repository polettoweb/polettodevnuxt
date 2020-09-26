<template>
  <div class="container-inner mx-auto my-16 article-container">
    <div class="py-8 px-10">
      <h1 class="text-4xl font-bold leading-tight">{{ article.title }}</h1>
      <div class="text-xl text-gray-600 mb-4">
        {{ formatDate(article.date) }} -
        {{ formatTime(article.readingTime) }} min read
      </div>
      <div class="py-6">
        <span
          v-for="tag in article.tags"
          :key="tag"
          class="bg-gray-300 text-copy-secondary font-bold rounded-full px-4 py-2 mr-4 hover:bg-green-300"
        >
          {{ tag }}
        </span>
      </div>
      <nuxt-content :document="article" class="markdown-body mb-8" />
      <div class="separator">
        <img src="@/assets/images/logo.svg" />
      </div>
      <div class="flex justify-center mb-8 text-sm">
        <nuxt-link
          v-if="prev"
          :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
          >&lt; {{ prev.title }}</nuxt-link
        >&nbsp;|
        <nuxt-link
          v-if="next"
          :to="{ name: 'blog-slug', params: { slug: next.slug } }"
          >{{ next.title }} &gt;</nuxt-link
        >
      </div>
      <div class="mb-8">
        <nuxt-link to="/blog" class="font-bold uppercase"
          >Back to blog</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/prism-monokai.css'
export default {
  async asyncData({ $content, params, error }) {
    let article
    try {
      article = await $content('blog', params.slug).fetch()
    } catch (e) {
      error({ message: 'Article not found' })
    }
    const [prev, next] = await $content('blog')
      .only(['title', 'slug'])
      .sortBy('date', 'desc')
      .surround(params.slug)
      .fetch()
    return {
      article,
      prev,
      next,
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('gb', options)
    },
    formatTime(time) {
      return Math.ceil(time / 60000)
    },
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description,
        },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.article.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.article.description,
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.article.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.article.description,
        },
      ],
    }
  },
}
</script>
<style lang="scss">
.article-container {
  background: var(--bg-background-secondary);
}

.markdown-body ul {
  list-style-type: disc;
  padding-left: 2em;

  li {
    margin: 1em 0;
  }
}

.separator {
  width: 40%;
  height: auto;
  margin: 0 auto 2em;

  img {
    width: 50%;
    margin: 0 auto;
    opacity: 0.5;
  }
}
</style>
