<template>
  <div
    class="w-full"
  >
    <!--  label  -->
    <label
      v-if="label"
    >
      <slot
        name="label"
      >
        <div
          class="block text-lg font-medium text-gray-700 font-bold mb-1"
        >
          {{ label }}
        </div>
      </slot>
    </label>
    <!--  input part  -->
    <div
      class="flex items-center ring-1"
    >
      <!--   pre-append   -->
      <div
        class="flex-shrink"
      >
        <slot
          name="preAppend"
        />
      </div>
      <div
        class="flex-grow"
        :class="{
          [`h-${height}`]: true
        }"
      >
        <slot />
      </div>
      <div
        v-if="clearable"
        class="flex-shrink"
      >
        <t-button
          class="flex justify-center items-center px-2"
          @click="onClickClearableButton"
        >
          <t-material-icon
            class="ring-1 rounded-md"
          >
            clear
          </t-material-icon>
        </t-button>
      </div>
      <!--   append   -->
      <div
        class="flex-shrink"
      >
        <slot
          name="append"
        />
      </div>
    </div>
    <!--  error  -->
    <div
      v-if="errorMessage"
      class="text-sm sm:text-base text-red-500"
    >
      {{ errorMessage }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, useContext } from 'vue'
import TMaterialIcon from '@/components/tailwind/icon/Material/index.vue'
import { inputBoxProps } from '@/components/tailwind/input/Input/data/props'
import TButton from '@/components/tailwind/Button/index.vue'

export default defineComponent({
  name: 'TInput',
  components: { TButton, TMaterialIcon },
  props: {
    ...inputBoxProps
  },
  setup () {
    const { emit } = useContext()

    const errorMessage = ref('')

    const onClickClearableButton = (event: MouseEvent) => {
      emit('click:clearableButton', event)
    }

    return {
      errorMessage,
      onClickClearableButton,
    }
  }
})
</script>
