<template>
  <div
    class="text-2xl font-bold"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FilterLabel',
  setup () {
    return
  }
})
</script>
