import React from 'react';
import { Picker, Toast } from 'react-vant';

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
];

export default () => {
  const [value, setValue] = React.useState();
  const onChange = (val, option: string, index: number) => {
    // console.log(val, option, index)
    Toast(`当前值：${val}, 当前索引：${index}`);
    setValue(val);
  };

  return (
    <Picker
      title="基础使用"
      columns={columns}
      value={value}
      onChange={onChange}
      onCancel={() => Toast.info('点击取消按钮')}
      onConfirm={(val, option) => {
        console.log(val, option)
        Toast.info('点击确认按钮')
      }}
    />
  );
};
