<template>
  <div class="container-inner mx-auto my-16 article-container">
    <div class="py-8 px-10">
      <h1 class="text-4xl leading-tight">{{ article.title }}</h1>
      <div class="text-copy-secondary mb-4 uppercase text-md">
        {{ formatDate(article.date) }} - {{ formatTime(article.readingTime) }} min read
      </div>
      <div class="flex flex-wrap w-full items-center justify-end px-6 pl-0">
        <span class="mr-6">Tags:</span>
        <nuxt-link
          v-for="(tag, i) in article.tags"
          :key="tag"
          :to="'/tags/' + tag"
          class="text-md text-copy-secondary hover:text-copy-primary my-4 uppercase"
        >
          {{ tag }}
          <span v-if="i + 1 != article.tags.length" class="text-copy-primary mx-6"> | </span>
        </nuxt-link>
      </div>
      <!-- <div class="pt-6 pb-12 mb-20 border-b border-background-secondary">
        <span
          v-for="tag in article.tags"
          :key="tag"
          class="bg-background-secondary text-copy-secondary uppercase rounded-full px-4 py-2 mr-4 hover:bg-green-300"
        >
          {{ tag }}
        </span>
      </div> -->
      <nuxt-content :document="article" class="markdown-body mb-8" />
      <div class="flex flex-nowrap justify-center items-center">
        <div class="w-1/12 border-b border-copy-primary mr-4 my-20" />
        <svg width="32" height="32" viewBox="0 0 448 448" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M189.695 14.3458L66.024 65.1917L30.9264 149.299L125.5 260.342L223.434 65.9808L189.695 14.3458ZM0 223.411L28.7802 154.442L123.074 265.156L64.7518 380.905L0 223.411ZM68.9799 383.555L126.57 269.261L169.111 319.21L114.595 402.59L68.9799 383.555ZM119.259 404.536L172.469 323.153L264.434 431.132L223.411 447.998L119.259 404.536ZM175.304 318.818L269.268 429.145L336.946 401.32L382.925 310.068L282.006 155.62L175.304 318.818ZM386.067 314.875L343.963 398.435L381.974 382.807L400.869 337.529L386.067 314.875ZM388.651 309.747L440.612 206.623L447.998 224.588L403.182 331.985L388.651 309.747ZM438.112 200.542L385.509 304.939L284.975 151.08L349.636 52.1822L382.807 66.024L438.112 200.542ZM128.996 264.446L171.945 314.875L279.039 151.079L226.576 70.7883L128.996 264.446ZM282.007 146.538L229.16 65.6597L255.702 12.9837L344.972 50.2359L282.007 146.538ZM226.018 60.8522L194.373 12.4223L224.588 -6.53416e-06L251.105 11.0654L226.018 60.8522Z"
            :fill="$colorMode.value === 'dark-theme' ? 'rgba(255, 255, 255, 0.85)' : 'rgb(45, 55, 72)'"
          />
        </svg>
        <div class="w-1/12 border-b border-copy-primary ml-4 my-20" />
      </div>
      <div class="flex justify-between mb-8 text-sm">
        <div>
          <nuxt-link v-if="prev" class="hover:underline" :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
            >&lt; {{ prev.title }}</nuxt-link
          >
        </div>
        <div>
          <nuxt-link v-if="next" class="hover:underline" :to="{ name: 'blog-slug', params: { slug: next.slug } }"
            >{{ next.title }} &gt;</nuxt-link
          >
        </div>
      </div>
      <div class="text-center">
        <nuxt-link
          to="/blog"
          class="inline-block font-bold uppercase rounded border border-copy-secondary hover:bg-copy-secondary hover:text-background-primary py-2 px-4 my-8"
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
      return new Date(date).toLocaleDateString('en-GB', options)
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
  background: var(--bg-background-primary);
}

.markdown-body ul {
  list-style-type: disc;
  padding-left: 2em;

  li {
    margin: 1em 0;
  }
}
</style>
