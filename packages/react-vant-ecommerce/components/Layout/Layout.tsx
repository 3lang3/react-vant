import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Tabbar } from 'react-vant';
import styles from './Layout.module.scss';
import 'react-vant/lib/index.css';

/**
 * 全局Layout
 * @param children
 */

// @ts-ignore
export default function Layout({ children }) {
  const TabBarListArray: string[] = ['/', '/sort', '/cart', '/mine'];
  const [active, setActive] = useState(0);

  const Route = useRouter();
  const { route } = Route;
  const switchTab = async (tab: number | string) => {
    setActive(Number(tab));
    await Route.replace(TabBarListArray[Number(tab)]);
  };
  useEffect(() => {
    const a = TabBarListArray.findIndex((value) => {
      return value === route;
    });
    setActive(a);
  }, [route]);
  const renderBottom = () => {
    return <div style={{ height: '55px' }} />;
  };
  return (
    <>
      {TabBarListArray.includes(route) ? (
        <>
          <div className={styles.container}>
            {children}
            {renderBottom()}
          </div>
          <Tabbar value={active} onChange={switchTab} defaultValue={0}>
            <Tabbar.Item icon="home-o">首页</Tabbar.Item>
            <Tabbar.Item icon="search">分类</Tabbar.Item>
            <Tabbar.Item icon="cart-o">购物车</Tabbar.Item>
            <Tabbar.Item icon="setting-o">我的</Tabbar.Item>
          </Tabbar>
        </>
      ) : (
        <div className={styles.container}>
          {children}
          {renderBottom()}
        </div>
      )}
    </>
  );
}
