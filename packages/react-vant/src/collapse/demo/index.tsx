import React from 'react';
import { QuestionO } from '@react-vant/icons';
import { components } from 'site-mobile-demo';
import Collapse from '..';
import './style.less';

export default () => {
  const { DemoBlock, DemoSection } = components;
  return (
    <DemoSection>
      <DemoBlock title="基础用法">
        <Collapse initExpanded={['1']}>
          <Collapse.Item title="标题1" name="1">
            代码是写出来给人看的，附带能在机器上运行
          </Collapse.Item>
          <Collapse.Item title="标题2" name="2">
            代码是写出来给人看的，附带能在机器上运行
          </Collapse.Item>
          <Collapse.Item title="标题3" name="3">
            代码是写出来给人看的，附带能在机器上运行
          </Collapse.Item>
        </Collapse>
      </DemoBlock>
      <DemoBlock title="手风琴">
        <Collapse initExpanded="1" accordion>
          <Collapse.Item
            title={
              <div>
                标题1 <QuestionO />
              </div>
            }
            name="1"
          >
            代码是写出来给人看的，附带能在机器上运行
          </Collapse.Item>
          <Collapse.Item title="标题2" name="2">
            代码是写出来给人看的，附带能在机器上运行
          </Collapse.Item>
          <Collapse.Item title="标题3" name="3">
            代码是写出来给人看的，附带能在机器上运行
          </Collapse.Item>
        </Collapse>
      </DemoBlock>
      <DemoBlock initExpanded={[]} title="禁用状态">
        <Collapse>
          <Collapse.Item title="标题1" name="1">
            代码是写出来给人看的，附带能在机器上运行
          </Collapse.Item>
          <Collapse.Item title="标题2" name="2" disabled>
            代码是写出来给人看的，附带能在机器上运行
          </Collapse.Item>
          <Collapse.Item title="标题3" name="3" disabled>
            代码是写出来给人看的，附带能在机器上运行
          </Collapse.Item>
        </Collapse>
      </DemoBlock>
    </DemoSection>
  );
};
