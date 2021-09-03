/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useMemo } from 'react';
import { Tabs, Toast } from 'react-vant';
import { components } from 'site-mobile-demo';
import './style.less';
import PullRefresh from '../index';

export default (): React.ReactNode => {
  const { DemoSection } = components;
  const [count, setCount] = useState<number>(0);
  const tips = useMemo(() => {
    if (count) {
      return `刷新次数: ${count}`;
    }
    return '下拉试试';
  }, [count]);

  const onRefresh = (showToast) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (showToast) {
          Toast.info('刷新成功');
        }
        setCount(count + 1);
        resolve(true);
      }, 1000);
    });
  };

  return (
    <DemoSection>
      <Tabs>
        <Tabs.TabPane title="基础用法">
          <PullRefresh onRefresh={() => onRefresh(true)}>
            <p>{tips}</p>
          </PullRefresh>
        </Tabs.TabPane>
        <Tabs.TabPane title="成功提示">
          <PullRefresh successText="刷新成功" onRefresh={() => onRefresh(false)}>
            <p>{tips}</p>
          </PullRefresh>
        </Tabs.TabPane>
        <Tabs.TabPane title="自定义内容">
          <PullRefresh
            headHeight={80}
            pullingText={({ distance }) => (
              <img
                className="doge"
                src="https://img.yzcdn.cn/vant/doge.png"
                style={{ transform: `scale(${distance / 80})` }}
              />
            )}
            loosingText={() => <img className="doge" src="https://img.yzcdn.cn/vant/doge.png" />}
            loadingText={() => (
              <img className="doge" src="https://img.yzcdn.cn/vant/doge-fire.jpg" />
            )}
            onRefresh={() => onRefresh(true)}
          >
            <p>{tips}</p>
          </PullRefresh>
        </Tabs.TabPane>
      </Tabs>
    </DemoSection>
  );
};
