import React from 'react';
import { Cascader, Button, Popup, Field, hooks } from 'react-vant';
import options from './options';

export default () => {
  const [state, set] = hooks.useSetState({
    visible: false,
    text: getTextFromValue(['330000', '330100', '330103'], options),
    value: ['330000', '330100', '330103'],
  });

  return (
    <>
      <Field
        isLink
        value={state.text}
        readonly
        label="地区"
        placeholder="请选择所在地区"
        errorMessage={<div>当前值:{JSON.stringify(state.value)}</div>}
        onClick={() => set({ visible: true })}
      />

      <Button
        type="primary"
        size="small"
        block
        onClick={() =>
          set({
            value: ['330000', '330100', '330104'],
            text: getTextFromValue(['330000', '330100', '330104'], options),
          })
        }
      >
        外部设置
      </Button>
      <Popup
        visible={state.visible}
        round
        position="bottom"
        onClose={() => set({ visible: false })}
      >
        <Cascader
          title="请选择所在地区"
          value={state.value}
          options={options}
          onClose={() => set({ visible: false })}
          onFinish={({ selectedOptions }) => {
            set({
              visible: false,
              value: selectedOptions.map((option) => option.value),
              text: selectedOptions.map((option) => option.text).join('/'),
            });
          }}
        />
      </Popup>
    </>
  );
};

function getTextFromValue(value: any[], opts: any[]): string {
  const rs = [];
  value.reduce((a, v) => {
    const matchOpt = a.find((opt) => opt.value === v);
    rs.push(matchOpt.text);
    return matchOpt.children;
  }, opts);
  return rs.join('/');
}
