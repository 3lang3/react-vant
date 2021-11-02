/* eslint-disable no-console */
import React, { useState } from 'react';
import { Cell, Toast } from 'react-vant';
import { components } from 'site-mobile-demo';
import Dialog from '..';

import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const [show, setShow] = useState(false);

  return (
    <DemoSection>
      <DemoBlock card title="基础用法">
        <Cell
          title="弹窗提示"
          isLink
          onClick={() =>
            Dialog.confirm({
              title: '标题',
              message: '代码是写出来给人看的，附带能在机器上运行',
            })
              .then(() => {
                console.log('confirm');
              })
              .catch(() => {
                console.log('catch');
              })
          }
        />
        <Cell
          title="弹窗提示（无标题）"
          isLink
          onClick={() =>
            Dialog.alert({
              message: '代码是写出来给人看的，附带能在机器上运行',
            })
          }
        />
        <Cell
          title="确认弹框"
          isLink
          onClick={() =>
            Dialog.confirm({
              title: '标题',
              message: '代码是写出来给人看的，附带能在机器上运行',
            })
          }
        />
      </DemoBlock>
      <DemoBlock card title="Promise调用">
        <Cell
          title="Dialog.alert"
          isLink
          onClick={async () => {
            await Dialog.alert({
              title: '标题',
              message: '代码是写出来给人看的，附带能在机器上运行',
            });
            console.log('confirm');
          }}
        />
        <Cell
          title="Dialog.confirm"
          isLink
          onClick={async () => {
            try {
              await Dialog.confirm({
                title: '标题',
                message: '代码是写出来给人看的，附带能在机器上运行',
              });
              console.log('confirm');
            } catch (error) {
              console.log('cancel');
            }
          }}
        />
      </DemoBlock>
      <DemoBlock card title="圆角按钮样式">
        <Cell
          title="圆角按钮弹窗"
          isLink
          onClick={() =>
            Dialog.alert({
              title: '标题',
              theme: 'round-button',
              showCancelButton: true,
              message: '代码是写出来给人看的，附带能在机器上运行',
            })
          }
        />
        <Cell
          title="圆角按钮弹窗（无标题）"
          isLink
          onClick={() =>
            Dialog.alert({
              message: '代码是写出来给人看的，附带能在机器上运行',
              theme: 'round-button',
            })
          }
        />
      </DemoBlock>
      <DemoBlock card title="完全关闭后的回调">
        <Cell
          title="弹窗提示"
          isLink
          onClick={() =>
            Dialog.alert({
              title: '标题',
              message: '代码是写出来给人看的，附带能在机器上运行',
              onClosed: () => console.log('onClosed'),
            })
          }
        />
      </DemoBlock>
      <DemoBlock card title="关闭图标">
        <Cell
          title="关闭图标"
          isLink
          onClick={() =>
            Dialog.alert({
              title: '标题',
              closeable: true,
              theme: 'round-button',
              message: '代码是写出来给人看的，附带能在机器上运行',
            })
          }
        />
        <Cell
          title="自定义关闭图标"
          isLink
          onClick={() =>
            Dialog.alert({
              title: '标题',
              closeable: true,
              closeIcon: 'close',
              theme: 'round-button',
              message: '代码是写出来给人看的，附带能在机器上运行',
            })
          }
        />
      </DemoBlock>
      <DemoBlock card title="自定义内容">
        <Cell
          title="自定义内容"
          isLink
          onClick={() =>
            Dialog.alert({
              title: '标题',
              closeable: true,
              theme: 'round-button',
              message: (
                <div style={{ textAlign: 'center', margin: '16px' }}>
                  自定义内容：代码是写出来给人看的，附带能在机器上运行
                </div>
              ),
            })
          }
        />
      </DemoBlock>
      <DemoBlock card title="异步关闭">
        <Cell
          title="异步关闭"
          isLink
          onClick={() =>
            Dialog.show({
              title: '标题',
              message: '弹窗内容',
              showCancelButton: true,
              onCancel: () => {
                return new Promise((res) => {
                  setTimeout(() => {
                    res(true);
                    Toast.success({ message: '取消按钮异步' });
                  }, 3000);
                });
              },
              onConfirm: () => {
                return new Promise((res) => {
                  setTimeout(() => {
                    res(true);
                    Toast.success({ message: '确认按钮异步' });
                  }, 3000);
                });
              },
            })
          }
        />
      </DemoBlock>

      <DemoBlock card title="组件调用">
        <Cell title="组件调用" isLink onClick={() => setShow(true)} />
      </DemoBlock>

      <Dialog
        visible={show}
        title="标题"
        showCancelButton
        onConfirm={() => {
          Toast.info('点击确认按钮');
          setShow(false);
        }}
        onCancel={() => setShow(false)}
      >
        <img className="demo-dialog-img" src="https://img.yzcdn.cn/vant/apple-3.jpg" alt="2131" />
      </Dialog>
    </DemoSection>
  );
};
