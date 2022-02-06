import React from 'react';
import { Cascader, Popup, Field, hooks } from 'react-vant';
import options from './options';

export default () => {
  const [state, set] = hooks.useSetState({
    visible: false,
    text: '',
  });

  return (
    <>
      <Field
        isLink
        value={state.text}
        readonly
        label="地区"
        placeholder="请选择所在地区"
        onClick={() => set({ visible: true })}
      />
      <Popup
        visible={state.visible}
        round
        position="bottom"
        onClose={() => set({ visible: false })}
      >
        <Cascader
          title="请选择所在地区"
          options={options}
          onClose={() => set({ visible: false })}
          onFinish={({ selectedOptions }) => {
            set({ visible: false, text: selectedOptions.map((option) => option.text).join('/') });
          }}
        />
      </Popup>
    </>
  );
};
