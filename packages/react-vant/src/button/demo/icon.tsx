import { Plus } from '@react-vant/icons';
import React from 'react';
import { Button } from 'react-vant';
import './style.less';

export default () => {
  return (
    <div className="demo-button">
      <Button icon={<Plus />} type="primary" />
      <Button icon={<Plus />} iconPosition="left" type="primary">
        按钮
      </Button>
    </div>
  );
};
