<template>
  <div class="home__latest">
    <h2>Latest from blog</h2>

    <article v-for="(article, i) in articles" :key="i" class="home__blog">
      <!--to do -->
      <router-link :to="`/blog/${article.slug}`" class="home__latest-title"> {article.title} </router-link>
      <p class="home__latest-text">{ article.excerpt }</p>
    </article>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      articles: state => state.blog,
    }),
  },
  methods: {
    ...mapActions(['getBlog']),
  },
  created() {
    this.articles === null && this.getBlog()
  },
}
</script>
