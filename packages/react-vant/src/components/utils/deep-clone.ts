import { isDef, isObject } from '.'

type ObjectIndex = Record<string, any>

function assignKey(to: ObjectIndex, from: ObjectIndex, key: string) {
  const val = from[key]

  if (!isDef(val)) {
    return
  }

  if (!Object.prototype.hasOwnProperty.call(to, key) || !isObject(val)) {
    to[key] = val
  } else {
    // eslint-disable-next-line no-use-before-define
    to[key] = deepAssign(Object(to[key]), from[key])
  }
}

export function deepAssign(to: ObjectIndex, from: ObjectIndex): ObjectIndex {
  Object.keys(from).forEach(key => {
    assignKey(to, from, key)
  })

  return to
}

export function deepClone(obj: Record<string, any>): Record<string, any> {
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item))
  }

  if (typeof obj === 'object') {
    return deepAssign({}, obj)
  }

  return obj
}
