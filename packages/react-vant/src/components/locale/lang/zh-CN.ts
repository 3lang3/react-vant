import { deepAssign } from '../../utils/deep-assign'
import { base } from './base'
import type { Locale } from './types'

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>
}

export type PartialLocale = DeepPartial<Locale>

const zhCN = deepAssign(base, {})

const mergeLocale = (baseLocal: Locale, mergeLocal: PartialLocale): Locale => {
  return deepAssign(baseLocal, mergeLocal) as Locale
}

export { mergeLocale }

export default zhCN
