import React, { useState } from 'react';
import { Cell, Toast } from 'react-vant';
import { components } from 'site-mobile-demo';
import ImagePreview from '..';
import './style.less';

const images = [
  'https://img.yzcdn.cn/vant/apple-1.jpg',
  'https://img.yzcdn.cn/vant/apple-2.jpg',
  'https://img.yzcdn.cn/vant/apple-3.jpg',
];

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const [visible, setVisible] = useState(false);
  return (
    <DemoSection>
      <DemoBlock card title="基础用法">
        <Cell title="预览图片" isLink onClick={() => ImagePreview.open({ images })} />
      </DemoBlock>
      <DemoBlock card title="传入配置项">
        <Cell
          title="指定初始位置"
          isLink
          onClick={() => ImagePreview.open({ images, startPosition: 2 })}
        />
        <Cell
          title="展示关闭按钮"
          isLink
          onClick={() => ImagePreview.open({ images, startPosition: 2, closeable: true })}
        />
        <Cell
          title="监听关闭事件"
          isLink
          onClick={() =>
            ImagePreview.open({
              images,
              startPosition: 2,
              onClose: () => {
                Toast.info('关闭预览');
              },
            })
          }
        />
        <Cell
          title="展示指示点"
          isLink
          onClick={() => ImagePreview.open({ images, showIndicators: true, showIndex: false })}
        />
      </DemoBlock>
      <DemoBlock card title="异步关闭">
        <Cell
          title="预览图片"
          isLink
          onClick={() => {
            const destory = ImagePreview.open({ images });
            setTimeout(() => destory(), 2000);
          }}
        />
      </DemoBlock>
      <DemoBlock card title="组件调用">
        <Cell title="组件调用" isLink onClick={() => setVisible(true)} />
      </DemoBlock>
      <ImagePreview
        visible={visible}
        onClose={() => setVisible(false)}
        images={images}
        showIndicators
        showIndex={false}
      />
    </DemoSection>
  );
};
