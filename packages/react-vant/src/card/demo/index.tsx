import React from 'react';
import { components } from 'site-mobile-demo';
import { Arrow, Like } from '@react-vant/icons';
import { Image, Button, Toast } from 'react-vant';
import { Card } from '..';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  return (
    <DemoSection>
      <DemoBlock title="基础用法">
        <Card>
          <Card.Header>基础用法</Card.Header>
          <Card.Body>卡片内容区域</Card.Body>
        </Card>
      </DemoBlock>
      <DemoBlock title="圆角卡片">
        <Card round>
          <Card.Header>圆角卡片</Card.Header>
          <Card.Body>卡片内容区域</Card.Body>
        </Card>
      </DemoBlock>
      <DemoBlock title="底部内容">
        <Card round>
          <Card.Header>卡片标题</Card.Header>
          <Card.Body>卡片内容区域</Card.Body>
          <Card.Footer>
            <Button type="primary" block size="mini">
              查看更多 <Arrow />
            </Button>
          </Card.Footer>
        </Card>
        <Card round>
          <Card.Header>卡片标题</Card.Header>
          <Card.Body>卡片内容区域</Card.Body>
          <Card.Footer>
            <Button round size="small">
              按钮
            </Button>
            <Button round size="small" type="primary">
              主按钮
            </Button>
          </Card.Footer>
        </Card>
      </DemoBlock>
      <DemoBlock title="封面展示">
        <Card round>
          <Card.Cover onClick={() => Toast.info('点击了Cover区域')}>
            <Image src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/baa20698931623.5ee79b6a8ec2b.jpg" />
          </Card.Cover>
          <Card.Header extra={<Arrow />} onClick={() => Toast.info('点击了Header区域')}>
            自定义标题
          </Card.Header>
          <Card.Body onClick={() => Toast.info('点击了Body区域')}>卡片内容区域</Card.Body>
          <Card.Footer>
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
          </Card.Footer>
        </Card>
        <Card round>
          <Card.Header extra={<Arrow />} onClick={() => Toast.info('点击了Header区域')}>
            自定义标题
          </Card.Header>
          <Card.Body onClick={() => Toast.info('点击了Body区域')}>卡片内容区域</Card.Body>
          <Card.Cover onClick={() => Toast.info('点击了Cover区域')}>
            <Image src="https://mir-s3-cdn-cf.behance.net/project_modules/max_632/274faa127009547.61390144590a7.png" />
          </Card.Cover>
        </Card>
      </DemoBlock>
      <DemoBlock title="自定义卡片样式">
        <Card round style={{ backgroundColor: '#ccc', color: 'white' }}>
          <Card.Header>卡片标题</Card.Header>
          <Card.Body
            style={{
              height: '30vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            卡片内容区域
          </Card.Body>
          <Card.Footer>
            <div style={{ textAlign: 'center' }}>我是自定义的底部</div>
          </Card.Footer>
        </Card>
      </DemoBlock>
    </DemoSection>
  );
};
