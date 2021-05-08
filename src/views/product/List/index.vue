<template>
  <div
    class="sm:w-3/5 ml-auto mr-auto flex mt-4"
  >
    <div
      class="flex"
    >
      <div
        class="w-2/12 h-full mr-2 ring"
      >
        <navigator-list-product />
      </div>
      <div
        class="w-10/12 h-full ml-2"
      >
        <t-grid
          :cols="4"
          :gap="4"
        >
          <product-detail-product
            v-for="product in productList"
            :key="product.id"
            :product="product"
          />
        </t-grid>
        <list-product-pagination
          class="mt-2"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import useStore from '@/store'
import { ProductActionTypes } from '@/store/modules/product/actions'
import NavigatorListProduct from '@/views/product/List/components/Navigator.vue'
import TGrid from '@/components/tailwind/grid/Default/index.vue'
import ProductDetailProduct from '@/views/product/Detail/components/Product.vue'
import { ProductListInfo } from '@/interfaces/model/product/product'
import { generateRandomIntNumber } from '@/utils/random'
import ListProductPagination from '@/views/product/List/components/Pagination.vue'

export default defineComponent({
  name: 'ListProduct',
  components: { ListProductPagination, ProductDetailProduct, TGrid, NavigatorListProduct, },
  setup () {
    const store = useStore()

    const productList = computed(() => {
      return store.state.product.productList.map(product => {
        const newProduct: ProductListInfo = {
          ...product
        } as ProductListInfo

        newProduct.hot = generateRandomIntNumber(0, 1) === 1
        return newProduct
      }).sort((a: ProductListInfo, b: ProductListInfo) => {
        if (a.hot && b.hot)
          return 0
        else if (a.hot)
          return 1
        else if (b.hot)
          return -1

        return 0
      })
    })

    onMounted(async () => {
      store.dispatch(ProductActionTypes.LOAD_PRODUCT_LIST)
    })

    return {
      productList
    }
  }
})
</script>
