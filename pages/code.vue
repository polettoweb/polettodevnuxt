<template>
  <div class="container-inner mx-auto py-16">
    <h1 class="text-4xl font-bold mb-8 pb-4 border-b border-copy-secondary">
      Code examples
    </h1>
    <div
      v-for="(code, i) in codeData"
      :key="code.title"
      :class="[
        'border-gray-400 py-6 flex justify-between w-4/5 mx-auto',
        { 'bg-background-secondary': i % 2 == 0 },
      ]"
    >
      <div class="w-1/5 flex justify-center items-center">
        <codepen v-if="code.type === 'codepen'" />
        <codesandbox v-if="code.type === 'codesandbox'" />
        <github v-if="code.type === 'github'" />
      </div>
      <div class="post w-4/5">
        <h2 class="text-2xl mb-8">
          <a
            :href="code.link"
            :title="code.title"
            target="_blank"
            rel="noopener noreferrer"
            class="text-copy-primary hover:text-copy-secondary"
            >{{ code.title }}</a
          >
        </h2>

        <div class="text-lg font-serif mb-4">{{ code.content }}</div>
        <div class="mb-8">
          <a
            :href="code.link"
            :title="code.link"
            target="_blank"
            rel="noopener noreferrer"
            class="font-bold uppercase"
            >View Code</a
          >
        </div>
      </div>
    </div>
    <!-- end post -->
  </div>
</template>

<script>
import codeData from '../assets/json/code.json'

export default {
  metaInfo: {
    title: 'Code | Poletto.dev | Marco Poletto | Web Developer | Mentor',
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
          'Marco Poletto Frontend Web Developer, Tech enthusiast, Coffee aficionado, Gamer, mentor, tutor, code, workshop',
      },
    ],
  },
  components: {
    codepen: () => import('../components/partials/codepen'),
    codesandbox: () => import('../components/partials/codesandbox'),
    github: () => import('../components/partials/github'),
  },
  data() {
    return {
      codeData,
    }
  },
}
</script>
