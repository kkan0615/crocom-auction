<template>
  <div
    class="w-full flex justify-center"
  >
    <t-pagination
      :model-value="currentPage"
      :max-count="30"
      @click:page="onClickPage"
      @click:previous="onClickPrev"
      @click:next="onClickNext"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import TPagination from '@/components/tailwind/Pagintation/index.vue'
import useStore from '@/store'
import { selectCountDummyProducts } from '@/dummy/model/product/product'
import { ProductActionTypes } from '@/store/modules/product/actions'

export default defineComponent({
  name: 'ListProductPagination',
  components: { TPagination },
  setup () {
    const store = useStore()

    const maxPageCount = ref(0)

    const currentPage = computed(() => store.state.product.productListCurrentPage)

    onMounted(async () => {
      maxPageCount.value = await selectCountDummyProducts()
    })

    const onClickPage = (pageNum: number) => {
      store.dispatch(ProductActionTypes.SET_PRODUCT_LIST_CURRENT_PAGE, pageNum)
    }

    const onClickPrev = (pageNum: number) => {
      store.dispatch(ProductActionTypes.SET_PRODUCT_LIST_CURRENT_PAGE, pageNum)
    }

    const onClickNext = (pageNum: number) => {
      store.dispatch(ProductActionTypes.SET_PRODUCT_LIST_CURRENT_PAGE, pageNum)
    }

    return {
      currentPage,
      maxPageCount,
      onClickPage,
      onClickPrev,
      onClickNext,
    }
  }
})
</script>
