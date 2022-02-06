import React, { useState } from 'react';
import { Cascader, Toast, Popup, Field, hooks } from 'react-vant';

export default () => {
  const [state, set] = hooks.useSetState({
    visible: false,
    text: '',
  });

  const [dynamicOpts, setDynamicOpts] = useState([
    {
      text: '浙江省',
      value: '330000',
      children: [],
    },
  ]);

  const onChange = ({ value }) => {
    if (value === dynamicOpts[0].value) {
      Toast.loading({ message: '加载中...', duration: 0 });
      setTimeout(() => {
        Toast.clear();
        const newOpts = JSON.parse(JSON.stringify(dynamicOpts));
        newOpts[0].children = [
          { text: '杭州市', value: '330100' },
          { text: '宁波市', value: '330200' },
        ];
        setDynamicOpts(newOpts);
      }, 2000);
    }
  };

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
          options={dynamicOpts}
          onChange={onChange}
          onClose={() => set({ visible: false })}
          onFinish={({ selectedOptions }) => {
            set({ visible: false, text: selectedOptions.map((option) => option.text).join('/') });
          }}
        />
      </Popup>
    </>
  );
};
