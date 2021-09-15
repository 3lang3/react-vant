import React, { CSSProperties, useRef, useMemo, useEffect } from 'react';
import classnames from 'classnames';
import { ImageProps } from './PropsType';
import { isDef, addUnit, createNamespace } from '../utils';
import Icon from '../icon';
import { useSetState, useUpdateEffect } from '../hooks';

const [bem] = createNamespace('image');

const Image: React.FC<ImageProps> = (props) => {
  const { fit, errorIcon, loadingIcon, showError, showLoading, block } = props;
  const [status, setStatus] = useSetState({ loading: true, error: false });
  const imgRef = useRef<HTMLImageElement>(null);
  const unmountedRef = useRef(false);

  const style = useMemo(() => {
    const internalStyle: CSSProperties = {};

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
  }, []);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setStatus({ loading: false, error: false });
    }
    return () => {
      unmountedRef.current = true;
    };
  }, []);

  useUpdateEffect(() => {
    if (imgRef.current && !imgRef.current.complete) {
      setStatus({ error: false, loading: true });
    }
  }, [props.src]);

  const onLoad = (e) => {
    if (!unmountedRef.current) {
      setStatus({ loading: false });
      props.onLoad?.(e);
    }
  };

  const onError = (e) => {
    if (!unmountedRef.current) {
      setStatus({ error: true, loading: false });
      props.onLoad?.(e);
    }
  };

  const renderLoadingIcon = () => {
    if (typeof loadingIcon !== 'string') return loadingIcon;
    return (
      <Icon
        size={props.iconSize}
        name={loadingIcon}
        className={classnames(bem('loading-icon'))}
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
        className={classnames(bem('error-icon'))}
        classPrefix={props.iconPrefix}
      />
    );
  };

  const renderPlaceholder = () => {
    if (status.loading && showLoading) {
      return (
        <div className={classnames(bem('loading'))} onClick={props.onClick}>
          {renderLoadingIcon()}
        </div>
      );
    }
    if (status.error && showError) {
      return (
        <div className={classnames(bem('error'))} onClick={props.onClick}>
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
      className: classnames(bem('img')),
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
      className={classnames(props.className, bem({ block, round: props.round }))}
      style={style}
      onClick={props.onClick}
    >
      {renderImage()}
      {renderPlaceholder()}
      {props.children}
    </div>
  );
};

Image.defaultProps = {
  fit: 'fill',
  errorIcon: 'photo-fail',
  loadingIcon: 'photo',
  showError: true,
  showLoading: true,
  block: true,
};

export default Image;
