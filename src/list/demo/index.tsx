import React, { useState } from 'react';
import { Tabs, List, Cell, PullRefresh } from 'rokku';
import { components } from 'site-mobile-demo';

import './style.less';

let refreshlist = [];

export default (): React.ReactNode => {
  const { DemoSection } = components;

  const [list, setList] = useState<Array<number>>([]);
  const [errorList, setErrorList] = useState<Array<number>>([]);
  const [refreshList, setRefreshList] = useState<Array<number>>([]);

  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [finished, setFinished] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const onLoad = () => {
    setLoading(true);

    // 异步更新数据
    // setTimeout 仅做示例，真实场景中一般为 ajax 请求
    setTimeout(() => {
      for (let i = 0; i < 10; i += 1) {
        list.push(list.length + 1);
      }
      setList(list);

      // 加载状态结束
      setLoading(false);

      // 数据全部加载完成
      if (list.length >= 40) {
        setFinished(true);
      }
    }, 1000);
  };

  const onLoadError = () => {
    setLoading(true);

    // 异步更新数据
    // setTimeout 仅做示例，真实场景中一般为 ajax 请求
    setTimeout(() => {
      for (let i = 0; i < 10; i += 1) {
        errorList.push(errorList.length + 1);
      }
      setErrorList(errorList);

      // 加载状态结束
      setLoading(false);
      if (errorList.length === 10) {
        setError(true);
      }
    }, 1000);
  };

  const onLoadRefresh = (isRefresh) => {
    setLoading(true);

    if (isRefresh) {
      refreshlist = [];
    }

    // 异步更新数据
    // setTimeout 仅做示例，真实场景中一般为 ajax 请求
    setTimeout(() => {
      for (let i = 0; i < 10; i += 1) {
        refreshlist.push(refreshlist.length + 1);
      }
      setRefreshList(refreshlist);

      // 加载状态结束
      setLoading(false);

      // 数据全部加载完成
      if (refreshlist.length >= 40) {
        setFinished(true);
      }
      setRefreshing(false);
    }, 1000);
  };

  const onRefresh = () => {
    setRefreshing(true);
    setFinished(false);

    onLoadRefresh(1);
  };

  return (
    <DemoSection>
      <Tabs sticky>
        <Tabs.TabPane title="基本用法">
          <List loading={loading} finished={finished} onLoad={onLoad}>
            {list.length
              ? list.map((item) => {
                  return <Cell key={item} title={item} />;
                })
              : null}
          </List>
        </Tabs.TabPane>
        <Tabs.TabPane title="错误提示">
          <List
            loading={loading}
            error={error}
            errorText="请求失败，点击重新加载"
            onLoad={onLoadError}
          >
            {errorList.length
              ? errorList.map((item) => {
                  return <Cell key={item} title={item} />;
                })
              : null}
          </List>
        </Tabs.TabPane>
        <Tabs.TabPane title="下拉刷新">
          <PullRefresh refreshing={refreshing} onRefresh={onRefresh}>
            <List loading={loading} finished={finished} onLoad={onLoadRefresh}>
              {refreshList.length
                ? refreshList.map((item) => {
                    return <Cell key={item} title={item} />;
                  })
                : null}
            </List>
          </PullRefresh>
        </Tabs.TabPane>
      </Tabs>
    </DemoSection>
  );
};
