import React, { useState } from 'react';
import { components } from 'site-mobile-demo';
import Rate from '..';
import './style.less';

export default (): React.ReactNode => {
  const [value, setValue] = useState(3);
  const [value1, setValue1] = useState(3.5);
  const onChange = (v) => {
    setValue(v);
  };
  const { DemoBlock, DemoSection } = components;
  return (
    <DemoSection className="demo-rat">
      <DemoBlock title="基础用法">
        <Rate value={value} onChange={onChange} />
      </DemoBlock>
      <DemoBlock title="自定义图标">
        <Rate icon="fire" voidIcon="fire-o" value={value} onChange={onChange} />
      </DemoBlock>
      <DemoBlock title="自定义样式">
        <Rate
          icon="fire"
          voidIcon="fire-o"
          color="#ffd21e"
          voidColor="#000"
          value={value}
          onChange={onChange}
        />
      </DemoBlock>
      <DemoBlock title="半星样式">
        <Rate
          allowHalf
          value={value1}
          onChange={(v) => {
            setValue1(v);
          }}
        />
      </DemoBlock>
      <DemoBlock title="自定义数量">
        <Rate allowHalf value={value} count={8} onChange={onChange} />
      </DemoBlock>
      <DemoBlock title="禁用状态">
        <Rate allowHalf value={value} disabled onChange={onChange} />
      </DemoBlock>
      <DemoBlock title="只读状态显示小数">
        <Rate allowHalf defaultValue={3.6} readonly onChange={onChange} />
      </DemoBlock>
    </DemoSection>
  );
};
