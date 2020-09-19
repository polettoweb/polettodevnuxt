<template>
  <div>
    <div
      class="hero container-inner mx-auto flex flex-col lg:flex-row flex-wrap justify-between pt-16 pb-24"
    >
      <div
        class="text-4xl font-bold w-full lg:w-3/5 items-center text-center lg:text-left pb-8"
      >
        <h1>
          <span class="leading-tight">Hi, I'm Marco,</span>
          <br />
          <span class="text-blue-700 leading-tight typer-wrapper">
            <client-only placeholder="Frontend Developer">
              <Vue-typer
                :text="role"
                :repeat="Infinity"
                :type-delay="100"
                :erase-delay="20"
                :pre-erase-delay="1500"
                :shuffle="true"
                erase-style="backspace"
              />
            </client-only>
          </span>
        </h1>
      </div>
      <img
        class="lg:w-2/5 hidden lg:inline-block"
        src="@/assets/images/static_asset.svg"
      />

      <img
        class="absolute rotate-45 bg-octa"
        src="@/assets/images/bg-octa.svg"
        alt
      />
      <div class="text-lg sm:text-xl mt-8 w-full pt-24">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div>
            <img
              src="@/assets/images/marco-exa.png"
              alt="avatar"
              class="w-4/5 h-4/5 mx-auto mb-8 lg:mb-0 md:w-48 md:h-48"
            />
          </div>
          <div class="flex-1 text-lg sm:text-xl ml-6">
            I am a passionate frontend developer and mentor based in Amsterdam.
            I am originally from Venice and I love to work with JavaScript, CSS
            and everything around user interfaces. I am using daily VueJS,
            GraphQL and Sass for a consultancy in the center of Amsterdam. My
            goal is to build clean, performant and accessible user interfaces
            where the right user experience is a focal point. Helping trainee
            and Junior developers to grow and learn is a major part of my job
            and my personal mission. My job is also my passion and, therefore,
            seeking out new technologies and stay up-to-date on industry trends
            and advancements is more a pleasure than a duty.
          </div>
        </div>
      </div>
    </div>
    <!-- end hero -->
    <div class="container-inner mx-auto">
      <div class="flex flex-row items-center justify-center py-16">
        <h2 id="projects" class="w-2/5 font-bold text-4xl mb-6 text-left">
          Latest from blog
        </h2>
      </div>
      <div
        v-for="post in posts"
        :key="post.id"
        class="post border-gray-400 border-b mb-12"
      >
        <h2 class="text-3xl font-bold">{{ post.title }}</h2>

        <div class="text-lg mb-4">{{ post.content }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home | Poletto.dev | Marco Poletto | Web Developer | Mentor',
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
          'Marco Poletto Frontend Web Developer, UI Engineer, Tech enthusiast, Coffee aficionado, Gamer, mentor, tutor'
      }
    ]
  },
  components: {
    VueTyper: () => import('vue-typer').then((m) => m.VueTyper)
  },
  data() {
    return {
      role: [
        'Frontend Dev',
        'UI Engineer',
        'Coffee aficionado',
        'Tech enthusiast',
        'Tutor',
        'Gamer',
        'Mentor',
        'Pizza lover'
      ],
      posts: [
        {
          title: 'Copy text on click with JS',
          content:
            'Copy on click some hex value on colored swatches using vanilla JS.',
          link: 'https://codepen.io/polettoweb/pen/KjazEZ',
          type: 'codepen'
        },
        {
          title: 'How to create simple tabs system with VueJS',
          content: 'Easy way to build a simple tab system using VueJS.',
          link: 'https://github.com/polettoweb/vue-tabs',
          type: 'codesandbox'
        },
        {
          title:
            "Automatically switch text color based on background's brightness",
          content:
            "quick example of how you can programmatically change text color, for example of a button, based on the element's background color.",
          link: 'https://codepen.io/polettoweb/pen/WqZbVJ',
          type: 'github'
        },
        {
          title: 'How to create animated multicolour border on element',
          content:
            'a quick example of how you can create an animated multi colour border effect to you element using CSS only',
          link: 'https://codepen.io/polettoweb/pen/NQPypa',
          type: 'codepen'
        }
      ]
    }
  }
}
</script>
<style>
.vue-typer .custom.char.typed {
  color: #2b6cb0;
}
.vue-typer .custom.caret {
  display: none;
}

.vue-typer .custom.char.selected {
  background-color: transparent;
  text-decoration: line-through;
}
</style>
