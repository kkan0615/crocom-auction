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
      <t-number-input
        clearable
        label="인상가"
      />
    </div>
    <div>
      <t-date-picker
        v-model:model-value="endDate"
        label="종료일"
      />
    </div>
    <div>
      <t-select-input
        label="test"
        item-text="text"
        item-value="id"
        :items="[
          {
            id: 1,
            text: 'test 1',
          },
          {
            id: 2,
            text: 'test 2',
          }
        ]"
      />
    </div>
    <div>
      tags
    </div>
    <div>
      content
    </div>
    <t-divider />
    <div
      class="flex"
    >
      <t-button
        class="ml-auto"
      >
        <t-material-icon
          class="mr-2"
        >
          save
        </t-material-icon>
        save
      </t-button>
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
import TButton from '@/components/tailwind/Button/index.vue'
import TMaterialIcon from '@/components/tailwind/icon/Material/index.vue'
import TDivider from '@/components/tailwind/Divider/index.vue'
import TSelectInput from '@/components/tailwind/input/Select/index.vue'

export default defineComponent({
  name: 'FormProduct',
  components: { TSelectInput, TDivider, TMaterialIcon, TButton, TDatePicker, TNumberInput, TFileDragAndDrop, TTextInput },
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
