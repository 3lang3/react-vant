import React from 'react';
import { Cell, Toast } from 'react-vant';
import { components } from 'site-mobile-demo';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;

  return (
    <DemoSection>
      <DemoBlock card title="基础用法">
        <Cell title="文字提示" isLink onClick={() => Toast('提示内容')} />
        <Cell
          title="加载提示"
          isLink
          onClick={() =>
            Toast.loading({
              message: '加载中...',
              forbidClick: true,
              onClose: () => {
                console.log('close');
              },
            })
          }
        />
        <Cell title="成功提示" isLink onClick={() => Toast.success('成功文案')} />
        <Cell title="失败提示" isLink onClick={() => Toast.fail('失败文案')} />
      </DemoBlock>
      <DemoBlock card title="自定义图标">
        <Cell
          title="自定义图标"
          isLink
          onClick={() =>
            Toast({
              message: '自定义图标',
              icon: 'time',
            })
          }
        />
        <Cell
          title="自定义图片"
          isLink
          onClick={() =>
            Toast({
              message: '自定义图片',
              icon: 'http://cdn.rokku.icu/logo.png',
            })
          }
        />
        <Cell
          title="自定义加载图标"
          isLink
          onClick={() =>
            Toast.loading({
              message: '加载中...',
              forbidClick: true,
              loadingType: 'spinner',
            })
          }
        />
      </DemoBlock>
      <DemoBlock card title="自定义位置">
        <Cell
          title="顶部展示"
          isLink
          onClick={() =>
            Toast({
              message: '顶部展示',
              position: 'top',
            })
          }
        />
        <Cell
          title="底部展示"
          isLink
          onClick={() =>
            Toast({
              message: '底部展示',
              position: 'bottom',
            })
          }
        />
      </DemoBlock>
      <DemoBlock card title="动态更新提示">
        <Cell
          title="动态更新提示"
          isLink
          onClick={() => {
            const toast = Toast.loading({
              duration: 0, // 持续展示 toast
              forbidClick: true,
              message: '倒计时 3 秒',
            });

            let second = 3;
            const timer = setInterval(() => {
              second -= 1;
              if (second) {
                toast.setMessage(`倒计时 ${second} 秒`);
              } else {
                clearInterval(timer);
                // 手动清除 Toast
                Toast.clear();
              }
            }, 1000);
          }}
        />
      </DemoBlock>
    </DemoSection>
  );
};
