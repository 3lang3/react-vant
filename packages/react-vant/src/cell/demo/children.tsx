import { ShopO } from '@react-vant/icons';
import React from 'react';
import { Cell } from 'react-vant';

export default (): React.ReactNode => {
  return (
    <Cell title="单元格" icon={<ShopO />}>
      <div>自定义内容</div>
    </Cell>
  );
};
