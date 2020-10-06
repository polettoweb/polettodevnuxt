<template>
  <section class="container mx-auto py-16">
    <h1 class="text-4xl font-bold mb-8 pb-4 border-b border-copy-secondary">Experience</h1>
    <div class="experience__container flex flex-col py-0 px-5">
      <p class="experience__intro text-copy-primary" data-cy="experience__intro">
        Web development has been a passion of mine since 1997 that became my full-time job five years ago. I really
        enjoy the challenge that the web brings to developers and I like to keep improving and learn new technologies. I
        choose to specialise myself into front-end for being able to shape user interfaces based on the client needs and
        for being challenged by the constant amount of innovations that the front-end world is giving
      </p>
      <ul class="experience w-full my-8 mx-auto pb-24 relative">
        <ExpCard
          v-for="item in resumeData"
          :key="item.title"
          :location="item.location"
          :title="item.title"
          :date="item.date"
          :text="item.text"
          :techs="item.tech.split(',')"
        />
      </ul>
    </div>
  </section>
</template>

<script>
import resumeData from '@/assets/json/resume.json'
import ExpCard from '@/components/partials/ExpCard'
export default {
  components: {
    ExpCard,
  },
  data() {
    return {
      resumeData,
    }
  },
  head: {
    title: 'Resume | CV | Poletto.dev | Marco Poletto | Web Developer | Mentor',
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
          'Marco Poletto Frontend Web Developer, Tech enthusiast, Coffee aficionado, Gamer, mentor, tutor, resume, cv',
      },
    ],
  },
}
</script>
<style lang="scss">
.experience {
  &:before {
    content: '';
    position: absolute;
    width: 3px;
    height: 90%;
    background-color: var(--text-copy-secondary);
    left: 50%;

    @media (max-width: 767px) {
      left: 96%;
    }
  }

  &__container {
    ul {
      .expcard {
        width: calc(50% - 30px);
        transition: all 0.5s cubic-bezier(0.17, 0.67, 0.5, 1);

        @media (max-width: 767px) {
          width: 88%;
          margin-bottom: 100px;
        }

        &:nth-child(odd) {
          float: left;

          &:before {
            position: absolute;
            content: '';
            font-size: 30px;
            width: 0;
            height: 0;
            border-top: 16px solid var(--text-copy-secondary);
            border-right: 16px solid transparent;
            right: -16px;
            top: 0;
          }

          .ion-ios-circle-filled {
            right: -44px;
            @media (max-width: 767px) {
              right: -7.8vw;
            }
          }
        }

        &:nth-child(even) {
          float: right;
          @media (max-width: 767px) {
            float: left;
          }

          &:before {
            position: absolute;
            content: '';
            width: 0;
            height: 0;
            border-top: 16px solid var(--text-copy-secondary);
            border-left: 16px solid transparent;
            left: -16px;
            top: 0;
            @media (max-width: 767px) {
              left: auto;
              right: -16px;
              border-left: none;
              border-right: 16px solid transparent;
            }
          }

          .ion-ios-circle-filled {
            left: -41px;
            @media (max-width: 767px) {
              left: auto;
              right: -7.8vw;
            }
          }
        }

        &:not(:nth-child(1)) {
          margin-top: -60px;
        }

        .ion-ios-circle-filled {
          position: absolute;
          top: -10px;
          right: 0;
        }
      }
    }
  }
}
</style>
