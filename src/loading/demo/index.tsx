import React from 'react';
import { Loading } from 'react-vant';
import { components } from 'site-mobile-demo';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;

  return (
    <DemoSection>
      <DemoBlock title="加载类型">
        <Loading />
        <Loading type="spinner" />
        <Loading type="ball" />
      </DemoBlock>
      <DemoBlock title="自定义颜色">
        <Loading color="#1989fa" />
        <Loading type="spinner" color="#2879ff" />
      </DemoBlock>
      <DemoBlock title="自定义大小">
        <Loading size="24" />
        <Loading type="spinner" size="24" />
      </DemoBlock>
      <DemoBlock title="加载文案">
        <Loading size="24px">加载中...</Loading>
      </DemoBlock>
      <DemoBlock title="垂直排列">
        <Loading size="24px" vertical>
          加载中...
        </Loading>
      </DemoBlock>
      <DemoBlock title="自定义文本颜色">
        <Loading size="24px" vertical color="#f44336">
          加载中...
        </Loading>
        <Loading size="24px" vertical textColor="#f44336">
          加载中...
        </Loading>
      </DemoBlock>
    </DemoSection>
  );
};
