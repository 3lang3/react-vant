import { HomeO, Search, ShopO } from '@react-vant/icons';
import React from 'react';
import { Grid, Image } from 'react-vant';
import { components } from 'site-mobile-demo';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  return (
    <DemoSection className="demo-grid">
      <DemoBlock title="基础用法">
        <Grid>
          <Grid.Item icon={<ShopO />} text="文字" />
          <Grid.Item icon={<ShopO />} text="文字" />
          <Grid.Item icon={<ShopO />} text="文字" />
          <Grid.Item icon={<ShopO />} text="文字" />
        </Grid>
      </DemoBlock>
      <DemoBlock title="自定义列数">
        <Grid columnNum={3}>
          {Array.from({ length: 6 }, (_, i) => (
            <Grid.Item key={i} icon={<ShopO />} text="文字" />
          ))}
        </Grid>
      </DemoBlock>
      <DemoBlock title="自定义内容">
        <Grid border={false} columnNum={3}>
          <Grid.Item>
            <Image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
          </Grid.Item>
          <Grid.Item>
            <Image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
          </Grid.Item>
          <Grid.Item>
            <Image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
          </Grid.Item>
        </Grid>
      </DemoBlock>
      <DemoBlock title="正方形格子">
        <Grid square>
          {Array.from({ length: 8 }, (_, i) => (
            <Grid.Item key={i} icon={<ShopO />} text="文字" />
          ))}
        </Grid>
      </DemoBlock>
      <DemoBlock title="格子间距">
        <Grid gutter={10}>
          {Array.from({ length: 8 }, (_, i) => (
            <Grid.Item key={i} icon={<ShopO />} text="文字" />
          ))}
        </Grid>
      </DemoBlock>
      <DemoBlock title="内容横排">
        <Grid direction="horizontal" columnNum={3}>
          <Grid.Item icon={<ShopO />} text="文字" />
          <Grid.Item icon={<ShopO />} text="文字" />
          <Grid.Item icon={<ShopO />} text="文字" />
        </Grid>
      </DemoBlock>
      <DemoBlock title="徽标提示">
        <Grid columnNum={2}>
          <Grid.Item icon={<HomeO />} text="文字" badge={{ dot: true }} />
          <Grid.Item icon={<Search />} text="文字" badge={{ content: '99+' }} />
        </Grid>
      </DemoBlock>
    </DemoSection>
  );
};
