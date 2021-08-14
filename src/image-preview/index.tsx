/* eslint-disable @typescript-eslint/naming-convention */
import React, { useEffect, useState } from 'react';

import ReactDOM from 'react-dom';

import { noop } from '../utils';
import { CloseParams, ImagePreviewProps, ImagePreviewStatic } from './PropsType';

import BaseImagePreview from './ImagePreview';
import { resolveContainer } from '../utils/dom/getContainer';

const ImagePreview = BaseImagePreview as ImagePreviewStatic;

const defaultConfig: ImagePreviewProps = {
  loop: true,
  images: [],
  className: '',
  showIndex: true,
  closeable: false,
  closeIcon: 'clear',
  startPosition: 0,
  swipeDuration: 300,
  closeOnPopstate: true,
  closeIconPosition: 'top-right',
};

// 可返回用于销毁此弹窗的方法
ImagePreview.open = (props: ImagePreviewProps) => {
  const { afterClose = noop, onClose = noop, beforeClose, ...restProps } = props;

  const userContainer = resolveContainer(props.getContainer);
  const container = document.createElement('div');
  userContainer.appendChild(container);
  let destroy = noop as (p?: CloseParams) => void;

  const TempDialog = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      setVisible(true);
    }, []);

    destroy = (p: CloseParams) => {
      setVisible(false);
      if (onClose) onClose(p);
    };

    const _afterClose = () => {
      if (afterClose) {
        afterClose();
      }
      const unmountResult = ReactDOM.unmountComponentAtNode(container);
      if (unmountResult && container.parentNode) {
        container.parentNode.removeChild(container);
      }
    };

    const _onClose = async (p: CloseParams) => {
      if ((await beforeClose?.()) !== false) {
        destroy(p);
      }
    };

    return (
      <BaseImagePreview
        {...defaultConfig}
        {...restProps}
        visible={visible}
        getContainer={() => container}
        afterClose={_afterClose}
        onClose={_onClose}
      />
    );
  };
  ReactDOM.render(<TempDialog />, container);

  return destroy;
};

export default ImagePreview;
