/* eslint-disable no-console */
import React, { useContext } from 'react';
import cls from 'clsx';
// Utils
import { isImageFile } from './utils';
import { isDef, getSizeStyle, extend } from '../utils';
import { callInterceptor } from '../utils/interceptor';
// Components
import Icon from '../icon';
import Image from '../image';
import Loading from '../loading';
import { UploaderPrviewItemProps } from './PropsType';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

export const UploaderPreviewItem: React.FC<UploaderPrviewItemProps> = (props) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('uploader', prefixCls);

  const renderMask = () => {
    const { status, message } = props.item;

    if (status === 'uploading' || status === 'failed') {
      const MaskIcon =
        status === 'failed' ? (
          <Icon name="close" className={cls(bem('mask-icon'))} />
        ) : (
          <Loading className={cls(bem('loading'))} />
        );

      const showMessage = isDef(message) && message !== '';

      return (
        <div className={cls(bem('mask'))}>
          {MaskIcon}
          {showMessage && <div className={cls(bem('mask-message'))}>{message}</div>}
        </div>
      );
    }
    return null;
  };

  const onDelete = (event) => {
    const { name, item, index, beforeDelete } = props;
    event.stopPropagation();
    callInterceptor({
      interceptor: beforeDelete,
      args: [item, { name, index }],
      done: () => props.onDelete?.(),
    });
  };

  const onPreview = () => {
    if (props.onPreview) props.onPreview();
  };

  const renderDeleteIcon = () => {
    if (props.deletable && props.item.status !== 'uploading') {
      return (
        <div className={cls(bem('preview-delete'))} onClick={onDelete}>
          <Icon name="cross" className={cls(bem('preview-delete-icon'))} />
        </div>
      );
    }
    return null;
  };

  const renderCover = () => {
    if (props.previewCoverRender) {
      const { index, item } = props;
      return (
        <div className={cls(bem('preview-cover'))}>
          {props.previewCoverRender(extend({ index }, item))}
        </div>
      );
    }
    return null;
  };

  const renderPreview = () => {
    const { item } = props;

    if (isImageFile(item)) {
      return (
        <Image
          fit={props.imageFit}
          src={item.content || item.url}
          className={cls(bem('preview-image'))}
          width={props.previewSize}
          height={props.previewSize}
          onClick={onPreview}
        >
          {renderCover()}
        </Image>
      );
    }

    return (
      <div className={cls(bem('file'))} style={getSizeStyle(props.previewSize)}>
        <Icon className={cls(bem('file-icon'))} name="description" />
        <div className={cls(bem('file-name'), 'rv-ellipsis')}>
          {item.file ? item.file.name : item.url}
        </div>
        {renderCover()}
      </div>
    );
  };

  return (
    <div className={cls(bem('preview'))} onClick={props.onClick}>
      {renderPreview()}
      {renderMask()}
      {renderDeleteIcon()}
    </div>
  );
};
