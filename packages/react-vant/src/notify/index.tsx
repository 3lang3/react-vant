/* eslint-disable @typescript-eslint/naming-convention */
import React, { useCallback, useEffect, useState } from 'react';

import ReactDOM from 'react-dom';

import { extend, isObject, noop, once } from '../utils';
import { NotifyOptions, NotifyProps, NotifyStatic } from './PropsType';

import Notify from './Notify';
import { resolveContainer } from '../utils/dom/getContainer';
import { lockClick } from '../toast/lock-click';

const NotifyNamespace = {} as NotifyStatic;

function parseOptions(message: string | NotifyProps) {
  return isObject(message) ? message : { message };
}

const notifyArray: (() => void)[] = [];

// 同步的销毁
function syncClear() {
  let fn = notifyArray.pop();
  while (fn) {
    fn();
    lockClick(false);
    fn = notifyArray.pop();
  }
}

// 针对 toast 还没弹出来就立刻销毁的情况，将销毁放到下一个 event loop 中，避免销毁失败。
function nextTickClear() {
  setTimeout(syncClear);
}

// 可返回用于销毁此弹窗的方法
const show = (p: string | NotifyProps) => {
  const props = parseOptions(p);
  const interProps = { ...NotifyNamespace.currentOptions, ...props };
  const { onClose = noop, duration, ...restProps } = interProps;
  let timer = 0;
  const userContainer = resolveContainer(props.teleport);
  const container = document.createElement('div');
  userContainer.appendChild(container);

  let destroy = noop;

  const TempNotify = () => {
    const [visible, setVisible] = useState(false);

    destroy = () => {
      setVisible(false);
      if (onClose) onClose();
    };

    // clearDOM after animation
    const internalOnClosed = () => {
      const unmountResult = ReactDOM.unmountComponentAtNode(container);
      if (unmountResult && container.parentNode) {
        container.parentNode.removeChild(container);
      }
    };

    const internalAfterClose = useCallback(
      once(() => {
        internalOnClosed();
      }),
      [onClose, container],
    );

    useEffect(() => {
      setVisible(true);
      syncClear();
      notifyArray.push(internalAfterClose);

      if (duration && +duration > 0) {
        timer = window.setTimeout(destroy, duration);
      }
      return () => {
        if (timer !== 0) {
          window.clearTimeout(timer);
        }
      };
    }, []);

    return (
      <Notify
        {...restProps}
        visible={visible}
        teleport={() => container}
        onClose={onClose}
        onClosed={internalOnClosed}
      />
    );
  };

  ReactDOM.render(<TempNotify />, container);

  return destroy;
};

function defaultOptions() {
  return {
    type: 'danger',
    color: undefined,
    message: '',
    onClose: undefined,
    onClick: undefined,
    duration: 3000,
    className: '',
    lockScroll: false,
    background: undefined,
  } as NotifyOptions;
}

NotifyNamespace.currentOptions = defaultOptions();

const setDefaultOptions = (options: NotifyOptions) => {
  extend(NotifyNamespace.currentOptions, options);
};

const resetDefaultOptions = () => {
  NotifyNamespace.currentOptions = defaultOptions();
};

const clear = nextTickClear;

const exportNotifyNamespace = Object.assign(Notify, {
  show,
  setDefaultOptions,
  resetDefaultOptions,
  clear,
});

export default exportNotifyNamespace;
export { exportNotifyNamespace as Notify };
export type { NotifyProps, NotifyType, NotifyStatic } from './PropsType';
