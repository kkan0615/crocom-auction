<template>
  <button
    class="flex items-center justify-center"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TButton',
  setup () {
    return
  }
})
</script>
