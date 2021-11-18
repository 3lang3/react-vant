import React from 'react';
import { Field, NumberKeyboard, Cell, hooks, Toast } from 'react-vant';
import { components } from 'site-mobile-demo';
import './style.less';

export default (): React.ReactNode => {
  const { DemoSection, DemoBlock } = components;
  const [state, set] = hooks.useSetState({
    v1: false,
    v2: false,
    v3: false,
    v4: false,
    v5: false,
    v6: false,
    v7: false,
    value: '',
  });

  const onInput = (v) => Toast.info(`输入${v}`);
  const onDelete = () => Toast.info('删除');
  return (
    <DemoSection className="demo-number-keyboard">
      <DemoBlock card>
        <Cell title="弹出默认键盘" isLink onClick={() => set({ v1: true })} />
        <Cell title="弹出带右侧栏的键盘" isLink onClick={() => set({ v2: true })} />
        <Cell title="弹出身份证号键盘" isLink onClick={() => set({ v3: true })} />
        <Cell title="弹出带标题的键盘" isLink onClick={() => set({ v4: true })} />
        <Cell title="弹出配置多个按键的键盘" isLink onClick={() => set({ v5: true })} />
        <Cell title="弹出配置随机数字的键盘" isLink onClick={() => set({ v6: true })} />
        <Field label="双向绑定" value={state.value} readonly onClick={() => set({ v7: true })} />
        <NumberKeyboard
          visible={state.v1}
          onBlur={() => {
            set({ v1: false });
          }}
          onInput={onInput}
          onDelete={onDelete}
        />
        <NumberKeyboard
          theme="custom"
          extraKey="."
          closeButtonText="完成"
          visible={state.v2}
          onBlur={() => {
            set({ v2: false });
          }}
          onInput={onInput}
          onDelete={onDelete}
        />
        <NumberKeyboard
          extraKey="X"
          closeButtonText="完成"
          visible={state.v3}
          onBlur={() => {
            set({ v3: false });
          }}
          onInput={onInput}
          onDelete={onDelete}
        />
        <NumberKeyboard
          title="键盘标题"
          extraKey="."
          closeButtonText="完成"
          visible={state.v4}
          onBlur={() => {
            set({ v4: false });
          }}
          onInput={onInput}
          onDelete={onDelete}
        />
        <NumberKeyboard
          theme="custom"
          extraKey={['00', '.']}
          closeButtonText="完成"
          visible={state.v5}
          onBlur={() => {
            set({ v5: false });
          }}
          onInput={onInput}
          onDelete={onDelete}
        />
        <NumberKeyboard
          randomKeyOrder
          visible={state.v6}
          onBlur={() => {
            set({ v6: false });
          }}
          onInput={onInput}
          onDelete={onDelete}
        />
        <NumberKeyboard
          value={state.value}
          visible={state.v7}
          maxlength={6}
          onChange={(v) => {
            set({ value: v });
          }}
          onBlur={() => {
            set({ v7: false });
          }}
        />
      </DemoBlock>
    </DemoSection>
  );
};
