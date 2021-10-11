import React, { useContext, useRef, useState } from 'react';
import cls from 'classnames';
import { ImagePreviewProps } from './PropsType';
import { pick } from '../utils';
import Icon from '../icon';
import Swipe from '../swipe';
import Image from '../image';
import Loading from '../loading';
import Popup from '../popup';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

const ImagePreview: React.FC<ImagePreviewProps> = (props) => {
  const { prefixCls,  createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('imagee-preview', prefixCls);
  const [active, setActive] = useState(() => props.startPosition);
  const mountedRef = useRef(false);

  const onSwipeChange = (idx: number) => {
    if (active !== idx && mountedRef.current) {
      setActive(idx);
      props.onChange?.(idx);
    }
  };

  const renderImages = () => (
    <Swipe
      onAfterInit={() => {
        mountedRef.current = true;
      }}
      observer
      observeParents
      loop={props.loop}
      className={cls(bem('swipe'))}
      duration={props.swipeDuration}
      initialSwipe={active}
      onChange={onSwipeChange}
      pagination={props.showIndicators}
    >
      {props.images.map((image, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <Swipe.Item key={i}>
          <Image
            onClick={() => {
              props.onClose?.({ url: image, index: i });
            }}
            loadingIcon={<Loading type="spinner" />}
            src={image}
            fit="contain"
            className={cls(bem('image'))}
          />
        </Swipe.Item>
      ))}
    </Swipe>
  );

  const renderClose = () => {
    if (props.closeable) {
      return (
        <Icon
          name={props.closeIcon}
          className={cls(bem('close-icon', props.closeIconPosition))}
          onClick={() => props.onClose?.()}
        />
      );
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
      beforeClose={props.beforeClose}
      {...pick(props, ['visible', 'overlayStyle', 'closeOnPopstate', 'onClose', 'onClosed'])}
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
  closeIcon: 'clear',
  closeIconPosition: 'top-right',
  showIndicators: false,
};

export default ImagePreview;
