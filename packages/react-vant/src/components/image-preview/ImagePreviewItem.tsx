import React, { useContext } from 'react';
import cls from 'clsx';
import { useGesture } from '@use-gesture/react';
import { useSpring, animated } from '@react-spring/web';
import { ImagePreviewItemProps } from './PropsType';
import Image from '../image';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

const ImagePreviewItem: React.FC<ImagePreviewItemProps> = (props) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('image-preview', prefixCls);

  const [{ zoom, x, y }, api] = useSpring(() => ({
    zoom: 1,
    x: 0,
    y: 0,
    config: { tension: 300 },
  }));

  const bind = useGesture(
    {
      onDrag: (state) => {
        if (state.tap && state.elapsedTime > 0) {
          // 判断点击时间>0是为了过滤掉非正常操作，例如用户长按选择图片之后的取消操作（也是一次点击）
          props.onTap();
          return;
        }
        const [swipeX, swipeY] = state.swipe;
        const currentZoom = zoom.get();
        if (currentZoom <= 1 || swipeX !== 0 || swipeY !== 0) {
          api.start({
            x: 0,
            y: 0,
            immediate: true,
          });
        } else {
          const [offsetX, offsetY] = state.offset;
          api.start({
            x: offsetX,
            y: offsetY,
            immediate: true,
          });
        }
      },
      onPinch: (state) => {
        const [d] = state.offset;
        const currentZoom = state.last ? Math.max(Math.min(d, props.maxZoom), 1) : d;
        api.start({
          zoom: currentZoom,
          immediate: !state.last,
        });
        props.onZoomChange?.(currentZoom);
        if (state.last && currentZoom <= 1) {
          api.start({
            x: 0,
            y: 0,
            immediate: true,
          });
        }
      },
    },
    {
      drag: {
        from: () => [x.get(), y.get()],
      },
      pinch: {
        distanceBounds: {
          min: 1,
          max: props.maxZoom,
        },
        rubberband: true,
        from: () => [zoom.get(), 0],
      },
    },
  );

  return (
    <div
      className={cls(bem('slide'))}
      onPointerMove={(e) => {
        if (zoom.get() !== 1) {
          e.stopPropagation();
        }
      }}
    >
      <div className={cls(bem('control'))} {...bind()}>
        <animated.div className={cls(bem('image-wrapper'))} style={{ scale: zoom, x, y }}>
          <Image
            fit="contain"
            src={props.image}
            className={cls(bem('image'))}
            lazyload={props.lazyload}
            onClick={() => {
              props.onTap?.();
            }}
          />
        </animated.div>
      </div>
    </div>
  );
};

export default ImagePreviewItem;
