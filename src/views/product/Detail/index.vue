<template>
  <div
    class="sm:w-3/5 h-full w-full ml-auto mr-auto"
  >
    <div
      class="sm:flex h-full sm:gap-4"
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
      <t-tabs
        v-model:model-value="currentTab"
      >
        <t-tab>
          tab 1
        </t-tab>
        <t-tab>
          tab 2
        </t-tab>
      </t-tabs>
      <product-detail-content
        class="mb-2"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import useStore from '@/store'
import { ProductActionTypes } from '@/store/modules/product/actions'
import { useRoute, useRouter } from 'vue-router'
import ProductDetailImages from '@/views/product/Detail/components/Images.vue'
import ProductDetailInformation from '@/views/product/Detail/components/Information.vue'
import ProductDetailContent from '@/views/product/Detail/components/Content.vue'
import TTabs from '@/components/tailwind/Tabs/index.vue'
import TTab from '@/components/tailwind/Tabs/components/Tab.vue'

export default defineComponent({
  name: 'ProductDetail',
  components: { TTab, TTabs, ProductDetailContent, ProductDetailInformation, ProductDetailImages },
  setup () {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()

    const currentTab = ref(0)

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

    onUnmounted(async () => {
      await store.dispatch(ProductActionTypes.SET_CURRENT_PRODUCT, {})
    })

    return {
      currentTab
    }
  }
})
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
