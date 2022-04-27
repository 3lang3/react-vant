import React from 'react';
import { Picker, Toast } from 'react-vant';

export default () => {
  return (
    <Picker
      onChange={(value: string, index: number) => Toast(`当前值：${value}, 当前索引：${index}`)}
      columns={[
        {
          text: '江苏',
          children: [
            {
              text: '苏州',
              children: [{ text: '姑苏区' }, { text: '吴中区' }],
            },
            {
              text: '扬州',
              children: [{ text: '广陵区' }, { text: '邗江区' }],
            },
          ],
        },
        {
          text: '浙江',
          children: [
            {
              text: '杭州',
              children: [{ text: '西湖区' }, { text: '余杭区' }],
            },
            {
              text: '温州',
              children: [{ text: '鹿城区' }, { text: '瓯海区' }],
            },
          ],
        },
      ]}
    />
  );
};
