import React, { useState } from 'react';
import { Calendar, DatetimePicker, Field, Picker, Popup } from 'react-vant';
import type { FormItemProps } from 'react-vant';

type CustomItemProps = {
  value?: any;
  onChange?: (v: any) => void;
  placeholder?: string;
} & FormItemProps;

export function PickerItem(props: CustomItemProps) {
  const { value, onChange, ...fieldProps } = props;
  const [visible, setVisible] = useState(false);

  const onShow = () => {
    setVisible(true);
  };
  const onCancel = () => {
    setVisible(false);
  };
  const onConfirm = (val) => {
    onChange(val);
    onCancel();
  };

  const columns = ['南京', '苏州', '常州', '淮安', '扬州', '南通', '宿迁', '泰州', '无锡'];
  return (
    <>
      <Field isLink readonly {...fieldProps} value={value} onClick={onShow} />
      <Popup position="bottom" round visible={visible} onClose={onCancel}>
        <Picker title="选择城市" columns={columns} onConfirm={onConfirm} onCancel={onCancel} />
      </Popup>
    </>
  );
}

export function DatetimePickerItem(props: CustomItemProps) {
  const { value, onChange, ...fieldProps } = props;
  const [visible, setVisible] = useState(false);

  const onShow = () => {
    setVisible(true);
  };
  const onCancel = () => {
    setVisible(false);
  };
  const onConfirm = (val) => {
    onChange(val);
    onCancel();
  };
  return (
    <>
      <Field isLink readonly {...fieldProps} value={value} onClick={onShow} />
      <Popup position="bottom" round visible={visible} onClose={onCancel}>
        <DatetimePicker
          title="选择年月日"
          type="date"
          minDate={new Date(2020, 0, 1)}
          maxDate={new Date(2025, 10, 1)}
          value={value}
          onCancel={onCancel}
          onConfirm={onConfirm}
        />
      </Popup>
    </>
  );
}

export function CalendarItem(props: CustomItemProps) {
  const { value, onChange, ...fieldProps } = props;
  const [visible, setVisible] = useState(false);

  const onShow = () => {
    setVisible(true);
  };
  const onCancel = () => {
    setVisible(false);
  };
  const onConfirm = (val) => {
    onChange(val);
    onCancel();
  };
  return (
    <>
      <Field isLink readonly {...fieldProps} value={value} onClick={onShow} />
      <Calendar visible={visible} onClose={onCancel} onConfirm={onConfirm} />
    </>
  );
}
