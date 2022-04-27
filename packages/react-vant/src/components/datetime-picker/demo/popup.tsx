import React, { useState } from 'react';
import { DatetimePicker, Field, Popup } from 'react-vant';

export default () => {
  const [fieldValue, setFieldValue] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  return (
    <>
      <Field
        readonly
        clickable
        label="日期"
        value={fieldValue}
        placeholder="选择选择日期"
        onClick={() => setShowPicker(true)}
      />
      <Popup
        round
        title="请选择日期"
        closeable
        visible={showPicker}
        position="bottom"
        onClose={() => setShowPicker(false)}
      >
        <div style={{ padding: '0 8px' }}>
          <DatetimePicker
            type="datetime"
            onConfirm={(value) => {
              setFieldValue(value);
              setShowPicker(false);
            }}
            filter={(type: string, options) => {
              if (type === 'minute') {
                return options.filter((option) => +option % 5 === 0);
              }
              return options;
            }}
            minDate={new Date(2021, 0, 1)}
            maxDate={new Date(2021, 2, 1)}
            value={fieldValue}
          />
        </div>
      </Popup>
    </>
  );
};
