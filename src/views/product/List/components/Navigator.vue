<template>
  <div
    class="flex flex-col"
  >
    <div
      class="text-sm"
    >
      필터
    </div>
    <t-divider
      class="my-2"
    />
    <div>
      <filter-label>
        별점
      </filter-label>
      <product-list-rating-filter />
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
import FilterLabel from '@/components/typography/FilterLabel/index.vue'
import TTextInput from '@/components/tailwind/input/Text/index.vue'
import TDivider from '@/components/tailwind/Divider/index.vue'
import ProductListRatingFilter from '@/views/product/List/components/RatingFilter.vue'

export default defineComponent({
  name: 'NavigatorListProduct',
  components: { ProductListRatingFilter, TDivider, TTextInput, FilterLabel },
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
