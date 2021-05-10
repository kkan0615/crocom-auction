<template>
  <div>
    <!--    {{ product }}-->
    <div
      class="text-2xl font-bold mb-2"
    >
      {{ product.title }}
    </div>
    <div>
      <t-rating
        :rating="product.rating"
        :max="5"
        :size="4"
        readonly
      />
    </div>
    <t-divider
      class="my-2"
    />
    <div
      class="text-lg font-bold text-red-500"
    >
      $ {{ product.currentPrice }}
    </div>
    <t-divider
      class="my-2"
    />
    <div>
      <product-detail-countdown
        :time="product.endDatetime"
      />
    </div>
    <t-button
      disabled
      block
    >
      pay
    </t-button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import useStore from '@/store'
import TRating from '@/components/tailwind/Rating/index.vue'
import TDivider from '@/components/tailwind/Divider/index.vue'
import ProductDetailCountdown from '@/views/product/Detail/components/Countdown.vue'
import TButton from '@/components/tailwind/Button/index.vue'

export default defineComponent({
  name: 'ProductDetailInformation',
  components: { TButton, ProductDetailCountdown, TDivider, TRating },
  setup () {
    const store = useStore()

    const product = computed(() => store.state.product.currentProduct)

    return {
      product,
    }
  }
})
</script>
