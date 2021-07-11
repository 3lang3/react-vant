import React, { useState, useMemo } from 'react';
import { Tabs, Toast, PullRefresh } from 'rokku';
import { components } from 'site-mobile-demo';
import './style.less';

export default (): React.ReactNode => {
  const { DemoSection } = components;
  const [count, setCount] = useState<number>(0);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const tips = useMemo(() => {
    if (count) {
      return `刷新次数: ${count}`;
    }
    return '下拉试试';
  }, [count]);

  const onRefresh = (showToast) => {
    setRefreshing(true);
    setTimeout(() => {
      if (showToast) {
        Toast('刷新成功');
      }

      setRefreshing(false);
      setCount(count + 1);
    }, 1000);
  };

  return (
    <DemoSection>
      <Tabs>
        <Tabs.TabPane title="基础用法">
          <PullRefresh refreshing={refreshing} onRefresh={() => onRefresh(true)}>
            <p>{tips}</p>
          </PullRefresh>
        </Tabs.TabPane>
        <Tabs.TabPane title="成功提示">
          <PullRefresh
            refreshing={refreshing}
            successText="刷新成功"
            onRefresh={() => onRefresh(false)}
          >
            <p>{tips}</p>
          </PullRefresh>
        </Tabs.TabPane>
        <Tabs.TabPane title="自定义内容">
          <PullRefresh
            headHeight="80"
            refreshing={refreshing}
            pullingSlot={() => (
              <img className="doge" alt="" src="https://img.yzcdn.cn/vant/doge.png" />
            )}
            loosingSlot={() => (
              <img className="doge" alt="" src="https://img.yzcdn.cn/vant/doge.png" />
            )}
            loadingSlot={() => (
              <img className="doge" alt="" src="https://img.yzcdn.cn/vant/doge-fire.jpg" />
            )}
            onRefresh={() => onRefresh(false)}
          >
            <p>{tips}</p>
          </PullRefresh>
        </Tabs.TabPane>
      </Tabs>
    </DemoSection>
  );
};
