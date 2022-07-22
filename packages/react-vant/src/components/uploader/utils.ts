import { isFunction } from '../utils'
import {
  UploaderValueItem,
  UploaderMaxSize,
  UploaderResultType,
} from './PropsType'

export function toArray<T>(item: T | T[]): T[] {
  if (Array.isArray(item)) {
    return item
  }

  return [item]
}

export function readFileContent(file: File, resultType: UploaderResultType) {
  return new Promise<string | void>(resolve => {
    if (resultType === 'file') {
      resolve()
      return
    }

    if (isImageFile(file)) {
      resolve(URL.createObjectURL(file))
      return
    }

    const reader = new FileReader()

    reader.onload = event => {
      resolve(event.target.result as string)
    }

    if (resultType === 'dataUrl') {
      reader.readAsDataURL(file)
    } else if (resultType === 'text') {
      reader.readAsText(file)
    }
  })
}

export function isOversize(files: File[], maxSize: UploaderMaxSize): boolean {
  return toArray(files).some(file => {
    if (file) {
      if (isFunction(maxSize)) {
        return maxSize(file)
      }
      return file.size > maxSize
    }
    return false
  })
}

export function filterFiles(items: File[], maxSize: UploaderMaxSize) {
  const valid: File[] = []
  const invalid: File[] = []

  items.forEach(item => {
    if (isOversize([item], maxSize)) {
      invalid.push(item)
    } else {
      valid.push(item)
    }
  })

  return { valid, invalid }
}

const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i

export function isImageUrl(url: string): boolean {
  return IMAGE_REGEXP.test(url)
}

export function isImageFile(
  item: UploaderValueItem,
  isImage?: boolean
): boolean {
  // some special urls cannot be recognized
  // user can add `isImage` flag to mark it as an image url
  if (isImage) {
    return true
  }

  if (item.file && item.file.type) {
    return item.file.type.indexOf('image') === 0
  }

  if (item.url) {
    return isImageUrl(item.url)
  }

  if (item.thumbnail) {
    return isImageUrl(item.thumbnail)
  }

  return false
}
