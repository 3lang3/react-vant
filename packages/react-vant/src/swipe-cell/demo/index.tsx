import React, { useRef } from 'react';
import { Flex, Button, Cell, Dialog, Image, Typography, Toast } from 'react-vant';
import { components } from 'site-mobile-demo';
import { SwipeCellInstance } from '../PropsType';
import SwipeCell from '..';
import './style.less';

const beforeClose = ({ position }) => {
  switch (position) {
    case 'left':
    case 'cell':
    case 'outside':
      return true;
    case 'right':
      return new Promise<boolean>((resolve) => {
        Dialog.confirm({
          title: '确定删除吗？',
        }).then(resolve);
      });
    default:
      return true;
  }
};

export default (): React.ReactNode => {
  const ref = useRef<SwipeCellInstance>();
  const { DemoBlock, DemoSection } = components;
  return (
    <DemoSection className="demo-badge">
      <DemoBlock title="基础用法">
        <SwipeCell
          leftAction={
            <Button square type="primary">
              选择
            </Button>
          }
          rightAction={
            <>
              <Button square type="danger">
                删除
              </Button>
              <Button square type="primary">
                收藏
              </Button>
            </>
          }
        >
          <Cell title="单元格" value="内容" />
        </SwipeCell>
      </DemoBlock>
      <DemoBlock title="事件监听">
        <SwipeCell
          onOpen={() => Toast.info('打开')}
          onClose={() => Toast.info('关闭')}
          rightAction={
            <Button style={{ height: '100%' }} square type="danger">
              删除
            </Button>
          }
        >
          <Cell title="单元格" value="内容" />
        </SwipeCell>
      </DemoBlock>
      <DemoBlock title="自定义内容">
        <SwipeCell
          rightAction={
            <Button style={{ height: '100%' }} square type="danger">
              删除
            </Button>
          }
        >
          <Flex className="product-card" align="stretch">
            <Image src="https://img.yzcdn.cn/vant/ipad.jpeg" className="product-card__img" />
            <Flex direction="column" justify="between" className="product-card__content">
              <div>
                <Typography.Title level={5}>商品标题</Typography.Title>
                <Typography.Text type="secondary">这里是商品描述</Typography.Text>
              </div>
              <Flex justify="between" align="center">
                <Typography.Text strong size="lg">
                  ¥2.00
                </Typography.Text>
                <Typography.Text size="sm" type="secondary">
                  x2
                </Typography.Text>
              </Flex>
            </Flex>
          </Flex>
        </SwipeCell>
      </DemoBlock>
      <DemoBlock title="异步关闭">
        <SwipeCell
          beforeClose={beforeClose}
          leftAction={
            <Button square type="primary">
              选择
            </Button>
          }
          rightAction={
            <Button square type="danger">
              删除
            </Button>
          }
        >
          <Cell title="单元格" value="内容" />
        </SwipeCell>
      </DemoBlock>
      <DemoBlock title="外部调用">
        <SwipeCell
          ref={ref}
          leftAction={
            <Button square type="primary">
              选择
            </Button>
          }
          rightAction={
            <Button square type="danger">
              删除
            </Button>
          }
        >
          <Cell title="单元格" value="内容" />
        </SwipeCell>
        <br />
        <Flex justify="around">
          <Button icon="arrow-left" onClick={() => ref.current.open('left')}>
            左滑打开
          </Button>
          <Button icon="arrow" onClick={() => ref.current.open('right')}>
            右滑打开
          </Button>
          <Button icon="cross" onClick={() => ref.current.close()}>
            关闭
          </Button>
        </Flex>
      </DemoBlock>
    </DemoSection>
  );
};
