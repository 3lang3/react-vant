import React, { useContext, useRef, useState } from 'react';
import cls from 'clsx';
import { ImagePreviewProps } from './PropsType';
import { pick } from '../utils';
import { Swiper } from '../swiper';
import type { SwiperInstance } from '../swiper';
import { Popup } from '../popup';
import ImagePreviewItem from './ImagePreviewItem';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

const ImagePreview: React.FC<ImagePreviewProps> = (props) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('image-preview', prefixCls);

  const swiperRef = useRef<SwiperInstance>(null);
  const [active, setActive] = useState(() => props.startPosition);

  const onSwipeChange = (idx: number) => {
    if (active !== idx) {
      setActive(idx);
      props.onChange?.(idx);
    }
  };
  const onClose = (image: string, i: number) => {
    props.onClose && props.onClose?.({ url: image, index: i });
  };

  const renderImages = () => (
    <Swiper
      ref={swiperRef}
      className={cls(bem('swipe'))}
      loop={props.loop}
      duration={props.swipeDuration}
      initialSwipe={active}
      onChange={onSwipeChange}
      indicator={props.showIndicators}
    >
      {props.images.map((image, i) => (
        <Swiper.Item
          className={cls(bem('item'))}
          key={image}
          onClick={() => {
            onClose(image, i);
          }}
        >
          <ImagePreviewItem
            maxZoom={props.maxZoom}
            image={image}
            lazyload={props.lazyload}
            onTap={() => {
              onClose(image, i);
            }}
            onZoomChange={(zoom) => {
              if (zoom !== 1) {
                swiperRef.current?.disable();
              } else {
                swiperRef.current?.enable();
              }
            }}
          />
        </Swiper.Item>
      ))}
    </Swiper>
  );

  const renderClose = () => {
    if (props.closeable) {
      return React.cloneElement(props.closeIcon as React.ReactElement, {
        className: cls(bem('close-icon', props.closeIconPosition)),
        onClick: props.onClose,
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

  return (
    <Popup
      className={cls(bem(), props.className)}
      overlayClass={cls(bem('overlay'))}
      {...pick(props, [
        'visible',
        'overlayStyle',
        'closeOnPopstate',
        'onClose',
        'onClosed',
        'beforeClose',
        'teleport',
      ])}
    >
      {renderClose()}
      {renderImages()}
      {renderIndex()}
    </Popup>
  );
};

ImagePreview.defaultProps = {
  loop: true,
  overlay: true,
  showIndex: true,
  images: [],
  swipeDuration: 300,
  startPosition: 0,
  closeIconPosition: 'top-right',
  showIndicators: false,
  maxZoom: 3,
};

export default ImagePreview;
