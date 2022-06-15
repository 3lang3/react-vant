import { isFunction } from '../utils';
import { UploaderFileListItem, UploaderMaxSize, UploaderResultType } from './PropsType';

export function toArray<T>(item: T | T[]): T[] {
  if (Array.isArray(item)) {
    return item;
  }

  return [item];
}

export function readFileContent(file: File, resultType: UploaderResultType) {
  return new Promise<string | void>((resolve) => {
    if (resultType === 'file') {
      resolve();
      return;
    }

    const reader = new FileReader();

    reader.onload = (event) => {
      resolve((event.target).result as string);
    };

    if (resultType === 'dataUrl') {
      reader.readAsDataURL(file);
    } else if (resultType === 'text') {
      reader.readAsText(file);
    }
  });
}

export function isOversize(
  items: UploaderFileListItem | UploaderFileListItem[],
  maxSize: UploaderMaxSize,
): boolean {
  return toArray(items).some((item) => {
    if (item.file) {
      if (isFunction(maxSize)) {
        return maxSize(item.file);
      }
      return item.file.size > maxSize;
    }
    return false;
  });
}

export function filterFiles(items: UploaderFileListItem[], maxSize: UploaderMaxSize) {
  const valid: UploaderFileListItem[] = [];
  const invalid: UploaderFileListItem[] = [];

  items.forEach((item) => {
    if (isOversize(item, maxSize)) {
      invalid.push(item);
    } else {
      valid.push(item);
    }
  });

  return { valid, invalid };
}

const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;

export function isImageUrl(url: string): boolean {
  return IMAGE_REGEXP.test(url);
}

export function isImageFile(item: UploaderFileListItem): boolean {
  // some special urls cannot be recognized
  // user can add `isImage` flag to mark it as an image url
  if (item.isImage) {
    return true;
  }

  if (item.file && item.file.type) {
    return item.file.type.indexOf('image') === 0;
  }

  if (item.url) {
    return isImageUrl(item.url);
  }

  if (typeof item.content === 'string') {
    return item.content.indexOf('data:image') === 0;
  }

  return false;
}
