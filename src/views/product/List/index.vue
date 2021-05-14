<template>
  <div
    class="sm:w-3/5 h-full ml-auto mr-auto my-2"
  >
    <div
      class="flex h-full"
    >
      <div
        class="w-2/12 h-full mr-2"
      >
        <navigator-list-product />
      </div>
      <div
        class="w-10/12 ml-2"
      >
        <product-list-header
          class="mb-2"
        />
        <t-grid
          :cols="4"
          :gap="4"
        >
          <product-list-product
            v-for="product in productList"
            :key="product.id"
            :product="product"
          />
        </t-grid>
        <list-product-pagination
          class="mb-2"
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
import { ProductListInfo } from '@/interfaces/model/product/product'
import { generateRandomIntNumber } from '@/utils/random'
import ListProductPagination from '@/views/product/List/components/Pagination.vue'
import ProductListProduct from '@/views/product/List/components/Product.vue'
import ProductListHeader from '@/views/product/List/components/Header.vue'

export default defineComponent({
  name: 'ListProduct',
  components: { ProductListHeader, ProductListProduct, ListProductPagination, TGrid, NavigatorListProduct, },
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
