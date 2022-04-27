import React, { useState } from 'react';
import { Picker, Field, Popup } from 'react-vant';

export default () => {
  const [fieldValue, setFieldValue] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  const columns = ['南京', '苏州', '常州', '淮安', '扬州', '南通', '宿迁', '泰州', '无锡'];

  return (
    <>
      <Field
        readonly
        clickable
        label="城市"
        value={fieldValue}
        placeholder="选择城市"
        onClick={() => setShowPicker(true)}
      />
      <Popup round visible={showPicker} position="bottom" onClose={() => setShowPicker(false)}>
        <Picker
          title="标题"
          columns={columns}
          onConfirm={(value: string) => {
            setFieldValue(value);
            setShowPicker(false);
          }}
        />
      </Popup>
    </>
  );
};
