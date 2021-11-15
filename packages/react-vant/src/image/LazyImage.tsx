import React, { useContext } from 'react';
import clsx from 'clsx';
import Image from './Image';
import { Lazyload } from '../lazyload';
import { LazyImageProps } from './PropsType';
import { COMPONENT_TYPE_KEY } from '../utils/constant';
import { Icon } from '../icon';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import { BEM } from '../utils/create/bem';

export const getLazyImagePlaceholder = (bem: BEM): JSX.Element => (
  <div className={clsx(bem('loading'))}>
    <Icon name="photo" className={clsx(bem('loading-icon'))} />
  </div>
);

const LazyImage: React.FC<LazyImageProps> = (props) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('image', prefixCls);

  const { lazyload, ...imageProps } = props;
  const renderPlaceholder = () => {
    if (typeof lazyload === 'boolean') return getLazyImagePlaceholder(bem);
    return lazyload.placeholder || getLazyImagePlaceholder(bem);
  };

  if (lazyload) {
    const { className, style, height, width } = imageProps;
    const attrs = {
      className: clsx(className, bem({ block: imageProps.block })),
      style: { ...style, height, width },
    };
    return (
      <Lazyload {...attrs} placeholder={renderPlaceholder()}>
        <Image {...imageProps} />
      </Lazyload>
    );
  }
  return <Image {...imageProps} />;
};

LazyImage.defaultProps = {
  fit: 'fill',
  errorIcon: 'photo-fail',
  loadingIcon: 'photo',
  showError: true,
  showLoading: true,
  block: true,
};

export const IMAGE_KEY = Symbol('image');
const ImageNamespace = Object.assign(LazyImage, { [COMPONENT_TYPE_KEY]: IMAGE_KEY });

export default ImageNamespace;
