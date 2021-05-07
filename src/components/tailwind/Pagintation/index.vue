<template>
  <ul class="flex pl-0 list-none rounded my-2">
    <t-pagination-page
      class="rounded-l"
      @click="onClickPrev"
    >
      Previous
    </t-pagination-page>
    <t-pagination-page
      v-for="i in count"
      :key="i"
      :class="{
        [`bg-${color}-500`]: i === modelValue,
        [`text-${textColor}-500`]: i === modelValue,
      }"
      @click="onClickPage(i)"
    >
      {{ i }}
    </t-pagination-page>
    <t-pagination-page
      class="rounded-r border-r"
      @click="onClickNext"
    >
      Next
    </t-pagination-page>
  </ul>
</template>

<script lang="ts">
import { defineComponent, useContext } from 'vue'
import TPaginationPage from '@/components/tailwind/Pagintation/components/Page.vue'

export default defineComponent({
  name: 'TPagination',
  components: { TPaginationPage },
  props: {
    modelValue: {
      type: Number,
      required: false,
      default: 1,
    },
    count: {
      type: Number,
      required: false,
      default: 5,
    },
    visibleCount: {
      type: Number,
      required: false,
      default: 1,
    },
    color: {
      type: String,
      required: false,
      default: 'primary',
    },
    textColor: {
      type: String,
      required: false,
      default: 'textPrimary',
    }
  },
  setup () {
    const { emit } = useContext()

    const onClickPage = (pageNum: number) => {
      emit('click:page', pageNum)
    }

    const onClickPrev = () => {
      emit('click:previous')
    }

    const onClickNext = () => {
      emit('click:next')
    }

    return {
      onClickPage,
      onClickPrev,
      onClickNext,
    }
  }
})
</script>
