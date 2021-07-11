import React, { useState } from 'react';
import { DatetimePicker, Toast, Field, Popup } from 'rokku';
import { components } from 'site-mobile-demo';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;

  const [fieldValue, setFieldValue] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  return (
    <DemoSection>
      <DemoBlock card title="选择年月日">
        <DatetimePicker
          mode="date"
          minDate={new Date(2020, 0, 1)}
          maxDate={new Date(2025, 10, 1)}
          value={new Date()}
        />
      </DemoBlock>
      <DemoBlock card title="选择年月">
        <DatetimePicker
          mode="year-month"
          minDate={new Date(2020, 0, 1)}
          maxDate={new Date(2025, 10, 1)}
          value={new Date()}
          formatter={(type: string, val: string) => {
            if (type === 'year') {
              return `${val}年`;
            }
            if (type === 'month') {
              return `${val}月`;
            }
            return val;
          }}
        />
      </DemoBlock>
      <DemoBlock card title="选择月日">
        <DatetimePicker
          mode="month-day"
          minDate={new Date(2020, 0, 1)}
          maxDate={new Date(2025, 10, 1)}
          value={new Date()}
          formatter={(type: string, val: string) => {
            if (type === 'month') {
              return `${val}月`;
            }
            if (type === 'day') {
              return `${val}日`;
            }
            return val;
          }}
        />
      </DemoBlock>
      <DemoBlock card title="选择时间">
        <DatetimePicker mode="time" minHour="10" maxHour="20" value="12:00" />
      </DemoBlock>
      <DemoBlock card title="选择日期时间（包含星期）">
        <DatetimePicker
          mode="weektime"
          minDate={new Date(2021, 0, 1)}
          maxDate={new Date(2021, 2, 1)}
          value={new Date()}
        />
      </DemoBlock>
      <DemoBlock card title="选择完整时间">
        <DatetimePicker
          mode="datetime"
          minDate={new Date(2020, 0, 1)}
          maxDate={new Date(2025, 10, 1)}
          value={new Date()}
        />
      </DemoBlock>
      <DemoBlock card title="选择年月日小时">
        <DatetimePicker
          mode="datehour"
          minDate={new Date(2020, 0, 1)}
          maxDate={new Date(2025, 10, 1)}
          value={new Date()}
        />
      </DemoBlock>
      <DemoBlock card title="选择过滤器">
        <DatetimePicker
          mode="time"
          minHour="10"
          maxHour="20"
          value="12:00"
          filter={(type, options) => {
            if (type === 'minute') {
              return options.filter((option) => option % 5 === 0);
            }
            return options;
          }}
        />
      </DemoBlock>
      <DemoBlock card title="自定义列排序">
        <DatetimePicker
          mode="date"
          columnsOrder={['month', 'day', 'year']}
          minDate={new Date(2020, 0, 1)}
          maxDate={new Date(2025, 10, 1)}
          value={new Date()}
        />
      </DemoBlock>
      <DemoBlock card title="确认按钮">
        <DatetimePicker
          showSubmitBtn
          onConfirm={(value: Date) => Toast(`确认的日期：${value}`)}
          mode="weektime"
          minDate={new Date(2021, 0, 1)}
          maxDate={new Date(2021, 2, 1)}
          value={new Date()}
        />
      </DemoBlock>
      <DemoBlock card title="搭配弹出层使用">
        <Field
          readonly
          clickable
          label="日期"
          value={fieldValue}
          placeholder="选择选择日期"
          onClick={() => setShowPicker(true)}
        />
      </DemoBlock>
      <Popup
        title="请选择日期"
        closeable
        visible={showPicker}
        round
        position="bottom"
        onClose={() => setShowPicker(false)}
      >
        <div style={{ padding: '0 8px' }}>
          <DatetimePicker
            showSubmitBtn
            onConfirm={(value: string) => {
              setFieldValue(value);
              setShowPicker(false);
            }}
            mode="weektime"
            filter={(type: string, options) => {
              if (type === 'minute') {
                return options.filter((option) => option % 5 === 0);
              }
              return options;
            }}
            minDate={new Date(2021, 0, 1)}
            maxDate={new Date(2021, 2, 1)}
            value={new Date()}
          />
        </div>
      </Popup>
    </DemoSection>
  );
};
