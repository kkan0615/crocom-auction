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
    <price-search-list-product />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import TDivider from '@/components/tailwind/Divider/index.vue'
import PriceSearchListProduct from '@/views/product/List/components/PriceSearch.vue'

export default defineComponent({
  name: 'NavigatorListProduct',
  components: { PriceSearchListProduct, TDivider },
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
