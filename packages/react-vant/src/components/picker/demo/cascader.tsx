import React from 'react';
import { Picker, PickerOption } from 'react-vant';

const columns = [
  {
    text: '江苏',
    value: '1',
    children: [
      {
        text: '苏州',
        value: '1-1',
        children: [
          { text: '姑苏区', value: '1-1-1' },
          { text: '吴中区', value: '1-1-2' },
        ],
      },
      {
        text: '扬州',
        value: '1-2',
        children: [
          { text: '广陵区', value: '1-2-1' },
          { text: '邗江区', value: '1-2-2' },
        ],
      },
    ],
  },
  {
    text: '浙江',
    value: '2',
    children: [
      {
        text: '杭州',
        value: '2-1',
        children: [
          { text: '西湖区', value: '2-1-1' },
          { text: '余杭区', value: '2-1-2' },
        ],
      },
      {
        text: '温州',
        value: '2-2',
        children: [
          { text: '鹿城区', value: '2-2-1' },
          { text: '瓯海区', value: '2-2-2' },
        ],
      },
    ],
  },
] as PickerOption[];

export default () => {
  const [value, setValue] = React.useState(['2', '2-2', '2-2-2']);
  return (
    <Picker
      value={value}
      onConfirm={(v, i) => console.log(v, i)}
      onChange={(val, options, index: number) => {
        console.log(val, options, index);
        setValue(val);
      }}
      columns={columns}
    />
  );
};
