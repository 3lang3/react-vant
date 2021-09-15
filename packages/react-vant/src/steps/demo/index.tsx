import React, { useState } from 'react';
import { Button } from 'react-vant';
import { components } from 'site-mobile-demo';
import Steps from '..';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const [active, setActive] = useState(1);

  const nextStep = () => setActive((prev) => (prev >= 3 ? 0 : prev + 1));
  return (
    <DemoSection className="demo-steps">
      <DemoBlock title="基础用法">
        <Steps active={active}>
          <Steps.Item>买家下单</Steps.Item>
          <Steps.Item>商家接单</Steps.Item>
          <Steps.Item>买家提货</Steps.Item>
          <Steps.Item>交易完成</Steps.Item>
        </Steps>
      </DemoBlock>
      <DemoBlock title="自定义样式">
        <Steps active={active} activeIcon="success" activeColor="#38f">
          <Steps.Item>买家下单</Steps.Item>
          <Steps.Item>商家接单</Steps.Item>
          <Steps.Item>买家提货</Steps.Item>
          <Steps.Item>交易完成</Steps.Item>
        </Steps>
      </DemoBlock>
      <div className="demo-button">
        <Button round block onClick={nextStep}>
          下一步
        </Button>
      </div>
      <DemoBlock title="竖向步骤条">
        <Steps direction="vertical" active={0}>
          <Steps.Item>
            <h3>【城市】物流状态1</h3>
            <p>2016-07-12 12:40</p>
          </Steps.Item>
          <Steps.Item>
            <h3>【城市】物流状态2</h3>
            <p>2016-07-11 10:00</p>
          </Steps.Item>
          <Steps.Item>
            <h3>快件已发货</h3>
            <p>2016-07-10 09:30</p>
          </Steps.Item>
        </Steps>
      </DemoBlock>
    </DemoSection>
  );
};
