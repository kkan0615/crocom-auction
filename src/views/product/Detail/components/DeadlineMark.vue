<template>
  <div
    class="absolute hot-mark bg-red-500 text-white flex justify-center items-center p-1"
  >
    <t-material-icon>
      timer
    </t-material-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TMaterialIcon from '@/components/tailwind/icon/Material/index.vue'

export default defineComponent({
  name: 'ProductDetailDeadLine',
  components: { TMaterialIcon },
  setup () {
    return
  }
})
</script>
