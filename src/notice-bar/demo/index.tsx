import React from 'react';
import { NoticeBar, Swipe } from '@zhpfe/design';
import { components } from 'site-mobile-demo';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  return (
    <DemoSection>
      <DemoBlock title="基础用法">
        <NoticeBar
          leftIcon="speaker-s"
          text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
        />
      </DemoBlock>
      <DemoBlock title="滚动播放">
        <NoticeBar scrollable text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。" />
      </DemoBlock>
      <DemoBlock title="多行展示">
        <NoticeBar wrapable text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。" />
      </DemoBlock>
      <DemoBlock title="通知栏状态">
        <NoticeBar mode="closeable">技术是开发它的人的共同灵魂。</NoticeBar>
        <NoticeBar mode="link">技术是开发它的人的共同灵魂。</NoticeBar>
      </DemoBlock>
      <DemoBlock title="自定义样式">
        <NoticeBar
          leftIcon="info"
          background="rgb(236, 249, 255)"
          color="rgb(25, 137, 250)"
          text="技术是开发它的人的共同灵魂。"
        />
      </DemoBlock>
      <DemoBlock title="垂直滚动">
        <NoticeBar leftIcon="info">
          <Swipe autoplay="3000" showIndicators={false} vertical className="notice-swipe">
            <Swipe.Item>内容 1</Swipe.Item>
            <Swipe.Item>内容 2</Swipe.Item>
            <Swipe.Item>内容 3</Swipe.Item>
          </Swipe>
        </NoticeBar>
      </DemoBlock>
    </DemoSection>
  );
};
