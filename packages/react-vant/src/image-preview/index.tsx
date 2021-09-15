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
  const { onClose = noop, beforeClose, ...restProps } = props;

  const userContainer = resolveContainer(props.teleport);
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

    const _afterClose = async (p) => {
      if ((await beforeClose?.(0)) !== false) {
        destroy(p);

        const unmountResult = ReactDOM.unmountComponentAtNode(container);
        if (unmountResult && container.parentNode) {
          container.parentNode.removeChild(container);
        }
        return true;
      }
      return false;
    };

    return (
      <BaseImagePreview
        {...defaultConfig}
        {...restProps}
        visible={visible}
        teleport={() => container}
        onClose={destroy}
        beforeClose={_afterClose}
      />
    );
  };
  ReactDOM.render(<TempDialog />, container);

  return destroy;
};

export default ImagePreview;
