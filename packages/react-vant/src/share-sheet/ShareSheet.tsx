import React, { useContext } from 'react';
import cls from 'clsx';
import { ShareSheetOption, ShareSheetProps } from './PropsType';
import { pick } from '../utils';
import Popup from '../popup';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

const PRESET_ICONS = [
  'qq',
  'link',
  'weibo',
  'wechat',
  'poster',
  'qrcode',
  'weapp-qrcode',
  'wechat-moments',
];

function getIconURL(icon: string) {
  if (PRESET_ICONS.includes(icon)) {
    return `https://img.yzcdn.cn/vant/share-sheet-${icon}.png`;
  }
  return icon;
}

const ShareSheet: React.FC<ShareSheetProps> = (props) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('share-sheet', prefixCls);

  const onCancel = () => {
    props.onCancel?.();
  };

  const onSelect = (option: ShareSheetOption, index: number) => {
    props.onSelect?.(option, index);
  };

  const renderHeader = () => {
    const { title, description } = props;
    if (title || description) {
      return (
        <div className={cls(bem('header'))}>
          {title && <div className={cls(bem('title'))}>{title}</div>}
          {description && <div className={cls(bem('description'))}>{description}</div>}
        </div>
      );
    }
    return null;
  };

  const renderOption = (option: ShareSheetOption, index: number) => {
    const { name, icon, className, description } = option;
    return (
      <div
        key={index}
        role="button"
        tabIndex={0}
        className={cls([bem('option'), className])}
        onClick={() => onSelect(option, index)}
      >
        <img alt="share sheet icon" src={getIconURL(icon)} className={cls(bem('icon'))} />
        {name && <span className={cls(bem('name'))}>{name}</span>}
        {description && <span className={cls(bem('option-description'))}>{description}</span>}
      </div>
    );
  };

  const renderOptions = (options: ShareSheetOption[], border?: boolean, key?: React.Key) => (
    <div key={key} className={cls(bem('options', { border }))}>
      {options.map(renderOption)}
    </div>
  );

  const renderRows = () => {
    const { options } = props;
    if (Array.isArray(options[0])) {
      return (options as ShareSheetOption[][]).map((item, index) =>
        renderOptions(item, index !== 0, index),
      );
    }
    return renderOptions(options as unknown as ShareSheetOption[]);
  };

  const renderCancelButton = () => {
    const { cancelText } = props;
    if (cancelText) {
      return (
        <button type="button" className={cls(bem('cancel'))} onClick={onCancel}>
          {cancelText}
        </button>
      );
    }
    return null;
  };
  return (
    <Popup
      round
      className={cls(bem())}
      position="bottom"
      onClose={onCancel}
      {...pick(props, [
        'closeOnPopstate',
        'safeAreaInsetBottom',
        'visible',
        'overlay',
        'duration',
        'lockScroll',
        'overlayStyle',
        'overlayClass',
        'closeOnClickOverlay',
      ])}
    >
      {renderHeader()}
      {renderRows()}
      {renderCancelButton()}
    </Popup>
  );
};

ShareSheet.defaultProps = {
  cancelText: '取消',
  options: [],
  closeOnPopstate: true,
  safeAreaInsetBottom: true,
  closeOnClickOverlay: true,
};

export default ShareSheet;
