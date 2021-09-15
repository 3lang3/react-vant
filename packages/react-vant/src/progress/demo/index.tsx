import React, { useState } from 'react';
import { Flex, Button } from 'react-vant';
import { components } from 'site-mobile-demo';
import Progress from '..';
import './style.less';

const format = (rate: number) => Math.min(Math.max(rate, 0), 100);

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const [percentage, setPercentage] = useState(50);

  const add = () => {
    setPercentage((value) => format(value + 20));
  };

  const reduce = () => {
    setPercentage((value) => format(value - 20));
  };
  return (
    <DemoSection className="demo-badge">
      <DemoBlock title="基础用法">
        <Progress percentage="50" />
      </DemoBlock>
      <DemoBlock title="线条粗细">
        <Progress strokeWidth={8} percentage="50" />
      </DemoBlock>
      <DemoBlock title="置灰">
        <Progress inactive percentage="50" />
      </DemoBlock>
      <DemoBlock title="样式定制">
        <Progress color="#f2826a" percentage="25" pivotText="橙色" />
        <Progress color="#ee0a24" percentage="50" pivotText="红色" />
        <Progress
          color="linear-gradient(to right, #be99ff, #7232dd)"
          percentage="75"
          pivotColor="#7232dd"
          pivotText={<div>紫色</div>}
        />
      </DemoBlock>
      <DemoBlock title="过渡效果">
        <Progress percentage={percentage} />
        <Flex justify="center">
          <Button style={{ marginRight: 10 }} type="primary" size="small" onClick={add}>
            增加
          </Button>
          <Button type="danger" size="small" onClick={reduce}>
            减少
          </Button>
        </Flex>
      </DemoBlock>
    </DemoSection>
  );
};
