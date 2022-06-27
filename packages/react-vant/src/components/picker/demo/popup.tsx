import React, { useState } from 'react';
import { Picker, Field } from 'react-vant';

export default () => {
  const [value, setValue] = useState('宿迁');
  const columns = ['南京', '苏州', '常州', '淮安', '扬州', '南通', '宿迁', '泰州', '无锡'];

  return (
    <>
      <Picker
        value={value}
        popup={{
          round: true,
        }}
        title="标题"
        columns={columns}
        onConfirm={(v: string) => setValue(v)}
      >
        {(val, _, actions) => {
          return (
            <Field
              readOnly
              clickable
              label="城市"
              value={val as string}
              placeholder="选择城市"
              onClick={() => actions.open()}
            />
          );
        }}
      </Picker>
    </>
  );
};
