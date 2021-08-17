import React, { useRef } from 'react';
import { CountDown, Toast, Flex, Button } from 'react-vant';
import { components } from 'site-mobile-demo';
import { CountDownActionType } from '../PropsType';
import './style.less';

const demoTime = 30 * 60 * 60 * 1000;

export default (): React.ReactNode => {
  const ref = useRef<CountDownActionType>();
  const { DemoBlock, DemoSection } = components;
  return (
    <DemoSection className="demo-count-down">
      <DemoBlock title="基础用法">
        <CountDown time={demoTime} />
      </DemoBlock>
      <DemoBlock title="自定义格式">
        <CountDown time={demoTime} format="DD 天 HH 时 mm 分 ss 秒" />
      </DemoBlock>
      <DemoBlock title="毫秒级渲染">
        <CountDown time={demoTime} millisecond format="HH:mm:ss:SS" />
      </DemoBlock>
      <DemoBlock title="自定义样式">
        <CountDown time={demoTime} millisecond format="HH:mm:ss:SS">
          {(timeData) => (
            <>
              <span className="block">{timeData.hours}</span>
              <span className="colon">:</span>
              <span className="block">{timeData.minutes}</span>
              <span className="colon">:</span>
              <span className="block">{timeData.seconds}</span>
            </>
          )}
        </CountDown>
      </DemoBlock>
      <DemoBlock title="手动控制">
        <CountDown
          ref={ref}
          time={3000}
          millisecond
          format="ss:SSS"
          autoStart={false}
          onFinish={() => Toast.info('倒计时结束')}
        />
        <br />
        <Flex>
          <Flex.Item onClick={() => ref.current.start()} span={8}>
            <Button icon="play-circle-o">开始</Button>
          </Flex.Item>
          <Flex.Item onClick={() => ref.current.pause()} span={8}>
            <Button icon="pause-circle-o">暂停</Button>
          </Flex.Item>
          <Flex.Item onClick={() => ref.current.reset()} span={8}>
            <Button icon="replay">重置</Button>
          </Flex.Item>
        </Flex>
      </DemoBlock>
    </DemoSection>
  );
};
