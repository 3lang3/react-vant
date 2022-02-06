import React from 'react';
import { Picker } from 'react-vant';

export default () => {
  return (
    <Picker
      loading
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
