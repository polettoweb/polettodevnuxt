<template>
  <div class="container-inner mx-auto py-16">
    <h1>My blog posts</h1>
    <ul>
      <li
        v-for="post in posts"
        :key="post.attributes.title"
        class="post border-gray-400 border-b mb-12"
      >
        {{ post.meta.resourcePath }}
        <nuxt-link :to="getPermalink(post)">{{
          post.attributes.title
        }}</nuxt-link>
      </li>
    </ul>

    <!-- <pagination-posts
        v-if="$page.posts.pageInfo.totalPages > 1"
        :totalPages="$page.posts.pageInfo.totalPages"
        :currentPage="$page.posts.pageInfo.currentPage"
        base="/blog"
      /> -->
  </div>
</template>

<script>
// import PaginationPosts from '@/components/PaginationPosts'

export default {
  components: {
    // PaginationPosts
  },
  data() {
    return {
      prefix: 'blog'
    }
  },
  async asyncData() {
    const resolve = await require.context('@/blog/', true, /\.md$/)
    const imports = await resolve.keys().map((key) => resolve(key))
    return {
      posts: imports
    }
  },
  metaInfo: {
    title: 'Blog | Poletto.dev | Marco Poletto | Web Developer | Mentor',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      { name: 'author', content: 'Marco Poletto Web Developer' },
      {
        name: 'description',
        content:
          'Marco Poletto Frontend Web Developer, Tech enthusiast, Coffee aficionado, Gamer, mentor, tutor, blog, articles'
      }
    ]
  },
  methods: {
    getPermalink(post) {
      return `/${this.prefix}/${
        post.meta.resourcePath
          .split('\\')
          .pop()
          .split('/')
          .pop()
          .split('.')[0]
      }`
    }
  }
}
</script>
