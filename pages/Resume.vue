<template>
  <Layout>
    <section class="resume__container container-inner mx-auto">
      <div class="experience__container flex flex-col">
        <h1>Experience</h1>
        <p
          class="experience__intro text-copy-primary"
          data-cy="experience__intro"
        >
          Web development has been a passion of mine since 1997 that became my
          full-time job five years ago. I really enjoy the challenge that the
          web brings to developers and I like to keep improving and learn new
          technologies. I choose to specialise myself into front-end for being
          able to shape user interfaces based on the client needs and for being
          challenged by the constant amount of innovations that the front-end
          world is giving
        </p>
        <ul class="experience">
          <ExpCard
            v-for="item in resumeData"
            :key="item.title"
            :location="item.location"
            :title="item.title"
            :date="item.date"
            :text="item.text"
          />
        </ul>
      </div>
    </section>
  </Layout>
</template>

<script>
import resumeData from '@/assets/json/resume.json'
import ExpCard from '@/components/partials/ExpCard'
export default {
  metaInfo: {
    title: 'Resume | CV | Poletto.dev | Marco Poletto | Web Developer | Mentor',
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
          'Marco Poletto Frontend Web Developer, Tech enthusiast, Coffee aficionado, Gamer, mentor, tutor, resume, cv'
      }
    ]
  },
  components: {
    ExpCard
  },
  data() {
    return {
      resumeData
    }
  }
}
</script>
