<template>
  <div
    class="h-full w-full"
  >
    <!--  input  -->
    <input
      ref="inputRef"
      type="file"
      hidden
      alt=""
      :multiple="multiple"
      :accept="accept"
      @change="onChangeInput"
    >
    <!-- button -->
    <div
      class="h-full flex items-center justify-center ring-1"
    >
      <div
        class="p-2 rounded-full ring-1"
      >
        <t-button
          text
          class="text-primary-500 rounded-full"
          @click="onClickAddButton"
        >
          <t-material-icon>
            add
          </t-material-icon>
        </t-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import TMaterialIcon from '@/components/tailwind/icon/Material/index.vue'
import TButton from '@/components/tailwind/Button/index.vue'

export default defineComponent({
  name: 'TFileDragAndDrop',
  components: { TButton, TMaterialIcon },
  props: {
    multiple: {
      type: Boolean,
      required: false,
      default: false,
    },
    accept: {
      type: String,
      required: false,
      default: '*/*',
    },
  },
  setup () {
    const inputRef = ref<HTMLInputElement>(null)

    /**
     * For click event on add button
     */
    const onClickAddButton = () => {
      if (inputRef.value) {
        inputRef.value.click()
      }
    }

    /**
     * handle input change event, run after selecting files
     * @param event - input event
     */
    const onChangeInput = (event: Event) => {
      const target = event.target as HTMLInputElement
      if (!target)
        return

      console.log(target.files)
    }

    return {
      inputRef,
      onClickAddButton,
      onChangeInput,
    }
  }
})
</script>
