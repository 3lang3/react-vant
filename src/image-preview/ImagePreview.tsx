import React, { useEffect, useRef, useState } from 'react';
import cls from 'classnames';
// Utils
import { pick, createNamespace } from '../utils';

// Components
import Icon from '../icon';
import Swipe from '../swipe';
import Popup from '../popup';
import ImagePreviewItem from './ImagePreviewItem';
import { ImagePreviewProps, ImagePreviewStatic } from './PropsType';
import useWindowSize from '../hooks/use-window-size';
import { SwipeActionType } from '../swipe/PropsType';

const [bem] = createNamespace('image-preview');

const ImagePreview: React.FC<ImagePreviewProps> = (props) => {
  const [state, setState] = useState({ active: 0, rootWidth: 0, rootHeight: 0 });

  const swipeRef = useRef<SwipeActionType>();
  const windowSize = useWindowSize();

  const resize = () => {
    if (swipeRef.current) {
      const rect = swipeRef.current.rect();
      const newState = { ...state };
      newState.rootWidth = rect.width;
      newState.rootHeight = rect.height;
      setState(newState);
      swipeRef.current.resize();
    }
  };

  useEffect(() => {
    resize();
  }, [windowSize.width, windowSize.height]);

  const setActive = (active: number) => {
    if (active !== state.active) {
      setState((v) => ({ ...v, active }));
      // emit('change', active);
    }
  };

  useEffect(() => {
    const { startPosition } = props;
    if (props.visible) {
      setActive(+startPosition);
      setImmediate(() => {
        resize();
      });
    }
  }, [props.visible]);

  const renderIndex = () => {
    if (props.showIndex) {
      return (
        <div className={cls(bem('index'))}>
          {props.indexRender
            ? props.indexRender({ index: state.active, len: props.images.length })
            : `${state.active + 1} / ${props.images.length}`}
        </div>
      );
    }
    return null;
  };

  const renderImages = () => (
    <Swipe
      ref={swipeRef}
      loop={props.loop}
      className={cls(bem('swipe'))}
      duration={props.swipeDuration}
      initialSwipe={props.startPosition}
      showIndicators={props.showIndicators}
      indicatorColor="white"
      onChange={setActive}
    >
      {props.images.map((image, i) => (
        <ImagePreviewItem
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          src={image}
          visible={props.visible}
          active={state.active}
          rootWidth={state.rootWidth}
          rootHeight={state.rootHeight}
          onClose={props.onClose}
        />
      ))}
    </Swipe>
  );

  const renderClose = () => {
    if (props.closeable) {
      return (
        <Icon
          name={props.closeIcon}
          className={cls(bem('close-icon', props.closeIconPosition))}
          onClick={props?.onClose}
        />
      );
    }
    return null;
  };
  return (
    <Popup
      className={cls(bem(), props.className)}
      overlayClass={cls(bem('overlay'))}
      afterClose={props.afterClose}
      {...pick(props, ['visible', 'transition', 'overlayStyle', 'closeOnPopstate'])}
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
  closeIconPosition: 'right',
};

export default ImagePreview as React.FC<ImagePreviewProps> & ImagePreviewStatic;
