<template>
  <div>
    <div class="hero container-inner mx-auto flex flex-col lg:flex-row flex-wrap justify-between pt-16 pb-24">
      <div class="text-4xl font-bold w-full lg:w-3/5 items-center text-center lg:text-left pb-8">
        <h1 class="font-normal">
          <span class="leading-tight">Hi, I'm Marco,</span>
          <br />
          <span class="text-copy-secondary leading-tight typer-wrapper">
            <client-only placeholder="Frontend Developer">
              <Vue-typer
                :text="role"
                :repeat="Infinity"
                :type-delay="100"
                :erase-delay="10"
                :pre-erase-delay="1500"
                :shuffle="true"
                erase-style="backspace"
              />
            </client-only>
          </span>
        </h1>
      </div>
      <img
        v-if="$colorMode.value === 'dark-theme'"
        alt="Marco's fab portrait"
        class="lg:w-2/5 hidden lg:inline-block relative z-10"
        src="@/assets/images/marco-exa.png"
      />
      <img
        v-else
        alt="Marco's fab portrait"
        class="lg:w-2/5 hidden lg:inline-block relative z-10"
        src="@/assets/images/marco-exa-light.png"
      />
      <svg
        class="absolute rotate-45 bg-octa"
        width="448"
        height="448"
        viewBox="0 0 448 448"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M189.695 14.3458L66.024 65.1917L30.9264 149.299L125.5 260.342L223.434 65.9808L189.695 14.3458ZM0 223.411L28.7802 154.442L123.074 265.156L64.7518 380.905L0 223.411ZM68.9799 383.555L126.57 269.261L169.111 319.21L114.595 402.59L68.9799 383.555ZM119.259 404.536L172.469 323.153L264.434 431.132L223.411 447.998L119.259 404.536ZM175.304 318.818L269.268 429.145L336.946 401.32L382.925 310.068L282.006 155.62L175.304 318.818ZM386.067 314.875L343.963 398.435L381.974 382.807L400.869 337.529L386.067 314.875ZM388.651 309.747L440.612 206.623L447.998 224.588L403.182 331.985L388.651 309.747ZM438.112 200.542L385.509 304.939L284.975 151.08L349.636 52.1822L382.807 66.024L438.112 200.542ZM128.996 264.446L171.945 314.875L279.039 151.079L226.576 70.7883L128.996 264.446ZM282.007 146.539L229.16 65.6597L255.702 12.9838L344.972 50.2359L282.007 146.539ZM226.018 60.8522L194.373 12.4223L224.588 0L251.105 11.0654L226.018 60.8522Z"
          fill="#2A4365"
          fill-opacity="0.2"
        />
      </svg>
      <div class="text-lg sm:text-xl mt-8 w-full pt-24">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="flex-1 text-lg sm:text-xl ml-6 main-text">
            <p class="">
              I am a passionate frontend developer and mentor based in Amsterdam. I am originally from Venice and I love
              to work with
              <span>JavaScript</span>, CSS and everything around user interfaces. I am using daily <span>VueJS</span>,
              <span>GraphQL</span> and <span>Sass</span> for a consultancy in the center of Amsterdam. My goal is to
              build clean, performant and accessible user interfaces where the right user experience is a focal point.
              Helping trainee and Junior developers to grow and learn is a major part of my job and my
              <span>personal mission</span>. My job is also my passion and, therefore, seeking out new technologies and
              stay up-to-date on industry trends and advancements is more a pleasure than a duty.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- end hero -->
    <div class="flex flex-row items-center justify-center py-16">
      <h2 id="projects" class="text-4xl mb-6 text-center">Latest from blog</h2>
    </div>
    <div class="container-inner mx-auto flex flex-row flex-wrap justify-left">
      <div v-for="article in articles" :key="article.id" class="post border-gray-400 border-b mb-12 mx-12 w-full">
        <h3 class="text-2xl">
          <nuxt-link :to="article.path" class="text-copy-primary hover:text-copy-secondary">{{
            article.title
          }}</nuxt-link>
        </h3>
        <div>
          <p class="text-sm my-2">{{ article.summary }}</p>
        </div>
        <div class="text-copy-secondary mb-4 uppercase text-md">
          <span>{{ formatDate(article.date) }}</span>
          <span>&middot;</span>
          <span>{{ formatTime(article.readingTime) }} min read</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    VueTyper: () => import('vue-typer').then(m => m.VueTyper),
  },
  async asyncData({ $content, route }) {
    const articles = await $content('blog', { deep: true }).sortBy('date', 'desc').limit(3).fetch()
    return { articles }
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
        'Pizza lover',
      ],
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
  head: {
    title: 'Home | Poletto.dev | Marco Poletto | Web Developer | Mentor',
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
          'Marco Poletto Frontend Web Developer, UI Engineer, Tech enthusiast, Coffee aficionado, Gamer, mentor, tutor',
      },
    ],
  },
}
</script>
<style lang="scss">
.main-text {
  span {
    color: var(--text-copy-secondary);
  }
}
</style>
