import React, { useState } from 'react';
import { Flex, Button } from 'react-vant';
import { components } from 'site-mobile-demo';
import Circle from '..';

import './style.less';

const format = (rate: number) => Math.min(Math.max(rate, 0), 100);

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const [rate, setRate] = useState(70);

  const add = () => {
    setRate((r) => format(r + 20));
  };

  const reduce = () => {
    setRate((r) => format(r - 20));
  };

  return (
    <DemoSection className="demo-circle">
      <DemoBlock title="基础用法">
        <Circle rate={rate} text={`${rate}%`} />
      </DemoBlock>
      <DemoBlock title="样式定制">
        <Circle strokeWidth={60} rate={rate} text="宽度定制" />
        <Circle color="#ee0a24" layerColor="#ebedf0" rate={rate} text="颜色定制" />
        <Circle
          color={{
            '0%': '#3fecff',
            '100%': '#6149f6',
          }}
          rate={rate}
          text="渐变色"
        />
        <Circle
          color="#07c160"
          clockwise={false}
          rate={rate}
          text="逆时针"
          style={{ marginTop: 15 }}
        />
        <Circle
          color="#7232dd"
          clockwise={false}
          size={120}
          rate={rate}
          text="大小定制"
          style={{ marginTop: 15 }}
        />

        <Flex style={{ marginTop: 15 }} align="center" justify="center">
          <Button.Group>
            <Button onClick={add} type="primary">
              增加
            </Button>
            <Button onClick={reduce} type="danger">
              减少
            </Button>
          </Button.Group>
        </Flex>
      </DemoBlock>
      <DemoBlock title="起始位置">
        <Circle startPosition="left" defaultRate={70} text="左侧" />
        <Circle startPosition="right" defaultRate={70} text="右侧" />
        <Circle startPosition="bottom" defaultRate={70} text="底部" />
      </DemoBlock>
    </DemoSection>
  );
};
