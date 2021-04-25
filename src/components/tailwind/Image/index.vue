<template>
  <div
    class="w-full h-full"
  >
    <img
      :alt="alt"
      :src="src"
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Timage',
  props: {
    src: {
      type: String,
      required: true,
      default: '',
    },
    alt: {
      type: String,
      required: true,
      default: '',
    },
  },
  setup () {
    return
  }
})
</script>
