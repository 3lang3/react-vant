import React, { useState } from 'react';
import { Cell, ActionSheet } from 'react-vant';
import { components } from 'site-mobile-demo';
import './style.less';

const actions = [{ name: '选项一' }, { name: '选项二' }, { name: '选项三' }];
const actions1 = [{ name: '选项一' }, { name: '选项二' }, { name: '选项三', subname: '描述信息' }];
const actions2 = [{ name: '选项一', color: '#ee0a24' }, { name: '选项二', disabled: true }, { loading: true }];

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  return (
    <DemoSection className="demo-action-sheet">
      <DemoBlock card title="基础用法">
        <Cell title="基础用法" isLink onClick={() => setVisible(true)} />
        <Cell title="展示取消按钮" isLink onClick={() => setVisible1(true)} />
        <Cell title="展示描述信息" isLink onClick={() => setVisible2(true)} />
      </DemoBlock>

      <DemoBlock card title="选项状态">
        <Cell title="选项状态" isLink onClick={() => setVisible3(true)} />
      </DemoBlock>

      <DemoBlock card title="自定义面板">
        <Cell title="自定义面板" isLink onClick={() => setVisible4(true)} />
      </DemoBlock>

      <ActionSheet visible={visible} onCancel={() => setVisible(false)} actions={actions} />
      <ActionSheet
        visible={visible1}
        onCancel={() => setVisible1(false)}
        actions={actions}
        renderCancel
      />
      <ActionSheet
        visible={visible2}
        onCancel={() => setVisible2(false)}
        description="这是一段描述信息"
        actions={actions1}
        renderCancel
      />
      <ActionSheet
        visible={visible3}
        onCancel={() => setVisible3(false)}
        actions={actions2}
        renderCancel
      />
      <ActionSheet
        title="自定义内容"
        visible={visible4}
        onCancel={() => setVisible4(false)}
      >
        <div className="content">内容</div>
      </ActionSheet>
    </DemoSection>
  );
};
