import React, { useState } from 'react';
import { Cell } from 'react-vant';
import { components } from 'site-mobile-demo';
import { CSSTransition } from 'react-transition-group';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;

  const [show, setShow] = useState(false);
  const [transition, setTransition] = useState('');

  const animate = (transitionName: string) => {
    setShow(true);
    setTransition(transitionName);

    setTimeout(() => {
      setShow(false);
    }, 500);
  };

  return (
    <DemoSection>
      <DemoBlock title="文字省略">
        <div className="rv-ellipsis">这是一段最多显示一行的文字，后面的内容会省略</div>
        <div className="rv-multi-ellipsis--l2">
          这是一段最多显示两行的文字，后面的内容会省略。这是一段最多显示两行的文字，后面的内容会省略
        </div>
      </DemoBlock>
      <DemoBlock card title="1px 边框">
        <div className="rv-hairline--top" />
      </DemoBlock>
      <DemoBlock card title="动画">
        <Cell isLink title="Fade" onClick={() => animate('rv-fade')} />
        <Cell isLink title="Slide Up" onClick={() => animate('rv-slide-up')} />
        <Cell isLink title="Slide Down" onClick={() => animate('rv-slide-down')} />
        <Cell isLink title="Slide Left" onClick={() => animate('rv-slide-left')} />
        <Cell isLink title="Slide Right" onClick={() => animate('rv-slide-right')} />
      </DemoBlock>

      <CSSTransition in={show} timeout={300} classNames={transition} unmountOnExit>
        <div className="demo-animate-block" />
      </CSSTransition>
    </DemoSection>
  );
};
