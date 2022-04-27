import React from 'react';
import { Button } from 'react-vant';
import './style.less';

export default () => {
  return (
    <div className="demo-button">
      <Button type="primary">主要按钮</Button>
      <Button type="info">信息按钮</Button>
      <Button type="default">默认按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="danger">危险按钮</Button>
    </div>
  );
};
