<template>
  <div
    class="w-full"
    role=""
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
      :class="{
        [`border-2`]: errorStatus,
        [`border-red-500`]: errorStatus,
      }"
    >
      <!--   pre-append   -->
      <div
        class="flex-shrink"
      >
        <slot
          name="preAppend"
        />
      </div>
      <!--   input part   -->
      <div
        class="flex-grow"
        :class="{
          [`h-${height}`]: true,
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
      v-if="errorStatus"
      class="text-sm sm:text-base text-red-500"
    >
      {{ innerErrorMessage }}
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, useContext } from 'vue'
import TMaterialIcon from '@/components/tailwind/icon/Material/index.vue'
import { inputBoxProps } from '@/components/tailwind/input/Base/types/props'
import TButton from '@/components/tailwind/Button/index.vue'

export default defineComponent({
  name: 'TInput',
  components: { TButton, TMaterialIcon },
  props: {
    ...inputBoxProps
  },
  setup (props) {
    const { emit } = useContext()

    const innerErrorMessage = ref<string | boolean>(true)
    const errorStatus = computed(() =>
      typeof props.errorMessage === 'string'
        || !props.errorMessage
        || typeof innerErrorMessage.value === 'string'
        || !innerErrorMessage.value)

    const checkValidation = (): boolean | string => {
      if (props.rules.length <= 0) {
        innerErrorMessage.value = true
        return innerErrorMessage.value
      }

      for (let i = 0; i < props.rules.length; i++) {
        const rule = props.rules[i]
        const result = rule(props.modelValue)

        if (typeof result === 'string') {
          innerErrorMessage.value = result
          return  innerErrorMessage.value
        } else if (!result) {
          innerErrorMessage.value = result
          return innerErrorMessage.value
        }
      }

      innerErrorMessage.value = true
      return innerErrorMessage.value
    }

    const onClickClearableButton = (event: MouseEvent) => {
      emit('click:clearableButton', event)
    }

    return {
      errorStatus,
      innerErrorMessage,
      onClickClearableButton,
      checkValidation,
    }
  },
  methods: {
    test () {
      console.log('test')
    }
  }
})
</script>
