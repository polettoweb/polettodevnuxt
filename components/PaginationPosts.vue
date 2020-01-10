<template>
  <div class="flex justify-between text-xl items-center">
    <nuxt-link
      :to="previousPage"
      :class="{
        'text-gray-400 hover:text-gray-400 cursor-not-allowed': !showPreviousPage
      }"
      >&larr; Prev</nuxt-link
    >
    <div class="text-base">Page {{ currentPage }} of {{ totalPages }}</div>
    <nuxt-link
      :to="nextPage"
      :class="{
        'text-gray-400 hover:text-gray-400 cursor-not-allowed': !showNextPage
      }"
      >Next &rarr;</nuxt-link
    >
  </div>
</template>

<script>
export default {
  props: {
    base: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  computed: {
    showPreviousPage() {
      return this.currentPage !== 1
    },
    previousPage() {
      return [0, 1].includes(this.currentPage - 1)
        ? this.base
        : `${this.base}/${this.currentPage - 1}`
    },
    showNextPage() {
      return this.currentPage !== this.totalPages
    },
    nextPage(currentPage, totalPages) {
      return this.totalPages > this.currentPage
        ? `${this.base}/${this.currentPage + 1}`
        : `${this.base}/${this.currentPage}`
    }
  }
}
</script>
