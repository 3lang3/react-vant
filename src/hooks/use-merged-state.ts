import { useState } from 'react';
import useUpdateEffect from './use-update-effect';

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

  function triggerChange(newValue: T) {
    setInnerValue(newValue);
  }

  useUpdateEffect(() => {
    triggerChange(value);
  }, [value]);

  return [innerValue as unknown as R, triggerChange];
};

export default useMergedState;
