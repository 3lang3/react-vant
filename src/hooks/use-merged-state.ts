import { useState } from 'react';

const useMergedState = <T, R = T>(option?: {
  defaultValue?: T | (() => T);
  value?: T;
}): [R, (value: T) => void] => {
  const { defaultValue, value } = option || {};

  const [innerValue, setInnerValue] = useState<T>(() => {
    if (value !== undefined) {
      return value;
    }
    if (defaultValue !== undefined) {
      return typeof defaultValue === 'function' ? (defaultValue as any)() : defaultValue;
    }
    return undefined;
  });

  const mergedValue = value !== undefined ? value : innerValue;

  function triggerChange(newValue: T) {
    setInnerValue(newValue);
  }

  return [mergedValue as unknown as R, triggerChange];
};

export default useMergedState;
