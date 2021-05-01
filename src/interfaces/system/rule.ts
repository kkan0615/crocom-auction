export type InputRuleType = (v: string & number) => string | boolean

export type RuleType<T = string> = Record<keyof T| string, Array<InputRuleType>>

