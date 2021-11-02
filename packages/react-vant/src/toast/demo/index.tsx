/* eslint-disable no-plusplus */
import React from 'react';
import { Cell, Switch } from 'react-vant';
import { components } from 'site-mobile-demo';
import Toast from '..';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;

  const onDynicUpdate = () => {
    let remain = 4;
    let timer;
    const update = Toast.info({
      message: `还剩 ${remain + 1} 秒`,
      duration: 5000,
      onClose: () => {
        clearInterval(timer);
      },
    });
    timer = setInterval(() => {
      update.config({ message: `还剩 ${remain--} 秒` });
    }, 1000);
  };

  return (
    <DemoSection>
      <DemoBlock card title="基础用法">
        <Cell title="文字提示" isLink onClick={() => Toast.info('提示内容')} />
        <Cell
          title="加载提示"
          isLink
          onClick={() => {
            Toast.loading({
              message: '加载中...',
              forbidClick: true,
            });
          }}
        />
        <Cell title="成功提示" isLink onClick={() => Toast.success('成功文案')} />
        <Cell title="失败提示" isLink onClick={() => Toast.fail('失败文案')} />
      </DemoBlock>
      <DemoBlock card title="动态更新提示">
        <Cell title="动态更新提示" isLink onClick={onDynicUpdate} />
      </DemoBlock>
      <DemoBlock card title="自定义图标">
        <Cell
          title="自定义图标"
          isLink
          onClick={() =>
            Toast({
              message: '自定义图标',
              icon: 'fire-o',
            })
          }
        />

        <Cell
          title="自定义图片"
          isLink
          onClick={() =>
            Toast({
              message: '自定义图片',
              icon: 'https://img01.yzcdn.cn/vant/logo.png',
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
      <DemoBlock card title="单例模式">
        <Cell title="开启">
          <Switch
            style={{ display: 'block', float: 'right' }}
            size={20}
            onChange={(v) => {
              Toast.allowMultiple(v);
            }}
          />
        </Cell>
        <Cell
          title="第一个Toast"
          isLink
          onClick={() =>
            Toast({
              message: '第一个Toast',
            })
          }
        />
        <Cell
          title="第二个Toast"
          isLink
          onClick={() =>
            Toast({
              message: '第二个Toast',
            })
          }
        />
      </DemoBlock>
    </DemoSection>
  );
};
