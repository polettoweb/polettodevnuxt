<template>
  <li class="expcard" data-cy="expcard">
    <svg
      class="ion-ios-circle-filled"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
    >
      <circle cx="12" cy="12" r="12" fill="rgb(62, 176, 239)" />
    </svg>
    <div class="expcard__title bg-background-secondary">
      <p class="text-copy-secondary">{{ title }}</p>
    </div>
    <div class="expcard__text">
      <p class="expcard__location text-copy-secondary">{{ location }}</p>
      <p class="expcard__date">{{ date }}</p>
      <p class="expcard__copy">{{ text }}</p>
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
  },
}
</script>

<style>
.expcard__title {
  border: 2px solid var(--text-copy-secondary);
}
</style>
