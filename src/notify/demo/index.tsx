/* eslint-disable no-console */
import React, { useState } from 'react';
import { Cell, Icon, Flex } from 'react-vant';
import { components } from 'site-mobile-demo';
import Notify from '..';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;

  const [visible, setVisible] = useState(false);
  return (
    <DemoSection className="demo-notify">
      <DemoBlock card title="基础用法">
        <Cell title="基础用法" isLink onClick={() => Notify.show('通知内容')} />
      </DemoBlock>
      <DemoBlock card title="通知类型">
        <Cell
          title="主要通知"
          isLink
          onClick={() => Notify.show({ type: 'primary', message: '通知内容' })}
        />
        <Cell
          title="成功通知"
          isLink
          onClick={() => Notify.show({ type: 'success', message: '通知内容' })}
        />
        <Cell
          title="危险通知"
          isLink
          onClick={() => Notify.show({ type: 'danger', message: '通知内容' })}
        />
        <Cell
          title="警告通知"
          isLink
          onClick={() => Notify.show({ type: 'warning', message: '通知内容' })}
        />
      </DemoBlock>
      <DemoBlock card title="自定义配置">
        <Cell
          title="自定义颜色"
          isLink
          onClick={() =>
            Notify.show({ message: '自定义颜色', color: '#ad0000', background: '#ffe1e1' })
          }
        />
        <Cell
          title="自定义时长"
          isLink
          onClick={() => Notify.show({ message: '自定义时长', duration: 1000 })}
        />
      </DemoBlock>
      <DemoBlock card title="组件调用">
        <Cell title="组件调用" isLink onClick={() => setVisible(true)} />
        <Notify visible={visible} type="success">
          <Flex style={{ width: '100%' }} align="center" justify="between">
            <div />
            <div>
              <Icon name="bell" style={{ marginRight: 4 }} />
              <span>通知内容</span>
            </div>
            <Icon name="close" onClick={() => setVisible(false)} />
          </Flex>
        </Notify>
      </DemoBlock>
    </DemoSection>
  );
};
