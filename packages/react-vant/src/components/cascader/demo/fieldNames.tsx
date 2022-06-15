import React from 'react';
import { Cascader, Popup, Field, hooks } from 'react-vant';

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
          fieldNames={{
            text: 'name',
            value: 'code',
            children: 'items',
          }}
          title="请选择所在地区"
          options={[
            {
              name: '浙江省',
              code: '330000',
              items: [{ name: '杭州市', code: '330100' }],
            },
            {
              name: '江苏省',
              code: '320000',
              items: [{ name: '南京市', code: '320100' }],
            },
          ]}
          onClose={() => set({ visible: false })}
          onFinish={({ selectedOptions }) => {
            set({ visible: false, text: selectedOptions.map((option) => option.name).join('/') });
          }}
        />
      </Popup>
    </>
  );
};
