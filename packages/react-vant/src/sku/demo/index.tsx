/* eslint-disable no-console */
import React from 'react';
import { components } from 'site-mobile-demo';
import { Sku } from '..';
import { getSkuData } from './data';
import './style.less';

const demoData = getSkuData(true);

console.log(demoData);

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  return (
    <DemoSection>
      <DemoBlock title="基础用法">
        <Sku
          goodsId={demoData.goods_id}
          sku={demoData.sku}
          properties={demoData.properties}
          goods={demoData.goods_info}
          quota={demoData.quota}
          quotaUsed={demoData.quota_used}
          startSaleNum={demoData.start_sale_num}
          onBuyClicked={(r) => console.log(r)}
          customSkuValidator={(actionType, selected) => {
            console.log(actionType, selected);
            return false;
          }}
        />
      </DemoBlock>
    </DemoSection>
  );
};
