import React from 'react'

export type SelectorValue = string | number

export type NativeProps<S extends string = never> = {
  className?: string
  style?: React.CSSProperties & Partial<Record<S, string>>
  tabIndex?: number
} & React.AriaAttributes

export interface SelectorOption<V> {
  label: React.ReactNode
  description?: React.ReactNode
  value: V
  disabled?: boolean
}

export type SelectorProps<V> = {
  options: SelectorOption<V>[]
  columns?: number
  multiple?: boolean
  disabled?: boolean
  defaultValue?: V[]
  value?: V[]
  onChange?: (v: V[], extend: { items: SelectorOption<V>[] }) => void
  showCheckMark?: boolean
} & NativeProps<
  | '--rv-selector-color'
  | '--rv-selector-checked-color'
  | '--rv-selector-text-color'
  | '--rv-selector-checked-text-color'
  | '--rv-selector-border'
  | '--rv-selector-checked-border'
  | '--rv-selector-border-radius'
  | '--rv-selector-padding'
  | '--rv-selector-margin'
>
