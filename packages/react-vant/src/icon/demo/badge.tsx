import React from 'react';
import { Space, Badge } from 'react-vant';
import { ChatO } from '@react-vant/icons';

export default () => {
  return (
    <Space gap={20}>
      <Badge dot>
        <ChatO />
      </Badge>
      <Badge content="99+">
        <ChatO />
      </Badge>
    </Space>
  );
};
