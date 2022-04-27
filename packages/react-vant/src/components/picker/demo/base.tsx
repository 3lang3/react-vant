import React from 'react';
import { Picker, Toast } from 'react-vant';

const columns = ['南京', '苏州', '常州', '淮安', '扬州', '南通', '宿迁', '泰州', '无锡'];
const disabledColumns = [{ text: '南京', disabled: true }, { text: '苏州' }, { text: '扬州' }];

export default () => {
  const onChange = (value: string, index: number) => Toast(`当前值：${value}, 当前索引：${index}`);

  return (
    <>
      <Picker
        title="基础使用"
        columns={columns}
        onChange={onChange}
        onCancel={() => Toast.info('点击取消按钮')}
        onConfirm={() => Toast.info('点击确认按钮')}
      />
      <br />
      <Picker title="默认选中" defaultIndex={2} columns={columns} onChange={onChange} />
      <br />
      <Picker title="禁用选项" columns={disabledColumns} />
    </>
  );
};
