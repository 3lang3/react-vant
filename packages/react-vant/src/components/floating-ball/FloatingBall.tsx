import React, { 
  useContext,
  useState,
  useRef,
  useEffect,
  useImperativeHandle,
  forwardRef,
  Children,
} from 'react';
import clsx from 'clsx';

import { FloatingBallProps, FloatingBallInstance } from './PropsType';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import FloatingBallContext from './FloatingBallContext';
import useClickAway from '../hooks/use-click-away';

const FloatingBall = forwardRef<FloatingBallInstance, FloatingBallProps>((props, ref) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('floating-ball', prefixCls);

  const [moving, setMoving] = useState(false);
  const [active, setActive] = useState(false);
  const [position, setPosition] = useState('bottom right');
  const containerRef = useRef<HTMLDivElement>();
  const baseRef = useRef<HTMLDivElement>();
  const adsorbRef = useRef<HTMLDivElement>();
  const [adsorb, setAdsorb] = useState(false)

  // 标记 item 的位置 上下左右
  const handlePosition = () => {
    if (containerRef.current) {
      const windowW =  window.innerWidth;
      const windowH =  window.innerHeight;
      // 目前按照一半的位置为分界线 有半个悬浮球宽度的误差
      if (containerRef.current.offsetLeft < windowW / 2) {
        position.indexOf('right') >= 0 && setPosition((state) => state.replace('right', 'left'));
      } else if (position.indexOf('left') >= 0) {
        setPosition((state) => state.replace('left', 'right'));
      }
      if (containerRef.current.offsetTop < windowH / 2) {
        position.indexOf('bottom') >= 0 && setPosition((state) => state.replace('bottom', 'top'));
      } else if (position.indexOf('top') >= 0) {
        setPosition((state) => state.replace('top', 'bottom'));
      }
    }
  }

  // 处理悬浮球的点击事件
  const handleBaseClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    // 是否禁用
    if (props.disabled) return;
    // 当发生移动时不触发悬浮球的激活
    if (moving) return;
    setActive(!active);
    typeof props.onAction === 'function' && props.onAction(!active);
  };

  // 点击除悬浮球之外的地方自动收回悬浮球
  useClickAway(containerRef, () => {
    setActive(false);
  });

  useEffect(() => {
    // 处理悬浮球的移动
    const handleMove = (event) => {
      event.preventDefault();
      event.stopPropagation();
      // 当一个手指移动 并且 悬浮球处于未激活状态
      if (!props.disdrag && containerRef.current && !active && event.touches.length === 1) {
        const size = containerRef.current.offsetWidth;
        const windowW =  window.innerWidth;
        const windowH =  window.innerHeight;
        const [touche] = event.touches;
        const x = touche.clientX - size / 4;
        const y = touche.clientY - size / 4;

        if (x >= size / 4 && x <= windowW - size * 1.25) {
          containerRef.current.style.left = `${x}px`;
        }
        if (y >= size * 3 && y <= windowH - size * 4) {
          containerRef.current.style.top = `${y}px`;
          adsorbRef.current.style.top = `${y}px`;
        }
        setMoving(true);
      }
    };

    // 悬浮球移动结束
    const handleMoveEnd = () => {
      setMoving(false);
      handlePosition();
    };

    baseRef.current?.addEventListener('touchmove', handleMove);
    baseRef.current?.addEventListener('touchend', handleMoveEnd);
    return () => {
      baseRef.current?.removeEventListener('touchmove', handleMove);
      baseRef.current?.removeEventListener('touchend', handleMoveEnd);
    };
  }, [active, position, props.disdrag]);

  // 自动靠边吸附
  useEffect(() => {
    let timer;
    if (!props.adsorb) {
      setAdsorb(false);
      return;
    }
    if (!active) {
      timer = setTimeout(() => {
        setAdsorb(true);
        // 最少5秒钟 不然用户操作体验会差
      }, Math.max(props.adsorb, 5) * 1000);
    }
    return () => {
      clearTimeout(timer);
    }
  }, [active, moving, props.adsorb])

  // 实例方法
  useImperativeHandle(ref, () => ({
    action: (active: boolean) => {
      // 防止点击悬浮球之外的地方悬浮球收回
      setTimeout((() => {
        if (active) {
          setAdsorb(false);
        }
        setActive(active);
      }));
    }
  }));

  const handleAdsorb = () => {
    setAdsorb(false);
    setActive(true);
  }

  return (
    <FloatingBallContext.Provider value={{close: () => setActive(false)}}>
      <div className={clsx(bem(), active ? 'active' : '', props.position)} ref={containerRef}>
        <div className={clsx(bem('menu'), `list-${Math.max(Children.toArray(props.children).length, 5)}`, position, props.direction)}>
          {props.children}
        </div>
        <div
          className={clsx(bem('adsorb'))}
          style={{
            display: adsorb ? 'block' : 'none'
          }}
          ref={adsorbRef}
          onClick={handleAdsorb}
        ></div>
        <div
          className={clsx(bem('base'), props.disabled ? 'disabled' : '')}
          ref={baseRef}
          style={{
            backgroundColor: props.color,
            transform: adsorb ? `translateX(${position.includes('left') ? '-' : ''}200%) scale(0)` : undefined
          }}
          onClick={handleBaseClick}
        >
          {active || props.icon}
        </div>
      </div>
    </FloatingBallContext.Provider>
  )
});

export default FloatingBall
