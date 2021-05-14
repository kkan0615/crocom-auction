<template>
  <div>
    <div
      class="mb-2"
    >
      <filter-label>
        current price
      </filter-label>
      <div
        class="flex"
      >
        <t-text-input
          v-model="currentPriceStart"
        />
        <div
          class="mx-1"
        >
          ~
        </div>
        <t-text-input
          v-model="currentPriceEnd"
        />
      </div>
      <filter-label>
        buy out price
      </filter-label>
      <div
        class="flex"
      >
        <t-text-input
          v-model="buyOutStart"
        />
        <div
          class="mx-1"
        >
          ~
        </div>
        <t-text-input
          v-model="buyOutEnd"
        />
      </div>
    </div>
    <t-button
      class="mx-auto"
      @click="onClickSearchButton"
    >
      search
    </t-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import FilterLabel from '@/components/typography/FilterLabel/index.vue'
import TTextInput from '@/components/tailwind/input/Text/index.vue'
import TButton from '@/components/tailwind/Button/index.vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'PriceSearchListProduct',
  components: { TButton, TTextInput, FilterLabel },
  setup () {
    const router = useRouter()
    const route = useRoute()

    const currentPriceStart = ref(0)
    const currentPriceEnd = ref(0)
    const buyOutStart = ref(0)
    const buyOutEnd = ref(0)

    const onClickSearchButton = async () => {
      const priceSearchQuery = {
        currentPriceStart: currentPriceStart.value,
        currentPriceEnd: currentPriceEnd.value,
        buyOutStart: buyOutStart.value,
        buyOutEnd: buyOutEnd.value,
      }
      await router.push({ name: route.name, query: { ...route.query, ...priceSearchQuery  } })
    }

    return {
      currentPriceStart,
      currentPriceEnd,
      buyOutStart,
      buyOutEnd,
      onClickSearchButton,
    }
  }
})
</script>
