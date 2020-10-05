<template>
  <li class="expcard clear-both h-auto relative bg-background-secondary shadow-lg" data-cy="expcard">
    <svg class="ion-ios-circle-filled" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <circle cx="12" cy="12" r="12" fill="rgb(62, 176, 239)" />
    </svg>
    <div class="p-5 bg-copy-secondary">
      <p class="font-bold leading-8 text-xl text-background-secondary">
        {{ title }}
      </p>
    </div>
    <div class="w-full h-auto py-6 px-2 bg-background-secondary">
      <p class="pt-0 px-6 pb-3 text-copy-secondary uppercase font-bold">
        {{ location }}
      </p>
      <div class="flex flex-wrap items-center justify-start px-6">
        <span class="mb-4 mr-4">Stack:</span>
        <p v-for="(tech, i) in techs" :key="tech" class="text-sm text-copy-secondary mb-4">
          {{ tech }}
          <span v-if="i + 1 != techs.length" class="text-copy-primary mx-2"> | </span>
        </p>
      </div>
      <p class="pt-0 px-6 pb-3 font-bold">{{ date }}</p>
      <p class="py-0 px-6">{{ text }}</p>
    </div>
  </li>
</template>

<script>
export default {
  name: 'ExpCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: false,
      default: '',
    },
    date: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    techs: {
      type: Array,
      required: false,
      default: () => null,
    },
  },
}
</script>

<style>
.expcard__title {
  border: 2px solid var(--text-copy-secondary);
}
</style>
