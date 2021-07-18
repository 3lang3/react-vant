import React, { useState } from 'react';
import { Button, OverLay } from 'react-vant';
import { components } from 'site-mobile-demo';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const [show, setShow] = useState<boolean>(false);
  const [showEmbedded, setShowEmbedded] = useState<boolean>(false);

  return (
    <DemoSection>
      <DemoBlock title="显示遮罩层">
        <Button type="primary" onClick={() => setShow(true)}>
          显示遮罩层
        </Button>
        <OverLay show={show} onClick={() => setShow(false)} />
      </DemoBlock>
      <DemoBlock title="嵌入内容">
        <Button type="primary" onClick={() => setShowEmbedded(true)}>
          嵌入内容
        </Button>
        <OverLay show={showEmbedded} onClick={() => setShowEmbedded(false)}>
          <div className="wrapper">
            <div className="block" />
          </div>
        </OverLay>
      </DemoBlock>
    </DemoSection>
  );
};
