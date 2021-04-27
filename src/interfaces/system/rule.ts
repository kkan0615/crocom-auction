export type InputRuleType = (v: string) => string | boolean

export type RuleType<T = string> = Record<keyof T| string, Array<() => string | boolean>>

