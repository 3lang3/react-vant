import React from 'react';
import { Cell } from 'react-vant';

export default (): React.ReactNode => {
  return (
    <Cell.Group card>
      <Cell title="单元格" value="内容" />
      <Cell title="单元格" value="内容" />
    </Cell.Group>
  );
};
