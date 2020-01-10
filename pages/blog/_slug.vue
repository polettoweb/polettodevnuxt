<template>
  <div>
    <h1>Create a frontmatter Markdown powered Blog with Nuxt.JS</h1>
    <!-- eslint-disable-next-line vue/require-component-is -->
    <component :is="singlePostComponent"></component>
  </div>
</template>
<script>
export default {
  name: 'Slug',
  data() {
    return {}
  },
  async asyncData({ params }) {
    const post = await import(`~/blog/${params.slug}.md`)
    return {
      title: post.attributes.title,
      singlePostComponent: post.vue.component
    }
  }
}
</script>
