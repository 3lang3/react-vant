/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { CSSProperties } from 'react';
import { isDef, inBrowser } from '..';
import { isNumeric } from '../validate/number';

export function addUnit(value?: string | number): string | undefined {
  if (!isDef(value)) {
    return undefined;
  }

  // eslint-disable-next-line no-param-reassign
  value = String(value);
  return isNumeric(value) ? `${value}px` : value;
}

export function getSizeStyle(originSize?: string | number) {
  if (isDef(originSize)) {
    const size = addUnit(originSize);
    return {
      width: size,
      height: size,
    };
  }
  return {};
}

export function getZIndexStyle(zIndex?: string | number) {
  const style: CSSProperties = {};
  if (zIndex !== undefined) {
    style.zIndex = +zIndex;
  }
  return style;
}

// cache
let rootFontSize: number;

function getRootFontSize() {
  if (!rootFontSize) {
    const doc = document.documentElement;
    const fontSize = doc.style.fontSize || window.getComputedStyle(doc).fontSize;

    rootFontSize = parseFloat(fontSize);
  }

  return rootFontSize;
}

function convertRem(value: string) {
  value = value.replace(/rem/g, '');
  return +value * getRootFontSize();
}

function convertVw(value: string) {
  value = value.replace(/vw/g, '');
  return (+value * window.innerWidth) / 100;
}

function convertVh(value: string) {
  value = value.replace(/vh/g, '');
  return (+value * window.innerHeight) / 100;
}

export function unitToPx(value: string | number): number {
  if (typeof value === 'number') {
    return value;
  }

  if (inBrowser) {
    if (value.indexOf('rem') !== -1) {
      return convertRem(value);
    }
    if (value.indexOf('vw') !== -1) {
      return convertVw(value);
    }
    if (value.indexOf('vh') !== -1) {
      return convertVh(value);
    }
  }

  return parseFloat(value);
}
