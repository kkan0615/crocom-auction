<template>
  <div>
    <t-form>
      <t-text-input />
    </t-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TForm from '@/components/tailwind/Form/index.vue'
import TTextInput from '@/components/tailwind/input/Text/index.vue'

export default defineComponent({
  name: 'ProductBiddingForm',
  components: { TTextInput, TForm },
  setup () {
    return
  }
})
</script>
