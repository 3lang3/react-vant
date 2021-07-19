import React, { forwardRef, useImperativeHandle } from 'react';

import usePopupState from '../hooks/use-popup-state';

import { inBrowser } from '../utils';
import { mountComponent } from '../utils/mount-component';
import { DialogProps } from './PropsType';

import BaseDialog from './Dialog';

let instance = null;

const Component = forwardRef((_, ref) => {
  const [state, { open, toggle, close }] = usePopupState();

  useImperativeHandle(ref, () => ({
    open,
    toggle,
  }));

  return <BaseDialog {...state} onClose={close} />;
});

const Dialog = (options: Partial<DialogProps>): Promise<void> => {
  if (!inBrowser) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const defaultOptions = {
      title: '',
      width: '',
      theme: null,
      message: '',
      overlay: true,
      callback: null,
      closeable: false,
      closeIcon: 'cross',
      className: '',
      allowHtml: false,
      lockScroll: true,
      beforeClose: null,
      overlayClass: '',
      overlayStyle: null,
      transition: 'rv-dialog-bounce',
      messageAlign: '',
      cancelButtonText: '',
      cancelButtonColor: null,
      confirmButtonText: '',
      children: '',
      confirmButtonColor: null,
      showConfirmButton: true,
      showCancelButton: false,
      overlayClosable: false,
    };

    mountComponent(Component, (dialog) => {
      if (!dialog) {
        return;
      }

      if (instance) {
        instance.unmount();
        instance = null;
      }

      instance = dialog;

      dialog.open({
        ...defaultOptions,
        ...options,
        callback: (action) => {
          (action === 'confirm' ? resolve : reject)(action);
        },
      });
    });
  });
};

BaseDialog.alert = Dialog;

BaseDialog.confirm = (options: Partial<DialogProps>) =>
  Dialog({
    showCancelButton: true,
    ...options,
  });

BaseDialog.close = () => {
  if (instance) {
    instance.unmount();
  }
};

export default BaseDialog;
