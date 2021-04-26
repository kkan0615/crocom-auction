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
        class="rounded p-2 ring-1"
      >
        <button
          class="flex items-center justify-center"
          @click="onClickAddButton"
        >
          <slot>
            <t-material-icon
              class="text-primary-500 "
            >
              add
            </t-material-icon>
          </slot>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import TMaterialIcon from '@/components/tailwind/icon/Material/index.vue'

export default defineComponent({
  name: 'TFileDragAndDrop',
  components: { TMaterialIcon },
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
