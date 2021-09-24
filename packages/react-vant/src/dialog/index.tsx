/* eslint-disable @typescript-eslint/naming-convention */
import React, { useEffect, useState } from 'react';

import ReactDOM from 'react-dom';

import { noop } from '../utils';
import { AlertDialogProps, DialogProps, DialogStatic } from './PropsType';

import BaseDialog from './Dialog';
import { resolveContainer } from '../utils/dom/getContainer';

const Dialog = BaseDialog as DialogStatic;

// 可返回用于销毁此弹窗的方法
Dialog.show = (props: DialogProps) => {
  const defaultOptions = {
    overlay: true,
    closeable: false,
    closeIcon: 'cross',
    lockScroll: true,
    transition: 'rv-dialog-bounce',
    showConfirmButton: true,
    showCancelButton: false,
    closeOnClickOverlay: false,
  };
  const {
    onClosed,
    onCancel = noop,
    onConfirm = noop,
    onClose = noop,
    cancelProps,
    confirmProps,
    ...restProps
  } = props;

  const userContainer = resolveContainer(props.teleport);
  const container = document.createElement('div');
  userContainer.appendChild(container);
  let destroy = noop;

  const TempDialog = () => {
    const [visible, setVisible] = useState(false);
    const [cancelLoading, setCancelLoading] = useState(false);
    const [okLoading, setOkLoading] = useState(false);

    useEffect(() => {
      setVisible(true);
    }, []);

    destroy = () => {
      setVisible(false);
      if (onClose) onClose();
    };
    const _afterClose = () => {
      if (onClosed) {
        onClosed();
      }
      const unmountResult = ReactDOM.unmountComponentAtNode(container);
      if (unmountResult && container.parentNode) {
        container.parentNode.removeChild(container);
      }
    };

    const _onConfirm = async (e) => {
      const i = setTimeout(() => setOkLoading(true));
      if ((await onConfirm(e)) !== false) {
        clearTimeout(i);
        destroy();
      } else {
        clearTimeout(i);
        setOkLoading(false);
      }
    };
    const _onCancel = async (e, clickOverlay?) => {
      if (clickOverlay) {
        destroy();
        return;
      }
      const i = setTimeout(() => setCancelLoading(true));
      if ((await onCancel(e)) !== false) {
        clearTimeout(i);
        destroy();
      } else {
        clearTimeout(i);
        setCancelLoading(false);
      }
    };

    return (
      <BaseDialog
        {...defaultOptions}
        {...restProps}
        visible={visible}
        teleport={() => container}
        cancelProps={{ loading: cancelLoading, ...cancelProps }}
        confirmProps={{ loading: okLoading, ...confirmProps }}
        onClose={destroy}
        onCancel={_onCancel}
        onConfirm={_onConfirm}
        onClosed={_afterClose}
      />
    );
  };
  ReactDOM.render(<TempDialog />, container);

  return destroy;
};

// 可使用 async/await 的方式
Dialog.alert = (props: AlertDialogProps) => {
  const { onConfirm = noop } = props;
  return new Promise((resolve) => {
    Dialog.show({
      ...props,
      onConfirm: (e) => {
        onConfirm(e);
        resolve(e);
      },
    });
  });
};

Dialog.confirm = (props: DialogProps): Promise<boolean> => {
  const { onCancel = noop, onConfirm = noop } = props;
  return new Promise((resolve, reject) => {
    Dialog.show({
      // 强制显示 OK Btn
      confirmButtonText: '确认',
      showCancelButton: true,
      ...props,
      onCancel: (e) => {
        onCancel(e);
        reject();
      },
      onConfirm: (e) => {
        onConfirm(e);
        resolve(true);
      },
    });
  });
};

export default Dialog;
