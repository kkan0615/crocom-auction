<template>
  <t-input
    :label="label"
    :height="height"
    :model-value="modelValue"
    :clearable="clearable"
    @click:clearableButton="onClickClearableButton"
  >
    <select
      class="text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none h-full px-2"
      name="name"
      :value="modelValue"
      @change="onChangeValue"
    >
      <option
        v-for="item in items"
        :key="item"
        :value="!!itemValue ? item[itemValue] : item"
      >
        <slot
          name="item"
          :item="item"
        >
          {{ !!itemText ? item[itemText] : item }}
        </slot>
      </option>
    </select>
  </t-input>
</template>

<script lang="ts">
import { defineComponent, ref, useContext } from 'vue'
import { inputBoxProps } from '@/components/tailwind/input/Base/types/props'
import { inputSelectProps } from '@/components/tailwind/input/Select/type'
import TInput from '@/components/tailwind/input/Base/index.vue'

export default defineComponent({
  name: 'TSelectInput',
  components: { TInput },
  props: {
    ...inputSelectProps,
    ...inputBoxProps
  },
  setup () {
    const { emit } = useContext()

    const inputRef = ref<HTMLInputElement>(null)

    const onChangeValue = (event: InputEvent) => {
      const target = event.target as HTMLInputElement
      emit('update:modelValue', Number(target.value))
    }

    const onClickClearableButton = () => {
      if (inputRef.value) {
        inputRef.value.focus()
      }
      emit('update:modelValue', 0)
    }

    return {
      onChangeValue,
      onClickClearableButton,
    }
  }
})
</script>
