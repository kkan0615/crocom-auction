<template>
  <t-input
    :label="label"
    :height="height"
    :model-value="modelValue"
    :clearable="clearable"
    @click:clearableButton="onClickClearableButton"
  >
    <div
      class="relative"
    >
      <div
        class="flex flex-auto flex-wrap"
        @focusin="isSelectOpen = true"
      >
        <div
          class=""
        >
          {{ itemText ? modelValue[itemText] : modelValue }}
        </div>
        <div class="flex-1">
          <input
            placeholder=""
            class="px-1  outline-none h-full w-full"
          >
        </div>
      </div>
      <div
        v-if="isSelectOpen"
        class="absolute shadow top-100 bg-white z-40 w-full rounded max-h-select overflow-y-auto h-32"
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
  setup (props) {
    const { emit } = useContext()

    const inputRef = ref<HTMLInputElement>(null)
    const isSelectOpen = ref(false)

    const onChangeValue = (event: InputEvent) => {
      const target = event.target as HTMLInputElement
      emit('update:modelValue', Number(target.value))
    }

    const onClickItem = (item: any) => {
      console.log(props.modelValue)
      if (Array.isArray(props.modelValue)) {
        const modelValue = props.modelValue
        const index = props.modelValue.findIndex(element => element[props.itemValue] === item[props.itemValue])
        if (index >= 0) {
          // eslint-disable-next-line vue/no-mutating-props
          const newArray = modelValue.splice(index, 1)
          emit('update:modelValue', newArray)
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
      emit('update:modelValue', 0)
    }

    return {
      isSelectOpen,
      onChangeValue,
      onClickClearableButton,
      onClickItem,
    }
  }
})
</script>
