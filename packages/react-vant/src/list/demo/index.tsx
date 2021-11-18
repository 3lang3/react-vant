/* eslint-disable react/no-array-index-key */
import React, { useEffect, useRef, useState } from 'react';
import { Tabs, Cell } from 'react-vant';
import { components } from 'site-mobile-demo';
import List from '../index';
import PullRefresh from '../../pull-refresh';

import './style.less';
import { ListInstance } from '../PropsType';

async function getData(throwError?) {
  return new Promise<number[]>((resolve, reject) => {
    setTimeout(() => {
      if (throwError) {
        reject(new Error('error'));
      }
      resolve(Array.from({ length: 10 }, (_, i) => i));
    }, 1000);
  });
}

export default (): React.ReactNode => {
  const { DemoSection } = components;

  const unmountedRef = useRef<boolean>(false);
  const listRef = useRef<ListInstance>(null);
  const [list, setList] = useState<Array<number>>([]);
  const [count, setCount] = useState(0);
  const [errorList, setErrorList] = useState<Array<number>>([]);
  const [refreshList, setRefreshList] = useState<Array<number>>([]);

  const [finished, setFinished] = useState<boolean>(false);

  const onLoad = async () => {
    const data = await getData();
    if (unmountedRef.current) return;
    setList((v) => [...v, ...data]);
    if (list.length >= 30) {
      setFinished(true);
    }
  };

  const onLoadError = async () => {
    // 异步更新数据
    setCount((v) => v + 1);
    const data = await getData(count === 1);
    if (unmountedRef.current) return;
    setErrorList((v) => [...v, ...data]);
    if (list.length >= 30) {
      setFinished(true);
    }
  };

  const onLoadRefresh = async (isRefresh?) => {
    const data = await getData();
    if (unmountedRef.current) return;
    setRefreshList((v) => {
      const newList = isRefresh ? data : [...v, ...data];
      if (newList.length >= 30) {
        setFinished(true);
      }
      return newList;
    });
  };

  const onRefresh = async () => {
    setFinished(false);
    await onLoadRefresh(1);
    listRef.current?.check();
  };

  useEffect(() => {
    return () => {
      unmountedRef.current = true;
    };
  }, []);

  return (
    <DemoSection>
      <Tabs sticky>
        <Tabs.TabPane title="基本用法" onChange={() => setFinished(false)}>
          <List finished={finished} onLoad={onLoad}>
            {list.length
              ? list.map((_, i) => {
                  return <Cell key={i} title={i + 1} />;
                })
              : null}
          </List>
        </Tabs.TabPane>
        <Tabs.TabPane title="错误提示">
          <List finished={finished} errorText="请求失败，点击重新加载" onLoad={onLoadError}>
            {errorList.length
              ? errorList.map((_, i) => {
                  return <Cell key={i} title={i + 1} />;
                })
              : null}
          </List>
        </Tabs.TabPane>
        <Tabs.TabPane title="下拉刷新">
          <PullRefresh onRefresh={onRefresh}>
            <List ref={listRef} finished={finished} onLoad={onLoadRefresh}>
              {refreshList.length
                ? refreshList.map((_, i) => {
                    return <Cell key={i} title={i + 1} />;
                  })
                : null}
            </List>
          </PullRefresh>
        </Tabs.TabPane>
      </Tabs>
    </DemoSection>
  );
};
