import React, { isValidElement } from 'react';
import classnames from 'classnames';
import { EmptyProps } from './PropsType';
import { createNamespace, getSizeStyle } from '../utils';
import { Network } from './Network';

const PRESET_IMAGES = ['error', 'search', 'default'];

const [bem] = createNamespace('empty');

const Empty: React.FC<EmptyProps> = (props) => {
  const renderImage = () => {
    let { image } = props;

    if (isValidElement(image)) {
      return image;
    }

    if (image === 'network') {
      return Network;
    }

    if (PRESET_IMAGES.includes(image as string)) {
      image = `https://img.yzcdn.cn/vant/empty-image-${image}.png`;
    }

    return <img src={image as string} alt="" />;
  };

  const renderDescription = () => {
    if (props.description) {
      return <p className={classnames(bem('description'))}>{props.description}</p>;
    }
    return null;
  };

  const renderBottom = () => {
    if (props.children) {
      return <div className={classnames(bem('bottom'))}>{props.children}</div>;
    }
    return null;
  };

  return (
    <div className={classnames(props.className, bem())} style={props.style}>
      <div className={classnames(bem('image'))} style={getSizeStyle(props.imageSize)}>
        {renderImage()}
      </div>
      {renderDescription()}
      {renderBottom()}
    </div>
  );
};

Empty.defaultProps = {
  image: 'default',
};

export default Empty;
