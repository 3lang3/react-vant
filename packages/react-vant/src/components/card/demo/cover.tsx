import React from 'react';
import { Arrow, Like } from '@react-vant/icons';
import { Card, Image, Button, Toast, Space } from 'react-vant';

export default () => {
  return (
    <>
      <Card round style={{ marginBottom: 20 }}>
        <Card.Cover onClick={() => Toast.info('点击了Cover区域')}>
          <Image src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/baa20698931623.5ee79b6a8ec2b.jpg" />
        </Card.Cover>
        <Card.Header extra={<Arrow />} onClick={() => Toast.info('点击了Header区域')}>
          封面展示
        </Card.Header>
        <Card.Body onClick={() => Toast.info('点击了Body区域')}>卡片内容区域</Card.Body>
        <Card.Footer>
          <Space>
            <Button round size="small">
              更多
            </Button>
            <Button
              icon={<Like />}
              round
              color="linear-gradient(to right, #ff6034, #ee0a24)"
              size="small"
            >
              Like
            </Button>
          </Space>
        </Card.Footer>
      </Card>
      <Card round>
        <Card.Header extra={<Arrow />} onClick={() => Toast.info('点击了Header区域')}>
          封面展示
        </Card.Header>
        <Card.Body onClick={() => Toast.info('点击了Body区域')}>卡片内容区域</Card.Body>
        <Card.Cover onClick={() => Toast.info('点击了Cover区域')}>
          <Image src="https://mir-s3-cdn-cf.behance.net/project_modules/max_632/274faa127009547.61390144590a7.png" />
        </Card.Cover>
      </Card>
    </>
  );
};
