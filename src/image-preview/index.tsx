/* eslint-disable @typescript-eslint/naming-convention */
import React, { useEffect, useState } from 'react';

import ReactDOM from 'react-dom';

import { noop } from '../utils';
import { ImagePreviewProps, ImagePreviewStatic } from './PropsType';

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
  const { afterClose, onClose, ...restProps } = props;

  const userContainer = resolveContainer(props.getContainer);
  const container = document.createElement('div');
  userContainer.appendChild(container);
  let destroy = noop;

  const TempDialog = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      setVisible(true);
    }, []);

    destroy = () => {
      setVisible(false);
      if (onClose) onClose();
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

    return (
      <BaseImagePreview
        {...defaultConfig}
        {...restProps}
        visible={visible}
        getContainer={() => container}
        afterClose={_afterClose}
        onClose={destroy}
      />
    );
  };
  ReactDOM.render(<TempDialog />, container);

  return destroy;
};

export default ImagePreview;
