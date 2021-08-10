import React, { useMemo, useState } from 'react';
import cls from 'classnames';
// Utils
import { createNamespace } from '../utils';

// Components
import Image from '../image';
import Loading from '../loading';
import Swipe from '../swipe';
import { ImagePreviewItemProps } from './PropsType';

const [bem] = createNamespace('image-preview');

const ImagePreviewItem: React.FC<ImagePreviewItemProps> = (props) => {
  const [state, setState] = useState({ imageRatio: 0 });
  const vertical = useMemo(() => {
    const { rootWidth, rootHeight } = props;
    const rootRatio = rootHeight / rootWidth;
    return state.imageRatio > rootRatio;
  }, [state.imageRatio]);

  const onLoad = (event) => {
    const { naturalWidth, naturalHeight } = event.target as HTMLImageElement;
    setState({ imageRatio: naturalHeight / naturalWidth });
  };

  return (
    <Swipe.Item className={cls(bem('swipe-item'))}>
      <Image
        loadingIcon={<Loading type="spinner" />}
        src={props.src}
        fit="contain"
        className={cls(bem('image', { vertical }))}
        onLoad={onLoad}
        onClick={props.onClose}
      />
    </Swipe.Item>
  );
};

export default ImagePreviewItem;
