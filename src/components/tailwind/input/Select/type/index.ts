import { ComponentObjectPropsOptions } from 'vue'
import { inputDefaultProps, InputPropsTypeWithModelValue } from '@/components/tailwind/input/Base/types/props'

export interface InputDefaultSelectProps {
  items: Array<any>
  itemText: string
  itemValue: string
}

export const inputSelectProps: ComponentObjectPropsOptions<InputPropsTypeWithModelValue<string | number> & InputDefaultSelectProps> = {
  modelValue: {
    type: [Number, String],
    required: false,
    default: '',
  },
  items: {
    type: Array,
    required: false,
    default: () => [],
  },
  itemText: {
    type: String,
    required: false,
    default: '',
  },
  itemValue: {
    type: String,
    required: false,
    default: '',
  },
  ...inputDefaultProps
}
