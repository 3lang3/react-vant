import React, { useContext, useRef, useState } from 'react';
import cls from 'clsx';
import { ImagePreviewProps } from './PropsType';
import { pick } from '../utils';
import Popup from '../popup';
import { Slides } from './slides';
import type { SlidesRef } from './slides';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import SwiperPagIndicator from '../swiper/SwiperPagIndicator';

export type ImagePreviewRef = SlidesRef;

const ImagePreview = React.forwardRef<ImagePreviewRef, ImagePreviewProps>((props, ref) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('image-preview', prefixCls);

  const slidesRef = useRef<SlidesRef>(null);
  const [active, setActive] = useState(() => props.startPosition);

  const currentImage = React.useMemo(() => props.images[active], [active, props.images]);

  const onSwipeChange = (idx: number) => {
    if (active !== idx) {
      setActive(idx);
      props.onChange?.(idx);
    }
  };

  const onClose = () => {
    props.onClose?.({ url: currentImage, index: active });
  };

  const renderContent = () => (
    <div className={cls(bem('content'))}>
      {props.images && (
        <Slides
          ref={slidesRef}
          defaultIndex={active}
          onIndexChange={onSwipeChange}
          images={props.images}
          onTap={() => {
            if (!props.closeOnlyClickCloseIcon) {
              onClose();
            }
          }}
          maxZoom={props.maxZoom}
        />
      )}
    </div>
  );

  const renderClose = () => {
    if (props.closeable) {
      return React.cloneElement(props.closeIcon as React.ReactElement, {
        className: cls(bem('close-icon', props.closeIconPosition)),
        onClick: onClose,
      });
    }
    return null;
  };

  const renderIndex = () => {
    if (props.showIndex) {
      return (
        <div className={cls(bem('index'))}>
          {props.indexRender
            ? props.indexRender({ index: active, len: props.images.length })
            : `${active + 1} / ${props.images.length}`}
        </div>
      );
    }
    return null;
  };

  const renderIndicator = () => {
    if (props.showIndicators) {
      return (
        <div className={cls(bem('indicator'))}>
          <SwiperPagIndicator total={props.images.length} current={active} />
        </div>
      );
    }
    return null;
  };

  React.useImperativeHandle(ref, () => ({
    swipeTo: (index: number, immediate?: boolean) => {
      setActive(index);
      slidesRef.current?.swipeTo(index, immediate);
    },
  }));

  return (
    <Popup
      className={cls(bem(), props.className)}
      overlayClass={cls(bem('overlay'))}
      {...pick(props, [
        'visible',
        'overlayStyle',
        'closeOnPopstate',
        'onClosed',
        'beforeClose',
        'teleport',
      ])}
    >
      {renderClose()}
      {renderContent()}
      {renderIndex()}
      {renderIndicator()}
    </Popup>
  );
});

ImagePreview.defaultProps = {
  loop: true,
  overlay: true,
  showIndex: true,
  images: [],
  swipeDuration: 300,
  startPosition: 0,
  closeIconPosition: 'top-right' as const,
  showIndicators: false,
  closeOnlyClickCloseIcon: false,
  maxZoom: 3,
};

export default ImagePreview;
