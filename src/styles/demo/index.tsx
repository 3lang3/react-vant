import React, { useState } from 'react';
import { Cell } from 'rokku';
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
        <div className="rk-ellipsis">这是一段最多显示一行的文字，后面的内容会省略</div>
        <div className="rk-multi-ellipsis--l2">
          这是一段最多显示两行的文字，后面的内容会省略。这是一段最多显示两行的文字，后面的内容会省略
        </div>
      </DemoBlock>
      <DemoBlock card title="1px 边框">
        <div className="rk-hairline--top" />
      </DemoBlock>
      <DemoBlock card title="动画">
        <Cell isLink title="Fade" onClick={() => animate('rk-fade')} />
        <Cell isLink title="Slide Up" onClick={() => animate('rk-slide-up')} />
        <Cell isLink title="Slide Down" onClick={() => animate('rk-slide-down')} />
        <Cell isLink title="Slide Left" onClick={() => animate('rk-slide-left')} />
        <Cell isLink title="Slide Right" onClick={() => animate('rk-slide-right')} />
      </DemoBlock>

      <CSSTransition in={show} timeout={300} classNames={transition} unmountOnExit>
        <div className="demo-animate-block" />
      </CSSTransition>
    </DemoSection>
  );
};
