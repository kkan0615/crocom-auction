<template>
  <div
    class="sm:w-3/5 w-full ml-auto mr-auto"
  >
    <div
      class="sm:flex mt-4 sm:gap-4"
    >
      <product-detail-images
        class="sm:w-3/5"
      />
      <div
        class="sm:w-2/5"
      >
        <product-detail-information />
      </div>
    </div>
    <div class="mt-12">
      <nav class="flex flex-col sm:flex-row">
        <button class="text-gray-600 py-1 px-3 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500">
          Tab 1
        </button><button class="text-gray-600 py-1 px-3 block hover:text-blue-500 focus:outline-none">
          Tab 2
        </button>
      </nav>
    </div>
    <product-detail-content />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import useStore from '@/store'
import { ProductActionTypes } from '@/store/modules/product/actions'
import { useRoute, useRouter } from 'vue-router'
import ProductDetailImages from '@/views/product/Detail/components/Images.vue'
import ProductDetailInformation from '@/views/product/Detail/components/Information.vue'
import ProductDetailContent from '@/views/product/Detail/components/Content.vue'

export default defineComponent({
  name: 'ProductDetail',
  components: { ProductDetailContent, ProductDetailInformation, ProductDetailImages },
  setup () {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()

    onMounted(async () => {
      const { id } = route.params

      if (Number(id)) {
        const responseData = await store.dispatch(ProductActionTypes.LOAD_CURRENT_PRODUCT, Number(id))

        /* If no product matched with id */
        if (!responseData)
          await router.push({ name: 'home' })
      } else
        await router.push({ name: 'home' })
    })

    return
  }
})
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
