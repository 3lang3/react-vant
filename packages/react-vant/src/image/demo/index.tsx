import React from 'react';
import { Flex, Loading } from 'react-vant';
import { components } from 'site-mobile-demo';
import Image from '..';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const src = 'https://img.yzcdn.cn/vant/cat.jpeg';
  const fits = ['contain', 'cover', 'fill', 'none', 'scale-down'] as const;
  return (
    <DemoSection className="demo-image">
      <DemoBlock title="基础用法">
        <Image width="100" height="100" src={src} />
      </DemoBlock>
      <DemoBlock title="填充模式">
        <Flex wrap="wrap" gutter={20}>
          {fits.map((el) => (
            <Flex.Item key={el} span={8}>
              <Image fit={el} width="100%" height="27vw" src={src} />{' '}
              <div className="text">{el}</div>
            </Flex.Item>
          ))}
        </Flex>
      </DemoBlock>
      <DemoBlock title="圆形图片">
        <Flex wrap="wrap" gutter={20}>
          {fits.map((el) => (
            <Flex.Item key={el} span={8}>
              <Image round fit={el} width="100%" height="27vw" src={src} />{' '}
              <div className="text">{el}</div>
            </Flex.Item>
          ))}
        </Flex>
      </DemoBlock>
      <DemoBlock title="加载中提示">
        <Flex wrap="wrap" gutter={20}>
          <Flex.Item span={8}>
            <Image width="100%" height="27vw" />
            <div className="text">默认提示</div>
          </Flex.Item>
          <Flex.Item span={8}>
            <Image loadingIcon={<Loading type="spinner" />} width="100%" height="27vw" />
            <div className="text">自定义提示</div>
          </Flex.Item>
        </Flex>
      </DemoBlock>
      <DemoBlock title="加载失败提示">
        <Flex wrap="wrap" gutter={20}>
          <Flex.Item span={8}>
            <Image width="100%" height="27vw" src="x" />
            <div className="text">默认提示</div>
          </Flex.Item>
          <Flex.Item span={8}>
            <Image width="100%" height="27vw" src="x" errorIcon={<div>加载失败</div>} />
            <div className="text">自定义提示</div>
          </Flex.Item>
        </Flex>
      </DemoBlock>
    </DemoSection>
  );
};
