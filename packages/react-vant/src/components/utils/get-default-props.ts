export function mergeProps<A, B>(a: A, b: B): B & A
export function mergeProps<A, B, C>(a: A, b: B, c: C): C & B & A
// 实现react的defaultProps和props合并
export function mergeProps(...items: any[]) {
  const result = { ...items[0] }
  items.forEach(item => {
    for (const key in item) {
      const val = item[key]
      // eslint-disable-next-line no-prototype-builtins
      result[key] = result.hasOwnProperty(key) ? result[key] : val
    }
  })
  return result
}
