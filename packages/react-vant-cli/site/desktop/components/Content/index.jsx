import React from 'react';
import cls from 'classnames';
import './index.less';

export default (props) => {
  return (
    <div className={cls('vant-doc-content', `vant-doc-content--${props.currentCompnentName}`)}>
      {props.children}
    </div>
  );
};
