<template>
  <div>
    test:
    {{ userInfo }}
  </div>
</template>

<script lang="ts">
import { computed, onMounted, defineComponent } from 'vue'
import useStore from '@/store'

export default defineComponent({
  name: 'Playground',
  setup () {
    const store = useStore()

    const userInfo = computed(() => store.state.user)

    onMounted(() => {
      console.log(store)
      console.log(userInfo)
    })

    return {
      userInfo
    }
  }
})
</script>
