<template>
  <div>
    <div class="flex space-x-1 w-full">
      <div
        v-for="num in max"
        :key="num"
        class="flex items-center"
      >
        <svg
          class="w-6 h-6"
          :class="{
            'text-yellow-500': num <= rating
          }"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          @click="onClickStar(num)"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <slot
          name="append"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TRating',
  props: {
    rating: {
      type: Number,
      required: false,
      default: 0,
    },
    max: {
      type: Number,
      required: false,
      default: 1,
    },
  },
  setup () {
    const onClickStar = (num: number) => {
      console.log('onClickStar', num)
    }

    return {
      onClickStar
    }
  }
})
</script>
