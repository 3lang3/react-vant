import React, { useState } from 'react';
import clsx from 'clsx';
import styles from '../styles/sort.module.scss';
import type { NextPage } from 'next';
import { Icon, NavBar, Search, Sidebar, Toast, ConfigProvider } from 'react-vant';
import Image from 'next/image';

interface BannerItem {
  id: number;
  image: string;
}

interface DataItem {
  id: number;
  label: string;
  icon: string;
}

interface sortItem {
  id: number;
  label: string;
  banner?: Array<BannerItem>;
  children?: Array<sortItem>;
  data?: Array<DataItem>;
}

const themeVars = {
  sidebarSelectedTextColor: '#2377EB',
  sidebarSelectedBorderColor: 'transparent',
  sidebarBackgroundColor: '#F7F8FA',
};
const src = 'https://img.yzcdn.cn/vant/cat.jpeg';

const SortData: Array<sortItem> = [
  {
    id: 51360,
    label: '一级分类',
    banner: [{ id: 0, image: src }],
    children: [
      {
        id: 321651261,
        label: '二级分类1',
        data: [
          { id: 120380, label: '三级分类', icon: src },
          { id: 124575, label: '三级分类', icon: src },
          { id: 321236, label: '三级分类', icon: src },
          { id: 12413467, label: '三级分类', icon: src },
          { id: 4126145, label: '三级分类', icon: src },
          { id: 4126145, label: '三级分类', icon: src },
        ],
      },
      {
        id: 124213,
        label: '二级分类2',
        data: [
          { id: 161360, label: '三级分类', icon: src },
          { id: 121711, label: '三级分类', icon: src },
          { id: 321, label: '三级分类', icon: src },
          { id: 124, label: '三级分类', icon: src },
          { id: 124, label: '三级分类', icon: src },
          // { id: 412, label: '三级分类', icon: src }
        ],
      },
    ],
  },
  {
    id: 5136012,
    label: '一级分类',
    banner: [{ id: 10124, image: src }],
    children: [
      {
        id: 321651213261,
        label: '二级分类1',
        data: [
          { id: 1203123380, label: '三级分类', icon: src },
          { id: 124321575, label: '三级分类', icon: src },
          { id: 32236, label: '三级分类', icon: src },
          { id: 12413467, label: '三级分类', icon: src },
          { id: 41246216145, label: '三级分类', icon: src },
          { id: 4126142345, label: '三级分类', icon: src },
        ],
      },
      {
        id: 124223413,
        label: '二级分类2',
        data: [
          { id: 161153360, label: '三级分类', icon: src },
          { id: 1217513511, label: '三级分类', icon: src },
          { id: 32513511, label: '三级分类', icon: src },
          { id: 125154, label: '三级分类', icon: src },
          { id: 1251514, label: '三级分类', icon: src },
          { id: 41212412, label: '三级分类', icon: src },
        ],
      },
    ],
  },
];
const Sort: NextPage = () => {
  const [list, setList] = useState(SortData);
  const [active, setActive] = useState(0);

  const renderSidebarContent = (children: Array<sortItem>, banner: Array<BannerItem>) => {
    return (
      <div style={{ background: '#fff', paddingBottom: '20px' }}>
        {banner.map(({ image }) => (
          <div key={image} className={styles.Banner}>
            <Image src={image} width={276} height={108} />
          </div>
        ))}
        {children.map((child) => (
          <React.Fragment key={child.id}>
            <div className={styles.SortLabelTitle}>{child.label}</div>
            <div className={clsx(styles.GirdWrap)}>
              {!!child.data &&
                child.data.map((a, i) => (
                  <div key={i} className={styles.SortItem}>
                    <Image src={a.icon} width={48} height={48} />
                    <div className={styles.SortItemTitle}>{a.label}</div>
                  </div>
                ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    );
  };
  const renderTitle = (title: string) => {
    return <div style={{ whiteSpace: 'nowrap', fontWeight: 'bold' }}>{title}</div>;
  };
  // @ts-ignore
  return (
    <>
      <NavBar title={'分类'} />
      <Search
        shape="round"
        disabled
        leftIcon={<Icon name="scan" size="18" color="#BBBBBB" />}
        placeholder="你要什么/苹果/手机"
      />
      <ConfigProvider themeVars={themeVars}>
        <Sidebar
          value={active}
          onChange={(v) => {
            setActive(v);
            Toast.info(`内容区 ${v + 1}`);
          }}
        >
          {list.map(({ label, banner, children, id }) => (
            <Sidebar.Item title={renderTitle(label)} key={id}>
              {renderSidebarContent(children, banner)}
            </Sidebar.Item>
          ))}
        </Sidebar>
      </ConfigProvider>
    </>
  );
};
export default Sort;
