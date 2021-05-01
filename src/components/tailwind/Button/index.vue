<template>
  <button
    type="button"
    class="flex items-center justify-center px-2 py-1 uppercase focus:outline-none leading-6 text-sm ripple"
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
    },
    block: {
      type: Boolean,
      required: false,
      default: false,
    },
    rounded: {
      type: Boolean,
      required: false,
      default: false,
    },
    shadow: {
      type: Boolean,
      required: false,
      default: false,
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
    },
  },
  setup (props) {
    const buttonClasses = computed(() => {
      return {
        [`bg-${props.color}-500`]: !props.text,
        [`text-${props.textColor}-500`]: !props.text,
        ['w-full']: props.block,
        ['rounded-md']: props.rounded,
        ['shadow']: props.shadow
      }
    })
    return {
      buttonClasses,
    }
  }
})
</script>
