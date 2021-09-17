import React, { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { isObject } from '../utils';
import { resolveContainer } from '../utils/dom/getContainer';
import { lockClick } from './lock-click';
import { ToastProps, ToastInstance } from './PropsType';

import BaseToast from './Toast';

const toastArray: (() => void)[] = [];

// 同步的销毁
function syncClear() {
  let fn = toastArray.pop();
  while (fn) {
    fn();
    fn = toastArray.pop();
  }
}

// 针对 toast 还没弹出来就立刻销毁的情况，将销毁放到下一个 event loop 中，避免销毁失败。
function nextTickClear() {
  setTimeout(syncClear);
}

// 可返回用于销毁此弹窗的方法
const Toast = (p: ToastProps): unknown => {
  const props = parseOptions(p);
  const update: { config: React.Dispatch<React.SetStateAction<ToastProps>> } = { config: () => {} };
  let timer = 0;
  const { onClose, teleport } = props;
  const container = document.createElement('div');
  const bodyContainer = resolveContainer(teleport);
  bodyContainer.appendChild(container);

  const TempToast = () => {
    const options = {
      icon: '',
      message: '',
      className: '',
      type: 'info',
      position: 'middle',
      forbidClick: false,
      duration: 2000,
      ...props,
    } as ToastProps;
    const [visible, setVisible] = useState(false);
    const [state, setState] = useState<ToastProps>({ ...options });
    // clearDOM after animation
    const internalOnClosed = useCallback(() => {
      if (state.forbidClick) {
        lockClick(false);
      }
      const unmountResult = ReactDOM.unmountComponentAtNode(container);
      if (unmountResult && container.parentNode) {
        container.parentNode.removeChild(container);
      }
    }, [onClose, container]);

    // close with animation
    const destroy = useCallback(() => {
      setVisible(false);
      if (onClose) onClose();
    }, []);

    update.config = useCallback(
      (nextState) => {
        setState((prev) =>
          typeof nextState === 'function'
            ? { ...prev, ...nextState(prev) }
            : { ...prev, ...nextState },
        );
      },
      [setState],
    );

    useEffect(() => {
      setVisible(true);
      syncClear();
      toastArray.push(internalOnClosed);

      if (state.duration !== 0 && 'duration' in state) {
        timer = window.setTimeout(destroy, +state.duration);
      }
      return () => {
        if (timer !== 0) {
          window.clearTimeout(timer);
        }
      };
    }, []);

    return (
      <BaseToast
        {...state}
        visible={visible}
        teleport={() => container}
        onClose={destroy}
        onClosed={internalOnClosed}
      />
    );
  };

  ReactDOM.render(<TempToast />, container);

  return update;
};

function parseOptions(message) {
  if (isObject(message)) {
    return message;
  }
  return { message };
}

const createMethod = (type) => (options) =>
  Toast({
    type,
    ...parseOptions(options),
  });

['info', 'loading', 'success', 'fail'].forEach((method) => {
  Toast[method] = createMethod(method);
});

Toast.clear = nextTickClear;

export default Toast as ToastInstance;
