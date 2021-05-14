<template>
  <div
    class="sm:w-3/5 h-full w-full ml-auto mr-auto"
  >
    <product-bidding-form />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import useStore from '@/store'
import { useRoute, useRouter } from 'vue-router'
import { ProductActionTypes } from '@/store/modules/product/actions'
import dayjs from 'dayjs'
import ProductBiddingForm from '@/views/product/Bidding/components/Form.vue'

export default defineComponent({
  name: 'ProductBidding',
  components: { ProductBiddingForm },
  setup () {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()

    const currentProduct = computed(() => store.state.product.currentProduct)
    const isOver = computed(() => dayjs(currentProduct.value.endDatetime).diff(dayjs(), 'minute') < 5)

    onMounted(async () => {
      const { id } = route.params

      if (Number(id)) {
        console.log(Number(id))
        const responseData = await store.dispatch(ProductActionTypes.LOAD_CURRENT_PRODUCT, Number(id))

        /* If no product matched with id or time is over */
        if (!responseData || isOver.value) {
          await router.push({ name: 'Home' })
        }
      } else {
        await router.push({ name: 'Home' })
      }
    })

    return
  }
})
</script>
