import React, { useState } from 'react';
import { Picker, Field } from 'react-vant';

export default () => {
  const [fieldValue, setFieldValue] = useState('扬州');
  const columns = ['南京', '苏州', '常州', '淮安', '扬州', '南通', '宿迁', '泰州', '无锡'];

  return (
    <>
      <Picker
        value={fieldValue}
        popup={{
          round: true,
        }}
        title="标题"
        columns={columns}
        onConfirm={(value: string) => {
          setFieldValue(value);
        }}
      >
        {(val, options, actions) => {
          console.log(val, options)
          return <Field readOnly clickable label="城市" value={fieldValue} placeholder="选择城市" onClick={() => actions.open()} />
        }}
      </Picker>
    </>
  );
};
