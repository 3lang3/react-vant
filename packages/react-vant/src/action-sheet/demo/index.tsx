import React, { useState } from 'react';
import { Cell } from 'react-vant';
import { components } from 'site-mobile-demo';
import ActionSheet from '..'
import './style.less';

const actions = [{ name: '选项一' }, { name: '选项二' }, { name: '选项三' }];
const actions1 = [{ name: '选项一' }, { name: '选项二' }, { name: '选项三', subname: '描述信息' }];
const actions2 = [
  { name: '选项一', color: '#ee0a24' },
  { name: '选项二', disabled: true },
  { loading: true },
];

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const [visible, setVisible] = useState(-1);
  const onCancel = () => setVisible(-1);
  return (
    <DemoSection>
      <DemoBlock card title="基础用法">
        <Cell title="基础用法" isLink onClick={() => setVisible(1)} />
        <Cell title="展示取消按钮" isLink onClick={() => setVisible(2)} />
        <Cell title="展示描述信息" isLink onClick={() => setVisible(3)} />
      </DemoBlock>

      <DemoBlock card title="选项状态">
        <Cell title="选项状态" isLink onClick={() => setVisible(4)} />
      </DemoBlock>

      <DemoBlock card title="自定义面板">
        <Cell title="自定义面板" isLink onClick={() => setVisible(5)} />
      </DemoBlock>

      <ActionSheet visible={visible === 1} onCancel={onCancel} actions={actions} />
      <ActionSheet
        visible={visible === 2}
        onCancel={onCancel}
        actions={actions}
        cancelText="取消"
      />
      <ActionSheet
        visible={visible === 3}
        onCancel={onCancel}
        description="这是一段描述信息"
        actions={actions1}
        cancelText="取消"
      />
      <ActionSheet
        visible={visible === 4}
        onCancel={onCancel}
        actions={actions2}
        cancelText="取消"
      />
      <ActionSheet
        title="自定义内容"
        visible={visible === 5}
        onCancel={onCancel}
        cancelText={false}
      >
        <div className="demo-action-sheet-content">内容</div>
      </ActionSheet>
    </DemoSection>
  );
};
