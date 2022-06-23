import React from 'react';
import { Picker, PickerOption, Toast } from 'react-vant';

const columns = [
  '南京',
  '苏州',
  '常州',
  '淮安',
  '扬州',
  '南通',
  '宿迁',
  '泰州',
  '无锡',
] as PickerOption[];

const objectCcolumns = columns.map((text, value) => ({ text, value })) as PickerOption[];

export default () => {
  const [value, setValue] = React.useState(columns[1]);
  const onChange = (val: string, option: string, index: number) => {
    Toast(`当前值：${val}, 当前索引：${index}`);
    setValue(val);
  };
  return (
    <Picker
      title="基础使用"
      columns={objectCcolumns}
      value={value}
      onChange={onChange}
      onCancel={() => Toast.info('点击取消按钮')}
      onConfirm={() => Toast.info('点击确认按钮')}
    />
  );
};
