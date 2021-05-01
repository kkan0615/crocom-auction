<template>
  <button
    type="button"
    class="flex items-center justify-center px-2 py-1 focus:outline-none shadow text-sm"
    :class="buttonClasses"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'TButton',
  props: {
    text: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  setup (props) {
    const buttonClasses = computed(() => {
      return {
        'bg-primary-500 ': !props.text,
        'text-textPrimary-500': !props.text,
      }
    })
    return {
      buttonClasses,
    }
  }
})
</script>
