import React from 'react';
import { Space } from 'react-vant';
import { ChatO, FireO } from '@react-vant/icons';

export default () => {
  return (
    <Space gap={20}>
      <ChatO spin />
      <FireO spin />
    </Space>
  );
};
