<template>
  <div
    class="whitespace-pre py-4"
  >
    {{ productContent }}
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import useStore from '@/store'

export default defineComponent({
  name: 'ProductDetailContent',
  setup () {
    const store = useStore()

    const productContent = computed(() => store.state.product.currentProduct.content)

    return {
      productContent
    }
  }
})
</script>
