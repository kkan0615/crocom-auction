<template>
  <div
    class="mt-1 mb-2"
  >
    <div
      class="cursor-pointer text-sm font-bold"
      @click="onClickAllOption"
    >
      all
    </div>
    <t-rating
      v-for="i in 6"
      :key="i"
      class="cursor-pointer"
      :rating="5 - i + 1"
      :max="5"
      @click="onClickFilterOption(5 - i + 1)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TRating from '@/components/tailwind/Rating/index.vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'ProductListRatingFilter',
  components: { TRating },
  setup () {
    const router = useRouter()
    const route = useRoute()

    const onClickAllOption = () => {
      console.log('onClickAllOption')
    }

    const onClickFilterOption = async (starNum: number) => {
      await router.push({ name:  route.name, query: { ...route.query, maxStar: starNum } })
    }

    return {
      onClickAllOption,
      onClickFilterOption,
    }
  }
})
</script>
