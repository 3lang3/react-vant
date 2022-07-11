import React from 'react';
import { Picker, Toast } from 'react-vant';

const columns = ['南京', '苏州', '常州', '淮安', '扬州', '南通', '宿迁', '泰州', '无锡'];

export default () => {
  return (
    <Picker
      title="基础使用"
      columns={columns}
      onChange={(val: string, selectRow, index: number) => {
        console.log('选中项: ', selectRow);
        Toast.info(`选中值${val}，索引: ${index}`);
      }}
      onCancel={() => Toast.info('点击取消按钮')}
      onConfirm={() => Toast.info('点击确认按钮')}
    />
  );
};
