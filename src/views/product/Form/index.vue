<template>
  <div
    class="sm:w-3/5 ml-auto mr-auto flex flex-col gap-3 mt-4"
  >
    <div>
      상품이미지
      <div
        class="flex items-center gap-2"
      >
        <div
          class="h-32 w-1/4"
        >
          <t-file-drag-and-drop
            accept="image/*"
          />
        </div>
      </div>
    </div>
    <div>
      <t-text-input
        v-model:model-value="title"
        clearable
        label="제목"
      />
    </div>
    <div>
      <t-number-input
        clearable
        label="시작 가격"
      />
    </div>
    <div>
      <t-date-picker
        v-model:model-value="endDate"
        label="종료일"
      />
    </div>
    <div>
      tags
    </div>
    <div>
      content
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import TTextInput from '@/components/tailwind/input/Text/index.vue'
import TFileDragAndDrop from '@/components/tailwind/input/dragAndDrop/File/index.vue'
import TNumberInput from '@/components/tailwind/input/Number/index.vue'
import TDatePicker from '@/components/tailwind/input/picker/Date/index.vue'
import dayjs from 'dayjs'

export default defineComponent({
  name: 'FormProduct',
  components: { TDatePicker, TNumberInput, TFileDragAndDrop, TTextInput },
  setup () {
    const title = ref('')
    const endDate = ref(dayjs().format('YYYY-MM-DD'))

    return {
      title,
      endDate,
    }
  }
})
</script>
