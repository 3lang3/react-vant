import React, { useContext } from 'react';
import cls from 'classnames';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import { SkuProps } from './PropsType';
import ActionBar from '../action-bar';
import { Stepper } from '../stepper';
import { Image } from '../image';
import { useSetState } from '../hooks';
import { BORDER_BOTTOM } from '../utils/constant';
import ImagePreview from '../image-preview';

const Sku: React.FC<SkuProps> = (props) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('sku', prefixCls);

  const [state, updateState] = useSetState({ num: 1 });

  const onAddCart = () => {
    props.onAddCart?.({});
  };
  const onBuyClicked = () => {
    props.onBuyClicked?.({});
  };

  const renderStepper = () => {
    const { integer = true, min, max } = props.stepperProps;
    const title = '购买数量';
    const attrs = {
      integer,
      min,
      max,
      value: state.num,
      onChange: (num) => updateState({ num: parseInt(num, 10) }),
    };
    return (
      <div className={cls(bem('stepper-stock'))}>
        <div className={cls(bem('stepper-title'))}>{title}</div>
        <Stepper {...attrs} />
      </div>
    );
  };

  const previewImage = () => {
    ImagePreview.open({ images: [''] });
  };

  const renderHeaderInfo = () => {
    return null;
  };

  const renderHeader = () => {
    const showHeaderImage = true;
    const imgUrl = '';
    return (
      <div className={cls(bem('header'), BORDER_BOTTOM)}>
        {showHeaderImage && (
          <Image fit="cover" src={imgUrl} className={cls(bem('img-wrap'))} onClick={previewImage} />
        )}
        <div className={cls(bem('goods-info'))}>{renderHeaderInfo()}</div>
      </div>
    );
  };

  const renderRowItem = (data) => {
    return <div className={cls(bem('row__item'))}>123</div>;
  };

  const renderRow = (rowData) => {
    return (
      <div className={cls(bem('row'), BORDER_BOTTOM)}>
        <div className={cls(bem('row__title'))}>{rowData.title}</div>
        {renderRowItem({})}
      </div>
    );
  };

  const renderBody = () => {
    return (
      <div className={cls(bem('body'))}>
        {renderRow({})}
        {renderStepper()}
      </div>
    );
  };

  const renderActions = () => {
    return (
      <div className={cls(bem('actions'))}>
        <ActionBar>
          <ActionBar.Button type="warning" text="加入购物车" onClick={onAddCart} />
          <ActionBar.Button type="danger" text="立即购买" onClick={onBuyClicked} />
        </ActionBar>
      </div>
    );
  };
  return (
    <div className={cls(props.className, bem())} style={props.style}>
      {renderHeader()}
      {renderBody()}
      {renderActions()}
    </div>
  );
};

// defaultProps defined if need
Sku.defaultProps = {
  stepperProps: {},
};

export default Sku;
