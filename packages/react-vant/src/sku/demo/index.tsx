/* eslint-disable no-console */
import React, { useRef } from 'react';
import { components } from 'site-mobile-demo';
import { Button, Toast } from 'react-vant';
import { Sku } from '..';
import { getSkuData, initialSku } from './data';
import './style.less';
import { SkuInstance } from '../PropsType';
import { LIMIT_TYPE } from '../constants';

const demoData = getSkuData();
const demoDataLarge = getSkuData(true);

const customStepperConfig = {
  quotaText: '单次限购100件',
  stockFormatter: (stock) => `剩余${stock}`,
  handleOverLimit: (data) => {
    const { action, limitType, quota, startSaleNum = 1 } = data;

    if (action === 'minus') {
      Toast(startSaleNum > 1 ? `${startSaleNum}件起售` : '至少选择一件商品');
    } else if (action === 'plus') {
      if (limitType === LIMIT_TYPE.QUOTA_LIMIT) {
        Toast(`限购${quota}件`);
      } else {
        Toast('库存不够了');
      }
    }
  },
};

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;

  const ref1 = useRef<SkuInstance>();
  const ref2 = useRef<SkuInstance>();
  const ref3 = useRef<SkuInstance>();
  const ref4 = useRef<SkuInstance>();
  const ref5 = useRef<SkuInstance>();
  const ref6 = useRef<SkuInstance>();

  return (
    <DemoSection>
      <DemoBlock title="基础用法">
        <Button block type="primary" onClick={() => ref1.current.show()}>
          基础用法
        </Button>
      </DemoBlock>
      <DemoBlock title="设置默认值">
        <Button block type="primary" onClick={() => ref1.current.show(initialSku)}>
          设置默认值
        </Button>
      </DemoBlock>
      <DemoBlock title="自定义步进器">
        <Button block type="primary" onClick={() => ref2.current.show()}>
          自定义步进器
        </Button>
      </DemoBlock>
      <DemoBlock title="隐藏售罄规格">
        <Button block type="primary" onClick={() => ref3.current.show()}>
          隐藏售罄规格
        </Button>
      </DemoBlock>
      <DemoBlock title="大图模式">
        <Button block type="primary" onClick={() => ref4.current.show()}>
          大图模式
        </Button>
      </DemoBlock>
      <DemoBlock title="自定义视图">
        <Button block type="primary" onClick={() => ref5.current.show()}>
          自定义视图
        </Button>
      </DemoBlock>
      <DemoBlock title="自定义SKU校验规则">
        <Button block type="primary" onClick={() => ref6.current.show()}>
          自定义SKU校验规则
        </Button>
      </DemoBlock>
      <Sku
        ref={ref1}
        sku={demoData.sku}
        goods={demoData.goods_info}
        goodsId={demoData.goods_id}
        properties={demoData.properties}
        onAddCart={(value) => Toast(JSON.stringify(value))}
        onBuyClicked={(value) => Toast(JSON.stringify(value))}
      />
      <Sku
        ref={ref2}
        sku={demoData.sku}
        goods={demoData.goods_info}
        goodsId={demoData.goods_id}
        properties={demoData.properties}
        quota={demoData.quota}
        quotaUsed={demoData.quota_used}
        startSaleNum={demoData.start_sale_num}
        onBuyClicked={(r) => console.log(r)}
        onStepperChange={(v) => console.log(v)}
        customStepperConfig={customStepperConfig}
      />
      <Sku
        ref={ref3}
        sku={demoData.sku}
        goods={demoData.goods_info}
        goodsId={demoData.goods_id}
        properties={demoData.properties}
        disableStepperInput
        showSoldoutSku={false}
      />
      <Sku
        ref={ref4}
        sku={demoDataLarge.sku}
        goods={demoDataLarge.goods_info}
        goodsId={demoDataLarge.goods_id}
        properties={demoDataLarge.properties}
        disableStepperInput
      />
      <Sku
        ref={ref5}
        sku={demoData.sku}
        goods={demoData.goods_info}
        goodsId={demoData.goods_id}
        properties={demoData.properties}
        skuHeaderPriceRender={(price) => {
          return `😄 ¥ ${price}`;
        }}
        skuActionsTop={<div className="sku-actions-top">商品不多，赶快购买吧</div>}
      />
      <Sku
        ref={ref6}
        sku={demoData.sku}
        goods={demoData.goods_info}
        goodsId={demoData.goods_id}
        properties={demoData.properties}
        onAddCart={(value) => Toast(JSON.stringify(value))}
        onBuyClicked={(value) => Toast(JSON.stringify(value))}
        customSkuValidator={(actionType, selected) => {
          console.log(actionType, selected);
          Toast('不管怎样 都不通过！');
          return false;
        }}
      />
    </DemoSection>
  );
};
