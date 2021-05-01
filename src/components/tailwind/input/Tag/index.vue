<template>
  <t-input
    ref="baseInputRef"
    :label="label"
    :type="type"
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
    <div
      class="relative"
      @focusin="isSelectListOpen = true"
    >
      <div
        class="flex items-center h-full w-full flex-wrap px-1"
      >
        <t-chip
          v-for="(chip, index) in modelValue"
          :key="itemValue ? chip[itemValue] : index"
          :closable="closable"
          @click:close="onClickCloseChipButton(chip)"
        >
          {{ itemText ? chip[itemText] : chip }}
        </t-chip>
        <div class="flex-1">
          <input
            placeholder=""
            class="bg-transparent px-2 appearance-none outline-none h-full w-full text-gray-800"
          >
        </div>
      </div>
      <div
        v-if="isSelectListOpen"
        class="absolute shadow top-10 bg-white z-40 w-full rounded max-h-select overflow-y-auto h-32"
      >
        <div class="flex flex-col w-full">
          <div
            v-for="item in items"
            :key="itemValue ? item[itemValue] : item"
            class="cursor-pointer w-full border-gray-100 rounded-t hover:bg-primary-300 border-primary-500"
            :class="{
              [`border-l-2`]: Array.isArray(modelValue) ? modelValue.indexOf(item) >= 0 : modelValue[itemValue] === item[itemValue]
            }"
            @click="onClickItem(item)"
          >
            <div class="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
              <div class="w-full items-center flex">
                <div class="mx-2 leading-6  ">
                  {{ itemText ? item[itemText] : item }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
import useInputMixin from '@/components/tailwind/input/Base/mixins/input'
import { inputTagProps } from '@/components/tailwind/input/Tag/types'
import TChip from '@/components/tailwind/Chip/index.vue'

export default defineComponent({
  name: 'TTagInput',
  components: { TChip, TInput },
  props: {
    ...inputTagProps,
    ...inputBoxProps,
  },
  setup (props) {
    const { emit } = useContext()
    const { inputRef, baseInputRef, checkValidate } = useInputMixin()

    const isSelectListOpen = ref(false)

    const onInputValue = (event: InputEvent) => {
      const target = event.target as HTMLInputElement
      emit('update:modelValue', target.value)
      nextTick(() => {
        checkValidate()
      })
    }

    const onClickItem = (item: any) => {
      if (Array.isArray(props.modelValue)) {
        const modelValue = props.modelValue
        const index = props.modelValue.findIndex(element => element[props.itemValue] === item[props.itemValue])
        if (index >= 0) {
          modelValue.splice(index, 1)
          emit('update:modelValue', modelValue)
        } else {
          modelValue.push(item)
          emit('update:modelValue', modelValue)
        }
      } else {
        emit('update:modelValue', item)
      }
    }

    const onClickClearableButton = () => {
      if (inputRef.value) {
        inputRef.value.focus()
      }

      emit('update:modelValue', [])
      nextTick(() => {
        checkValidate()
      })
    }

    const onClickCloseChipButton = (item: any) => {
      console.log(item)
      if (Array.isArray(props.modelValue)) {
        const modelValue = props.modelValue
        const index = props.modelValue.findIndex(element => element[props.itemValue] === item[props.itemValue])
        console.log(index)
        if (index >= 0) {
          console.log(modelValue.indexOf(item))
          modelValue.splice(modelValue.indexOf(item), 1)
          emit('update:modelValue', modelValue)
        }
      }
    }

    return {
      inputRef,
      baseInputRef,
      isSelectListOpen,
      onInputValue,
      onClickClearableButton,
      onClickCloseChipButton,
      checkValidate,
      onClickItem,
    }
  }
})
</script>
