/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { forwardRef, useImperativeHandle } from 'react';
import usePopupState from '../hooks/use-popup-state';

import { inBrowser, isObject } from '../utils';
import { mountComponent } from '../utils/mount-component';
import { ToastInstance } from './PropsType';

import BaseToast from './Toast';

let instance = null;

const Component = forwardRef((_, ref) => {
  const [state, { setState, open, close }] = usePopupState();
  useImperativeHandle(ref, () => ({
    open,
    clear: close,
    setMessage(message: string) {
      setState({ message });
    },
  }));

  return <BaseToast {...state} close={close} />;
});

function parseOptions(message) {
  if (isObject(message)) {
    return message;
  }
  return { message };
}

const Toast = (options = {}) => {
  if (!inBrowser) {
    return;
  }

  options = parseOptions(options);
  options = {
    icon: '',
    message: '',
    className: '',
    type: 'info',
    position: 'middle',
    forbidClick: false,
    duration: 2000,
    ...options,
  };
  mountComponent(Component, (toast) => {
    if (!toast) {
      return;
    }

    if (instance) {
      instance.unmount();
      instance = null;
    }

    instance = toast;
    toast.open(options);
  });

  // eslint-disable-next-line consistent-return
  return instance;
};

const createMethod = (type) => (options) =>
  Toast({
    type,
    ...parseOptions(options),
  });

['info', 'loading', 'success', 'fail'].forEach((method) => {
  Toast[method] = createMethod(method);
});

Toast.clear = () => {
  if (instance) {
    instance.clear();
  }
};

export default Toast as ToastInstance;
