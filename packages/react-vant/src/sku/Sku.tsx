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
import {
  getSelectedProperties,
  getSelectedPropValues,
  getSelectedSkuValues,
  getSkuComb,
  getSkuImgValue,
  isAllSelected,
} from './utils';
import { UNSELECTED_SKU_VALUE_ID } from './constants';
import SkuRow from './components/SkuRow';
import SkuRowItem from './components/SkuRowItem';
import SkuRowPropItem from './components/SkuRowPropItem';

const Sku: React.FC<SkuProps> = (props) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('sku', prefixCls);

  const [state, updateState] = useSetState({ selectedSku: {}, selectedProp: {}, selectedNum: 1 });

  const { sku, properties = [] } = props;
  const { tree = [] } = sku;

  const bodyStyle = useMemo(() => {
    const maxHeight = window.innerHeight - props.bodyOffsetTop;

    return {
      maxHeight: `${maxHeight}px`,
    };
  }, [props.bodyOffsetTop]);

  const imageList = useMemo(() => {
    const { goods } = props;
    const rs = [goods?.picture];
    if (sku.tree.length > 0) {
      sku.tree.forEach((treeItem) => {
        if (!treeItem.v) return;
        treeItem.v.forEach((vItem) => {
          const img = vItem.previewImgUrl || vItem.imgUrl || vItem.img_url;
          if (img && rs.indexOf(img) === -1) {
            rs.push(img);
          }
        });
      });
    }
    return rs;
  }, [props.goods?.picture, sku.tree]);

  const hasSku = useMemo(() => !sku.none_sku, [sku.none_sku]);
  const isSkuCombSelected = useMemo(() => {
    // SKU 未选完
    if (hasSku && !isAllSelected(tree, state.selectedSku)) {
      return false;
    }

    // 属性未全选
    return !properties
      .filter((i) => i.is_necessary !== false)
      .some((i) => (state.selectedProp[i.k_id] || []).length === 0);
  }, [hasSku, state]);

  const selectedSkuValues = useMemo(() => {
    return getSelectedSkuValues(tree, state.selectedSku);
  }, [tree, state.selectedSku]);

  const selectedPropValues = useMemo(() => {
    return getSelectedPropValues(properties, state.selectedProp);
  }, [properties, state.selectedProp]);

  const selectedSkuComb = useMemo(() => {
    let skuComb = null;
    if (isSkuCombSelected) {
      if (hasSku) {
        skuComb = getSkuComb(sku.list, state.selectedSku);
      } else {
        skuComb = {
          id: sku.collection_id,
          price: Math.round(sku.price * 100),
          stock_num: sku.stock_num,
        };
      }

      if (skuComb) {
        skuComb.properties = getSelectedProperties(properties, state.selectedProp);
        skuComb.property_price = selectedPropValues.reduce((acc, cur) => acc + (cur.price || 0), 0);
      }
    }
    return skuComb;
  }, [
    isSkuCombSelected,
    hasSku,
    JSON.stringify(sku),
    JSON.stringify(state),
    properties,
    selectedPropValues,
  ]);

  const selectedText = useMemo(() => {
    if (selectedSkuComb) {
      const values = selectedSkuValues.concat(selectedPropValues);
      return `已选 ${values.map((item) => item.name).join(' ')}`;
    }

    const unselectedSku = tree.filter((item) => !state.selectedSku[item.k_s]).map((item) => item.k);

    const unselectedProp = properties
      .filter((item) => (state.selectedProp[item.k_id] || []).length < 1)
      .map((item) => item.k);

    return `请选择 ${unselectedSku.concat(unselectedProp).join(' ')}`;
  }, [
    tree,
    properties,
    selectedSkuComb,
    selectedSkuValues,
    selectedPropValues,
    state.selectedSku,
    state.selectedProp,
  ]);

  const price = useMemo(() => {
    if (selectedSkuComb) {
      return ((selectedSkuComb.price + selectedSkuComb.property_price) / 100).toFixed(2);
    }
    // sku.price是一个格式化好的价格区间
    return sku.price;
  }, [JSON.stringify(selectedSkuComb), sku.price]);

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
    if (props.onSkuSelected) {
      props.onSkuSelected({
        skuValue,
        selectedSku: state.selectedSku,
        selectedSkuComb,
      });
    }
  };

  const onPropSelect = (propValue) => {
    const arr = state.selectedProp[propValue.skuKeyStr] || [];
    const pos = arr.indexOf(propValue.id);

    if (pos > -1) {
      arr.splice(pos, 1);
    } else if (propValue.multiple) {
      arr.push(propValue.id);
    } else {
      arr.splice(0, 1, propValue.id);
    }
    const selectedProp = {
      ...state.selectedProp,
      [propValue.skuKeyStr]: arr,
    };

    updateState({ selectedProp });

    if (props.onSkuPropSelected) {
      props.onSkuPropSelected({
        propValue,
        selectedProp: state.selectedProp,
        selectedSkuComb,
      });
    }
  };

  const getSkuData = () => {
    return {
      goodsId: props.goodsId,
      selectedNum: state.selectedNum,
      selectedSkuComb,
    };
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
      value: state.selectedNum,
      onChange: (selectedNum) => updateState({ selectedNum: parseInt(selectedNum, 10) }),
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
          <span className={cls(bem('price-num'))}>{price}</span>
          {props.priceTag && <span className={cls(bem('price-tag'))}>{props.priceTag}</span>}
        </div>
        {props.originPrice && <div className={cls(bem('header-item'))}>{props.originPrice}</div>}
        {!props.hideStock && (
          <div className={cls(bem('header-item'))}>
            <span className={cls(bem('stock'))}>剩余 277 件</span>
          </div>
        )}
        {!props.hideSelectedText && <div className={cls(bem('header-item'))}>{selectedText}</div>}
      </>
    );
  };

  const renderHeader = () => {
    const selectedValue = getSkuImgValue(sku, state.selectedSku);
    const imgUrl = selectedValue ? selectedValue.imgUrl : props.goods.picture;
    return (
      <div className={cls(bem('header'), BORDER_BOTTOM)}>
        {props.showHeaderImage && (
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

  const renderBody = () => {
    return (
      <div className={cls(bem('body'))} style={bodyStyle}>
        <div className={cls(bem('group-container'))}>
          {tree.map((skuTreeItem, i) => (
            <SkuRow key={i} skuRow={skuTreeItem}>
              {skuTreeItem.v.map((skuValue, idx) => (
                <SkuRowItem
                  key={idx}
                  skuList={sku.list}
                  skuValue={skuValue}
                  skuKeyStr={`${skuTreeItem.k_s}`}
                  selectedSku={state.selectedSku}
                  disableSoldoutSku={props.disableSoldoutSku}
                  largeImageMode={skuTreeItem.largeImageMode}
                  onSkuSelected={onSelect}
                  onSkuPreviewImage={() => previewImage(idx)}
                />
              ))}
            </SkuRow>
          ))}

          {properties.map((skuTreeItem, i) => (
            <SkuRow key={i} skuRow={skuTreeItem}>
              {skuTreeItem.v.map((skuValue, idx) => (
                <SkuRowPropItem
                  key={idx}
                  skuValue={skuValue}
                  skuKeyStr={`${skuTreeItem.k_id}`}
                  selectedProp={state.selectedProp}
                  multiple={skuTreeItem.is_multiple}
                  onSkuPropSelected={onPropSelect}
                />
              ))}
            </SkuRow>
          ))}
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
  disableSoldoutSku: true,
  showHeaderImage: true,
};

export default Sku;
