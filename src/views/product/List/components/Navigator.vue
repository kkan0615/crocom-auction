<template>
  <div
    class="flex flex-col"
  >
    <div>
      상품분류
    </div>
    <div>
      <filter-label>
        별점
      </filter-label>
      <t-rating
        v-model:rating="test"
        :max="5"
      />
    </div>
    <div>
      <filter-label>
        가격
      </filter-label>
      <t-text-input
        v-model="test"
        @update:modelValue="testINput"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import TRating from '@/components/tailwind/Rating/index.vue'
import FilterLabel from '@/components/typography/FilterLabel/index.vue'
import TTextInput from '@/components/tailwind/input/Text/index.vue'

export default defineComponent({
  name: 'NavigatorListProduct',
  components: { TTextInput, FilterLabel, TRating },
  setup () {
    const test = ref(3)

    const testINput = (test1: any) => {
      console.log('hi', test1)
      test.value = Number(test1)
    }

    return {
      test,
      testINput
    }
  }
})
</script>
