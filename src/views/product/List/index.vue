<template>
  <div
    class="sm:w-3/5 ml-auto mr-auto flex mt-4"
  >
    <t-flex-grid>
      <div
        class="w-3/12 mr-2 ring"
      >
        <navigator-list-product />
      </div>
      <div
        class="w-9/12 ml-2 ring"
      >
        content
      </div>
    </t-flex-grid>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TFlexGrid from '@/components/tailwind/grid/Flex/index.vue'
import NavigatorListProduct from '@/views/product/List/components/Navigator.vue'

export default defineComponent({
  name: 'ListProduct',
  components: { NavigatorListProduct, TFlexGrid },
  setup () {
    return
  }
})
</script>
