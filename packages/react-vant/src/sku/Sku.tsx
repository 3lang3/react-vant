/* eslint-disable react/no-array-index-key */
import React, { useContext, useMemo } from 'react';
import cls from 'classnames';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import { SkuProps } from './PropsType';
import ActionBar from '../action-bar';
import { Stepper } from '../stepper';
import { Image } from '../image';
import { useSetState } from '../hooks';
import { BORDER_BOTTOM } from '../utils/constant';
import ImagePreview from '../image-preview';
import { Popup } from '../popup';
import { getSkuImgValue } from './utils';
import { UNSELECTED_SKU_VALUE_ID } from './constants';
import SkuRowItem from './components/SkuRowItem';

const Sku: React.FC<SkuProps> = (props) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('sku', prefixCls);
  const [bemRow] = createNamespace('sku-row', prefixCls);

  const [state, updateState] = useSetState({ selectedSku: {}, num: 1 });

  const bodyStyle = useMemo(() => {
    const maxHeight = window.innerHeight - props.bodyOffsetTop;

    return {
      maxHeight: `${maxHeight}px`,
    };
  }, [props.bodyOffsetTop]);

  const imageList = useMemo(() => {
    const { sku, goods } = props;
    const rs = [goods?.picture];
    if (sku.tree.length > 0) {
      sku.tree.forEach((tree) => {
        if (!tree.v) return;
        tree.v.forEach((vItem) => {
          const img = vItem.previewImgUrl || vItem.imgUrl || vItem.img_url;
          if (img && rs.indexOf(img) === -1) {
            rs.push(img);
          }
        });
      });
    }
    return rs;
  }, [props.goods?.picture, JSON.stringify(props.sku.tree)]);

  const onSelect = (skuValue) => {
    // 点击已选中的sku时则取消选中
    const selectedSku =
      state.selectedSku[skuValue.skuKeyStr] === skuValue.id
        ? {
            ...state.selectedSku,
            [skuValue.skuKeyStr]: UNSELECTED_SKU_VALUE_ID,
          }
        : { ...state.selectedSku, [skuValue.skuKeyStr]: skuValue.id };

    updateState({ selectedSku });
  };

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
      className: cls(bem('stepper')),
      value: state.num,
      onChange: (num) => updateState({ num: parseInt(num, 10) }),
    };
    return (
      <div className={cls(bem('stepper-stock'))}>
        <div className={cls(bem('stepper-title'))}>{title}</div>
        <Stepper {...attrs} />
        {props.stepperQuota && (
          <span className={cls(bem('stepper-quota'))}>{props.stepperQuota}</span>
        )}
      </div>
    );
  };

  const previewImage = (startPosition?: number) => {
    ImagePreview.open({ images: imageList, startPosition });
  };

  const renderHeaderInfo = () => {
    return (
      <>
        <div className={cls(bem('goods-price'))}>
          <span className={cls(bem('price-symbol'))}>￥</span>
          <span className={cls(bem('price-num'))}>1.00</span>
          {props.priceTag && <span className={cls(bem('price-tag'))}>{props.priceTag}</span>}
        </div>
        {props.originPrice && <div className={cls(bem('header-item'))}>{props.originPrice}</div>}
        {!props.hideStock && (
          <div className={cls(bem('header-item'))}>
            <span className={cls(bem('stock'))}>剩余 277 件</span>
          </div>
        )}
        {!props.hideSelectedText && (
          <div className={cls(bem('header-item'))}>请选择 颜色 尺寸 加料 非必选属性</div>
        )}
      </>
    );
  };

  const renderHeader = () => {
    const showHeaderImage = true;
    const selectedValue = getSkuImgValue(props.sku, state.selectedSku);
    const imgUrl = selectedValue ? selectedValue.imgUrl : props.goods.picture;
    return (
      <div className={cls(bem('header'), BORDER_BOTTOM)}>
        {showHeaderImage && (
          <Image
            fit="cover"
            src={imgUrl}
            className={cls(bem('header__img-wrap'))}
            onClick={() => previewImage()}
          />
        )}
        <div className={cls(bem('header__goods-info'))}>{renderHeaderInfo()}</div>
      </div>
    );
  };

  const renderRow = (rowData, rowIdx) => {
    const { largeImageMode } = rowData;
    const nodes = rowData.v.map((skuValue, idx) => (
      <SkuRowItem
        key={idx}
        skuList={props.sku.list}
        skuValue={skuValue}
        skuKeyStr={rowData.k_s}
        selectedSku={state.selectedSku}
        disableSoldoutSku={props.disableSoldoutSku}
        largeImageMode={largeImageMode}
        onSkuSelected={onSelect}
        onSkuPreviewImage={() => previewImage(idx)}
      />
    ));
    return (
      <div key={rowIdx} className={cls(bemRow(), BORDER_BOTTOM)}>
        <div className={cls(bemRow('title'))}>
          {rowData.k}
          {rowData.is_multiple && <span className={cls(bemRow('title-multiple'))}>（可多选）</span>}
        </div>

        {largeImageMode ? (
          <div className={cls(bemRow('scroller'))}>
            <div className={cls(bemRow('row'))}>{nodes}</div>
          </div>
        ) : (
          nodes
        )}
      </div>
    );
  };
  const renderBody = () => {
    const { tree = [] } = props.sku;

    return (
      <div className={cls(bem('body'))} style={bodyStyle}>
        <div className={cls(bem('group-container'))}>
          {tree.map((row, idx) => renderRow(row, idx))}
          {props.properties.map((row, idx) => renderRow(row, idx))}
        </div>
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
    <Popup
      round
      visible
      closeable
      position="bottom"
      className={cls(props.className, bem('container'))}
      style={props.style}
    >
      {renderHeader()}
      {renderBody()}
      {renderActions()}
    </Popup>
  );
};

// defaultProps defined if need
Sku.defaultProps = {
  stepperProps: {},
  properties: [],
  bodyOffsetTop: 200,
};

export default Sku;
