import React from 'react';
import { Toast, NavBar, Icon } from 'react-vant';
import { components } from 'site-mobile-demo';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const renderTitle = () => {
    return <div>我是自定义的标题</div>;
  };
  return (
    <DemoSection>
      <DemoBlock title="基础用法">
        <NavBar
          title="标题"
          leftArrow
          leftText="返回"
          rightText="按钮"
          onClickLeft={() => Toast('返回')}
          onClickRight={() => Toast('按钮')}
        />
      </DemoBlock>
      <DemoBlock title="自定义内容">
        <NavBar
          title="标题"
          leftArrow
          leftText="返回"
          renderTitle={renderTitle()}
          onClickLeft={() => Toast('返回')}
          rightText={<Icon name="search" size={20} />}
          onClickRight={() => Toast('按钮')}
        />
      </DemoBlock>
      <DemoBlock title="标题点击">
        <NavBar
          title="标题点击"
          leftArrow
          leftText="返回"
          onClickTitle={() => Toast('标题')}
          onClickLeft={() => Toast('返回')}
          rightText={<Icon name="search" size={20} />}
          onClickRight={() => Toast('按钮')}
        />
      </DemoBlock>
    </DemoSection>
  );
};
