import React from 'react';
import { Picker, Toast } from 'react-vant';

export default () => {
  return (
    <Picker
      onChange={(value: string, index: number) => Toast(`当前值：${value}, 当前索引：${index}`)}
      columns={[
        {
          values: ['周一', '周二', '周三', '周四', '周五'],
          defaultIndex: 2,
        },
        // 第二列
        {
          values: ['上午', '下午', '晚上'],
          defaultIndex: 1,
        },
      ]}
    />
  );
};
