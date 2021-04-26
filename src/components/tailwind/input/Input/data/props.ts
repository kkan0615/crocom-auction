import { ComponentObjectPropsOptions  } from 'vue'

export interface InputBoxProps {
  modelValue: any
  label: string
  height: number
  clearable: boolean
}

export const inputBoxProps: ComponentObjectPropsOptions<InputBoxProps> = {
  modelValue: {
    required: false,
    default: '',
  },
  label: {
    type: String,
    required: false,
    default: '',
  },
  height: {
    type: Number,
    required: false,
    default: 8,
  },
  clearable: {
    type: Boolean,
    required: false,
    default: false,
  },
}

/**
 * Modelvalue props
 */
export interface ModelValueProp<T> {
  modelValue: T
}

/**
 * Default props,
 * usually use for without modelvalue
 */
export interface InputDefaultProps {
  placeholder: string
}

/**
 * modelvalueProp + inputDefaultProps type
 */
export type InputPropsTypeWithModelValue<T> = ModelValueProp<T> & InputDefaultProps

export const inputDefaultProps: ComponentObjectPropsOptions<InputDefaultProps> = {
  placeholder: {
    type: String,
    required: false,
    default: '',
  },
}
