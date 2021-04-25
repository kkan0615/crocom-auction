import { ComponentObjectPropsOptions } from 'vue'
import { inputDefaultProps, InputPropsTypeWithModelValue } from '@/components/tailwind/input/Input/data/props'

export const inputNumberProps: ComponentObjectPropsOptions<InputPropsTypeWithModelValue<number>> = {
  modelValue: {
    type: Number,
    required: false,
    default: 0,
  },
  ...inputDefaultProps
}
