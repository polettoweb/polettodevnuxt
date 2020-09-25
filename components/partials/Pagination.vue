<template>
  <div v-if="length > 5" class="flex justify-between text-xl items-center">
    <span
      :class="[
        'pagination',
        {
          'text-gray-400 hover:text-gray-400 cursor-not-allowed disabled':
            page < 1,
        },
      ]"
      @click="onPrev"
    >
      &larr; PREV
    </span>
    <div class="text-base">{{ page + 1 }} of {{ Math.ceil(length / 5) }}</div>
    <span
      :class="[
        'pagination',
        {
          'text-gray-400 hover:text-gray-400 cursor-not-allowed disabled':
            page >= Math.floor(length / 5),
        },
      ]"
      @click="onNext"
    >
      NEXT &rarr;
    </span>
  </div>
</template>

<script>
export default {
  props: {
    length: {
      type: Number,
      required: true,
    },
    page: {
      type: Number,
      required: true,
    },
    onNext: {
      type: Function,
      required: true,
    },
    onPrev: {
      type: Function,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.pagination {
  &:not(.cursor-not-allowed) {
    cursor: pointer;
  }
}
</style>
