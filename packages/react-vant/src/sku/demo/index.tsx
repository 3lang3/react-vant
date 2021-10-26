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
        <Sku sku={demoData.sku} properties={demoData.properties} goods={demoData.goods_info} />
      </DemoBlock>
    </DemoSection>
  );
};
