<template>
  <div
    class="w-full flex justify-center"
  >
    <t-pagination
      @click="onClickNext"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TPagination from '@/components/tailwind/Pagintation/index.vue'

export default defineComponent({
  name: 'ListProductPagination',
  components: { TPagination },
  setup () {
    const onClickPage = (pageNum: number) => {
      console.log('pageNum', pageNum)
    }

    const onClickPrev = () => {
      console.log('prev')
    }

    const onClickNext = () => {
      console.log('next')
    }

    return {
      onClickPage,
      onClickPrev,
      onClickNext,
    }
  }
})
</script>
