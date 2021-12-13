import React from 'react';
import { components } from 'site-mobile-demo';
import { Arrow, Fire } from '@react-vant/icons';
import { Button } from 'react-vant';
import { Card } from '..';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  return (
    <DemoSection>
      <DemoBlock title="基础用法">
        <Card
          title={
            <div>
              <Fire color="red" /> 自定义标题
            </div>
          }
          extra={<Arrow />}
          footer={
            <Button round color="linear-gradient(to right, #ff6034, #ee0a24)" size="small" block>
              查看详情 <Arrow />
            </Button>
          }
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Body
          </div>
        </Card>
      </DemoBlock>
    </DemoSection>
  );
};
