<template>
  <div
    class="sm:w-3/5 w-full ml-auto mr-auto sm:flex mt-4 sm:gap-4"
  >
    <product-detail-images
      class="sm:w-4/5"
    />
    <div
      class="sm:w-4/5"
    >
      <product-detail-information />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import useStore from '@/store'
import { ProductActionTypes } from '@/store/modules/product/actions'
import { useRoute, useRouter } from 'vue-router'
import ProductDetailImages from '@/views/product/Detail/components/Images.vue'
import ProductDetailInformation from '@/views/product/Detail/components/Information.vue'

export default defineComponent({
  name: 'ProductDetail',
  components: { ProductDetailInformation, ProductDetailImages },
  setup () {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()

    onMounted(async () => {
      const { id } = route.params

      if (Number(id)) {
        const responseData = await store.dispatch(ProductActionTypes.LOAD_CURRENT_PRODUCT, Number(id)) as boolean

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
