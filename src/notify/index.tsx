/* eslint-disable @typescript-eslint/naming-convention */
import React, { useCallback, useEffect, useState } from 'react';

import ReactDOM from 'react-dom';

import { extend, isObject, noop, once } from '../utils';
import { NotifyOptions, NotifyProps, NotifyStatic } from './PropsType';

import BaseNotify from './Notify';
import { resolveContainer } from '../utils/dom/getContainer';
import { lockClick } from '../toast/lock-click';

const Notify = BaseNotify as NotifyStatic;

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
Notify.show = (p: NotifyProps) => {
  const props = parseOptions(p);
  const interProps = { ...Notify.currentOptions, ...props };
  const { onClose = noop, duration, ...restProps } = interProps;
  let timer = 0;
  const userContainer = resolveContainer(props.teleport);
  const container = document.createElement('div');
  userContainer.appendChild(container);

  let destroy = noop;

  const TempNotify = () => {
    const [visible, setVisible] = useState(false);

    // clearDOM after animation
    const internalAfterClose = useCallback(
      once(() => {
        if (onClose) onClose();
        const unmountResult = ReactDOM.unmountComponentAtNode(container);
        if (unmountResult && container.parentNode) {
          container.parentNode.removeChild(container);
        }
      }),
      [onClose, container],
    );

    destroy = () => {
      setVisible(false);
    };

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

    const afterClose = () => {
      if (onClose) onClose();
      const unmountResult = ReactDOM.unmountComponentAtNode(container);
      if (unmountResult && container.parentNode) {
        container.parentNode.removeChild(container);
      }
    };

    return (
      <BaseNotify
        {...restProps}
        visible={visible}
        teleport={() => container}
        onClose={afterClose}
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

Notify.currentOptions = defaultOptions();

Notify.setDefaultOptions = (options: NotifyOptions) => {
  extend(Notify.currentOptions, options);
};

Notify.resetDefaultOptions = () => {
  Notify.currentOptions = defaultOptions();
};

Notify.clear = nextTickClear;

export default Notify;
