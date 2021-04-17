<template>
  <main
    class="w-full"
  >
    <header-general-layout />
    <div
      class="w-standard ml-auto mr-auto"
    >
      general layout
      <router-view />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderGeneralLayout from '@/layouts/General/components/Header.vue'

export default defineComponent({
  name: 'GeneralLayout',
  components: { HeaderGeneralLayout },
  setup () {
    return
  }
})
</script>
