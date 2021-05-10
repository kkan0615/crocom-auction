<template>
  <div>
    <div class="flex space-x-1 w-full">
      <div
        v-for="num in max"
        :key="num"
        class="flex items-center"
      >
        <t-material-icon
          class="text-gray-500"
          :class="{
            'text-yellow-500': num <= rating,
            [`w-${size}`]: true,
            [`h-${size}`]: true,

          }"
          @click="onClickStar(num)"
        >
          <!--          <span-->
          <!--            v-if="num <= rating"-->
          <!--          >-->
          star_outline
          <!--          </span>-->
          <!--          <span-->
          <!--            v-else-->
          <!--          >-->
          <!--            star-->
          <!--          </span>-->
        </t-material-icon>
        <slot
          name="append"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TMaterialIcon from '@/components/tailwind/icon/Material/index.vue'

export default defineComponent({
  name: 'TRating',
  components: { TMaterialIcon },
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
    size: {
      type: Number,
      required: false,
      default: 6,
    },
    readonly: {
      type: Boolean,
      required: false,
      default: false,
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
