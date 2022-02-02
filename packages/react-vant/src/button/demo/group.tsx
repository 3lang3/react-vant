import { Arrow, ArrowLeft, Replay } from '@react-vant/icons';
import React from 'react';
import { Button } from 'react-vant';
import './style.less';

export default () => {
  return (
    <div className="demo-button">
      <Button.Group>
        <Button icon={<ArrowLeft />} block>
          上一步
        </Button>
        <Button icon={<Replay />} block>
          刷新
        </Button>
        <Button icon={<Arrow />} block>
          下一步
        </Button>
      </Button.Group>
    </div>
  );
};
