import React, { forwardRef, useImperativeHandle } from 'react';
import { inBrowser } from '../utils';
import { mountComponent } from '../utils/mount-component';
import ImagePreview from './ImagePreview';
import { ImagePreviewProps } from './PropsType';
import usePopupState from '../hooks/use-popup-state';

let instance;

const defaultConfig: ImagePreviewProps = {
  loop: true,
  images: [],
  onClose: undefined,
  className: '',
  showIndex: true,
  closeable: false,
  closeIcon: 'clear',
  transition: undefined,
  beforeClose: undefined,
  overlayStyle: undefined,
  startPosition: 0,
  swipeDuration: 300,
  showIndicators: false,
  closeOnPopstate: true,
  closeIconPosition: 'right',
};

const Component = forwardRef((_, ref) => {
  const [state, { setState, open, close }] = usePopupState();
  useImperativeHandle(ref, () => ({
    open,
    clear: close,
    setMessage(message: string) {
      setState({ message });
    },
  }));
  return <ImagePreview {...state} onClose={close} />;
});

function initInstance(images: string[] | ImagePreviewProps, startPosition = 0) {
  if (!inBrowser) {
    return undefined;
  }

  const options = Array.isArray(images) ? { images, startPosition } : images;

  mountComponent(Component, (componentInstance) => {
    if (!componentInstance) {
      return;
    }

    if (instance) {
      instance.unmount();
      instance = null;
    }

    instance = componentInstance;
    componentInstance.open({ ...defaultConfig, ...options });
  });
  return instance;
}

ImagePreview.open = initInstance;

export default ImagePreview;
