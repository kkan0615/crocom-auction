<template>
  <div>
    <div
      class="w-1/4 ml-auto"
    >
      <t-select-input
        v-model="selectedItems"
        multiple
        :items="filterSelections"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import TSelectInput from '@/components/tailwind/input/Select/index.vue'
import { filterSelections } from '@/views/product/List/data/FilterSelection'

export default defineComponent({
  name: 'ProductListHeader',
  components: { TSelectInput },
  setup () {
    const selectedItems = ref([])
    return {
      selectedItems,
      filterSelections
    }
  }
})
</script>
