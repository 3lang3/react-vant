import React, { useState } from 'react';
import { Button } from 'react-vant';
import { components } from 'site-mobile-demo';
import Circle from '..';

import './style.less';

const format = (rate: number) => Math.min(Math.max(rate, 0), 100);

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const [currentRate, setCurrentRate] = useState(70);


  const add = () => {
    setCurrentRate(r => format(r + 20));
  };

  const reduce = () => {
    setCurrentRate(r => format(r - 20));
  };

  return (
    <DemoSection className="demo-circle">
      <DemoBlock title="基础用法">
        <Circle currentRate={currentRate} text={`${currentRate}%`} />

        <Button.Group>
          <Button onClick={add} type="primary">增加</Button>
          <Button onClick={reduce} type="danger">减少</Button>
        </Button.Group>
      </DemoBlock>
      {/* <DemoBlock title="样式定制">
        <Circle
          strokeWidth={60}
          currentRate={currentRate}
          onChange={setCurrentRate}
          text="宽度定制"
        />
        <Circle
          color="#ee0a24"
          layerColor="#ebedf0"
          currentRate={currentRate}
          onChange={setCurrentRate}
          text="颜色定制"
        />
        <Circle
          color={{
            '0%': '#3fecff',
            '100%': '#6149f6',
          }}
          currentRate={currentRate}
          onChange={setCurrentRate}
          text="渐变色"
        />
        <Circle
          color="#07c160"
          clockwise={false}
          currentRate={currentRate}
          onChange={setCurrentRate}
          text="逆时针"
          style={{ marginTop: 15 }}
        />
        <Circle
          color="#7232dd"
          clockwise={false}
          size={120}
          currentRate={currentRate}
          onChange={setCurrentRate}
          text="大小定制"
          style={{ marginTop: 15 }}
        />


      </DemoBlock>
      <DemoBlock title="起始位置">
        <Circle
          startPosition="left"
          currentRate={currentRate}
          onChange={setCurrentRate}
          text={`${currentRate}%`}
        />
        <Circle
          startPosition="right"
          currentRate={currentRate}
          onChange={setCurrentRate}
          text={`${currentRate}%`}
        />
        <Circle
          startPosition="bottom"
          currentRate={currentRate}
          onChange={setCurrentRate}
          text={`${currentRate}%`}
        />
      </DemoBlock> */}
    </DemoSection>
  );
};
