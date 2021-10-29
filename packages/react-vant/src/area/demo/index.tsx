/* eslint-disable no-console */
import React, { useState } from 'react';
import { components } from 'site-mobile-demo';
import { areaList } from '@vant/area-data';
import { Area } from '..';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const [value] = useState('330302');

  return (
    <DemoSection>
      <DemoBlock card title="基础用法">
        <Area
          title="标题"
          areaList={areaList}
          onCancel={(...v) => console.log(v)}
          onChange={(v) => console.log(v)}
          onConfirm={(v) => console.log(v)}
        />
      </DemoBlock>
      <DemoBlock card title="选中省市区">
        <Area title="标题" areaList={areaList} value={value} />
      </DemoBlock>
      <DemoBlock card title="配置显示列">
        <Area title="标题" areaList={areaList} columnsNum={2} />
      </DemoBlock>
      <DemoBlock card title="配置列占位提示文字">
        <Area
          title="标题"
          areaList={areaList}
          columnsPlaceholder={['请选择🤔', '请选择🤔', '请选择🤔']}
        />
      </DemoBlock>
    </DemoSection>
  );
};
