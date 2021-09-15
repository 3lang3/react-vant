import React, { useRef } from 'react';
import { CountDown, Toast } from 'react-vant';
import { components } from 'site-mobile-demo';
import { CountDownInstance } from '../PropsType';
import Grid from '../../grid';
import './style.less';

const demoTime = 30 * 60 * 60 * 1000;

export default (): React.ReactNode => {
  const ref = useRef<CountDownInstance>();
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
        <Grid columnNum={3}>
          <Grid.Item icon="play-circle-o" text="开始" onClick={() => ref.current.start()} />
          <Grid.Item icon="pause-circle-o" text="暂停" onClick={() => ref.current.pause()} />
          <Grid.Item icon="replay" text="重置" onClick={() => ref.current.reset()} />
        </Grid>
      </DemoBlock>
    </DemoSection>
  );
};
