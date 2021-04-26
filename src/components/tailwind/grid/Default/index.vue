<template>
  <div
    class="grid"
    :class="{
      [`grid-col-${cols}`]: true,
      [`gap-${gap}`]: true,
      [`grid-${flow}`]: true,
    }"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TGrid',
  props: {
    cols: {
      type: Number,
      require: false,
      default: 12,
    },
    gap: {
      type: Number,
      require: false,
      default: 4,
    },
    flow: {
      type: String,
      require: false,
      default: 'flow-row',
    },
  },
  setup () {
    return
  }
})
</script>
