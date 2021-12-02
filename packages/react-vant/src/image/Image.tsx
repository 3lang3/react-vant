import React, { CSSProperties, useRef, useMemo, useEffect, useContext } from 'react';
import clsx from 'clsx';
import { ImageProps } from './PropsType';
import { isDef, addUnit } from '../utils';
import Icon from '../icon';
import { useSetState } from '../hooks';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

const Image: React.FC<ImageProps> = (props) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('image', prefixCls);
  const [status, setStatus] = useSetState({ loading: true, error: false });
  const imgRef = useRef<HTMLImageElement>(null);

  const { fit, errorIcon, loadingIcon, showError, showLoading, block } = props;

  const style = useMemo(() => {
    const internalStyle: CSSProperties = { ...props.style };

    if (isDef(props.width)) {
      internalStyle.width = addUnit(props.width);
    }

    if (isDef(props.height)) {
      internalStyle.height = addUnit(props.height);
    }

    if (isDef(props.radius)) {
      internalStyle.overflow = 'hidden';
      internalStyle.borderRadius = addUnit(props.radius);
    }

    return internalStyle;
  }, [props.style]);

  useEffect(() => {
    const payload = { error: false, loading: true } as typeof status;
    if (imgRef.current) {
      if (imgRef.current.complete) {
        payload.loading = false;
      } else {
        payload.loading = true;
      }
    }
    setStatus(payload);
  }, [props.src]);

  const onLoad = (e) => {
    setStatus({ loading: false });
    props.onLoad?.(e);
  };

  const onError = (e) => {
    setStatus({ error: true, loading: false });
    props.onLoad?.(e);
  };

  const renderLoadingIcon = () => {
    if (typeof loadingIcon !== 'string') return loadingIcon;
    return (
      <Icon
        size={props.iconSize}
        name={loadingIcon}
        className={clsx(bem('loading-icon'))}
        classPrefix={props.iconPrefix}
      />
    );
  };

  const renderErrorIcon = () => {
    if (typeof errorIcon !== 'string') return errorIcon;
    return (
      <Icon
        size={props.iconSize}
        name={errorIcon}
        className={clsx(bem('error-icon'))}
        classPrefix={props.iconPrefix}
      />
    );
  };

  const renderPlaceholder = () => {
    if (status.loading && showLoading) {
      return (
        <div className={clsx(bem('loading'))} onClick={props.onClick}>
          {renderLoadingIcon()}
        </div>
      );
    }
    if (status.error && showError) {
      return (
        <div className={clsx(bem('error'))} onClick={props.onClick}>
          {renderErrorIcon()}
        </div>
      );
    }
    return null;
  };

  const renderImage = () => {
    if (status.error || !props.src) {
      return null;
    }
    const attrs = {
      className: clsx(bem('img')),
      style: {
        objectFit: fit,
      },
    };
    return (
      <img
        ref={imgRef}
        alt={props.alt || 'img'}
        src={props.src}
        onLoad={onLoad}
        onError={onError}
        {...attrs}
      />
    );
  };

  return (
    <div
      className={clsx(
        props.className,
        bem({
          block,
          round: props.round,
        }),
      )}
      style={style}
      onClick={props.onClick}
    >
      {renderImage()}
      {renderPlaceholder()}
      {props.children}
    </div>
  );
};

export default Image;
