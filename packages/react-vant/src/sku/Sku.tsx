/* eslint-disable react/no-array-index-key */
import React, { useCallback, useContext, useMemo, useRef } from 'react';
import cls from 'classnames';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import { SkuActionType, SkuProps } from './PropsType';
import ActionBar from '../action-bar';
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
import { LIMIT_TYPE, UNSELECTED_SKU_VALUE_ID } from './constants';
import SkuRow from './components/SkuRow';
import SkuRowItem from './components/SkuRowItem';
import SkuRowPropItem from './components/SkuRowPropItem';
import SkuStepper from './components/SkuStepper';
import Toast from '../toast';

const { QUOTA_LIMIT } = LIMIT_TYPE;

const Sku: React.FC<SkuProps> = (props) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('sku', prefixCls);

  const stepperError = useRef<any>();
  const [state, updateState] = useSetState({
    selectedSku: {},
    selectedProp: {},
    selectedNum: props.startSaleNum,
  });

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

  const unselectedSku = useMemo(() => {
    return tree.filter((item) => !state.selectedSku[item.k_s]).map((item) => item.k);
  }, [tree, state.selectedSku]);

  const getUnselectedProp = useCallback(
    (isNecessary?: boolean) => {
      return properties
        .filter((item) => (isNecessary ? item.is_necessary !== false : true))
        .filter((item) => (state.selectedProp[item.k_id] || []).length < 1)
        .map((item) => item.k);
    },
    [properties, state.selectedProp],
  );

  const selectedText = useMemo(() => {
    if (selectedSkuComb) {
      const values = selectedSkuValues.concat(selectedPropValues);
      return `已选 ${values.map((item) => item.name).join(' ')}`;
    }

    return `请选择 ${unselectedSku.concat(getUnselectedProp()).join(' ')}`;
  }, [unselectedSku, getUnselectedProp, selectedSkuComb, selectedSkuValues, selectedPropValues]);

  const price = useMemo(() => {
    if (selectedSkuComb) {
      return ((selectedSkuComb.price + selectedSkuComb.property_price) / 100).toFixed(2);
    }
    // sku.price是一个格式化好的价格区间
    return sku.price;
  }, [JSON.stringify(selectedSkuComb), sku.price]);

  const stock = useMemo(() => {
    const { stockNum } = props.customStepperConfig;
    if (stockNum !== undefined) {
      return stockNum;
    }
    if (selectedSkuComb) {
      return selectedSkuComb.stock_num;
    }
    return sku.stock_num;
  }, [sku.stock_num, JSON.stringify(selectedSkuComb)]);

  const stockContent = useMemo(() => {
    if (props.stockRender) {
      return props.stockRender(stock);
    }
    return `剩余 ${stock} 件`;
  }, [stock]);

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

  const onOverLimit = (data) => {
    const { action, limitType, quota, quotaUsed } = data;
    const { handleOverLimit } = props.customStepperConfig;

    if (handleOverLimit) {
      handleOverLimit(data);
      return;
    }

    if (action === 'minus') {
      if (props.startSaleNum > 1) {
        Toast(`${props.startSaleNum}件起售`);
      } else {
        Toast('至少选择一件');
      }
    } else if (action === 'plus') {
      if (limitType === QUOTA_LIMIT) {
        if (quotaUsed > 0) {
          Toast(`每人限购${quota}件，你已购买${quotaUsed}件`);
        } else {
          Toast(`每人限购${quota}件`);
        }
      } else {
        Toast('库存不足');
      }
    }
  };

  const onStepperState = (data) => {
    stepperError.current = data.valid
      ? null
      : {
          ...data,
          action: 'plus',
        };
  };

  const validateSku = () => {
    if (state.selectedNum === 0) {
      return '商品已经无法购买啦';
    }

    if (isSkuCombSelected) {
      return '';
    }

    return `请选择 ${unselectedSku.concat(getUnselectedProp(true)).join(' ')}`;
  };

  const getSkuData = () => {
    return {
      goodsId: props.goodsId,
      selectedNum: state.selectedNum,
      selectedSkuComb,
    };
  };

  const onAddCart = (data) => {
    props.onAddCart?.(data);
  };
  const onBuyClicked = (data) => {
    props.onBuyClicked?.(data);
  };

  const onBuyOrAddCart = async (type: SkuActionType) => {
    // sku 不符合购买条件
    if (stepperError.current) {
      onOverLimit(stepperError.current);
      return;
    }

    if (props.customSkuValidator) {
      if (
        !(await props.customSkuValidator(type, { ...state.selectedSku, ...state.selectedProp }))
      ) {
        return;
      }
    } else {
      const error = validateSku();
      if (error) {
        Toast(error);
        return;
      }
    }

    const data = getSkuData();
    if (type === 'add-cart') {
      onAddCart(data);
    } else {
      onBuyClicked(data);
    }
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
            <span className={cls(bem('stock'))}>{stockContent}</span>
          </div>
        )}
        {!props.hideSelectedText && <div className={cls(bem('header-item'))}>{selectedText}</div>}
      </>
    );
  };

  const renderHeader = () => {
    const selectedValue = getSkuImgValue(sku, state.selectedSku);
    const imgUrl = selectedValue ? selectedValue.imgUrl : props.goods.picture;
    const imgUrlPostion = selectedValue ? selectedValue.position : 0;
    return (
      <div className={cls(bem('header'), BORDER_BOTTOM)}>
        {props.showHeaderImage && (
          <Image
            fit="cover"
            src={imgUrl}
            className={cls(bem('header__img-wrap'))}
            onClick={() => previewImage(imgUrlPostion)}
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
        <SkuStepper
          currentNum={state.selectedNum}
          onChange={(currentValue) => updateState({ selectedNum: parseInt(`${currentValue}`, 10) })}
          stock={stock}
          quota={props.quota}
          quotaUsed={props.quotaUsed}
          startSaleNum={props.startSaleNum}
          customStepperConfig={props.customStepperConfig}
          stepperTitle={props.stepperTitle}
          hideQuotaText={props.hideQuotaText}
          onSkuStepperState={onStepperState}
          onSkuOverLimit={onOverLimit}
        />
      </div>
    );
  };

  const renderActions = () => {
    return (
      <div className={cls(bem('actions'))}>
        <ActionBar>
          <ActionBar.Button
            type="warning"
            text="加入购物车"
            onClick={() => onBuyOrAddCart('add-cart')}
          />
          <ActionBar.Button
            type="danger"
            text="立即购买"
            onClick={() => onBuyOrAddCart('buy-clicked')}
          />
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
  startSaleNum: 1,
  stepperTitle: '购买数量',
  properties: [],
  bodyOffsetTop: 200,
  disableSoldoutSku: true,
  showHeaderImage: true,
  customStepperConfig: {},
};

export default Sku;
