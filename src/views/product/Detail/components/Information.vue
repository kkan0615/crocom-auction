<template>
  <div>
    <!--    {{ product }}-->
    <div
      v-if="product.User"
    >
      {{ product.User.name }}
    </div>
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
    <div>
      <div
        class="text-sm"
      >
        Current price
      </div>
      <div
        class="text-lg font-bold text-red-500"
      >
        $ {{ product.currentPrice }}
      </div>
    </div>
    <t-divider
      class="my-2"
    />
    <div
      class="mb-2"
    >
      <div
        class="text-sm"
      >
        Created{{ product.updatedAt ? '(Updated)' : '' }} Time
      </div>
      <div
        class="text-2xl font-bold "
      >
        {{ productCreateOrUpdatedAt }}
      </div>
    </div>
    <div
      class="mb-2"
    >
      <div
        class="text-sm"
      >
        Time Remaining
      </div>
      <product-detail-countdown
        :time="product.endDatetime"
      />
    </div>
    <div
      class="mb-4"
    >
      <div
        class="text-sm"
      >
        Number of Bids
      </div>
      <div
        class="text-lg"
      >
        {{ product.currentAttenders }}
      </div>
    </div>
    <div>
      <t-chip
        v-for="tag in product.Tags"
        :key="tag.id"
      >
        {{ tag.name }}
      </t-chip>
    </div>
    <t-button
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
import TChip from '@/components/tailwind/Chip/index.vue'
import dayjs from 'dayjs'

export default defineComponent({
  name: 'ProductDetailInformation',
  components: { TChip, TButton, ProductDetailCountdown, TDivider, TRating },
  setup () {
    const store = useStore()

    const product = computed(() => store.state.product.currentProduct)

    const productCreateOrUpdatedAt = computed(() => dayjs(product.value.updatedAt || product.value.createdAt).format('lll'))

    return {
      product,
      productCreateOrUpdatedAt,
    }
  }
})
</script>
