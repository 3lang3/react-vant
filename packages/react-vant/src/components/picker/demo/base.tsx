import React from 'react';
import { Picker, Toast } from 'react-vant';

const columns = ['南京', '苏州', '常州', '淮安', '扬州', '南通', '宿迁', '泰州', '无锡'];

export default () => {
  const onChange = (value: string, index: number) => Toast(`当前值：${value}, 当前索引：${index}`);
  return (
    <Picker
      title="基础使用"
      columns={columns}
      onChange={onChange}
      onCancel={(...r) => {
        Toast.info('点击取消按钮');
        console.log(r);
      }}
      onConfirm={(...r) => {
        Toast.info('点击确认按钮');
        console.log(r);
      }}
    />
  );
};
