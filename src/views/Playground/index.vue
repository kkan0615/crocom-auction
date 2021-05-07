<template>
  <div
    class="p-4"
  >
    test:
    {{ userInfo }}
    <t-button
      @click="onClickTest"
    >
      click me
    </t-button>
    <t-dialog
      v-model:model-value="testDialog"
    >
      test
    </t-dialog>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, defineComponent, ref } from 'vue'
import useStore from '@/store'
import TButton from '@/components/tailwind/Button/index.vue'
import TDialog from '@/components/tailwind/Dialog/index.vue'

export default defineComponent({
  name: 'Playground',
  components: { TDialog, TButton },
  setup () {
    const store = useStore()

    const userInfo = computed(() => store.state.user)

    const testDialog = ref(false)

    onMounted(() => {
      console.log(store)
      console.log(userInfo)
    })

    const onClickTest = () => {
      testDialog.value = true
    }

    return {
      userInfo,
      testDialog,
      onClickTest
    }
  }
})
</script>
