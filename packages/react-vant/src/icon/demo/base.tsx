import React from 'react';
import { Space } from 'react-vant';
import { LocationO, LikeO, StarO } from '@react-vant/icons';

export default () => {
  return (
    <Space gap={20}>
      <LocationO />
      <LikeO />
      <StarO />
    </Space>
  );
};
