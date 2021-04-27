<template>
  <t-input
    ref="baseInputRef"
    :label="label"
    :height="height"
    :model-value="modelValue"
    :clearable="clearable"
    :error-message="errorMessage"
    :rules="rules"
    @click:clearableButton="onClickClearableButton"
  >
    <template
      #label
    >
      <slot
        name="label"
      />
    </template>
    <!--   pre-append   -->
    <template
      #preAppend
    >
      <slot
        name="preAppend"
      />
    </template>
    <input
      id="name"
      ref="inputRef"
      name="name"
      type="text"
      :placeholder="placeholder"
      :value="modelValue"
      class="text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none h-full px-2"
      @input="onInputValue"
    >
    <!--   append   -->
    <template
      #append
    >
      <slot
        name="append"
      />
    </template>
  </t-input>
</template>

<script lang="ts">
import { defineComponent, nextTick, ref, useContext } from 'vue'
import TInput from '@/components/tailwind/input/Base/index.vue'
import { inputBoxProps } from '@/components/tailwind/input/Base/types/props'
import { inputTextProps } from '@/components/tailwind/input/Text/type'

export default defineComponent({
  name: 'TTextInput',
  components: { TInput },
  props: {
    ...inputTextProps,
    ...inputBoxProps,
  },
  setup () {
    const { emit } = useContext()

    /* @TODO: Change to Mixins */
    const inputRef = ref<HTMLInputElement>(null)
    const baseInputRef = ref<InstanceType< typeof TInput>>(null)

    const onInputValue = (event: InputEvent) => {
      const target = event.target as HTMLInputElement
      emit('update:modelValue', target.value)
      nextTick(() => {
        if (baseInputRef.value)
          baseInputRef.value.checkValidation()
      })
    }

    const onClickClearableButton = () => {
      if (inputRef.value) {
        inputRef.value.focus()
      }

      emit('update:modelValue', '')
      nextTick(() => {
        if (baseInputRef.value)
          baseInputRef.value.checkValidation()
      })
    }

    return {
      inputRef,
      baseInputRef,
      onInputValue,
      onClickClearableButton,
    }
  }
})
</script>
