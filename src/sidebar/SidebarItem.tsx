import React from 'react';
import cls from 'classnames';
import { createNamespace } from '../utils';
import { SidebarItemProps, SidebarProvide } from './PropsType';
import Badge from '../badge';

const [bem] = createNamespace('sidebar-item');

const SidebarItem: React.FC<SidebarItemProps & SidebarProvide> = ({ children, ...props }) => {
  const { parent, index } = props;

  if (!parent) {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.error('[React Vant] <SidebarItem> must be a child component of <Sidebar>.');
    }
    return null;
  }

  const onClick = () => {
    if (props.disabled) {
      return;
    }

    props.onClick?.(index);
    parent.setActive(index);
  };

  const { dot, badge, title, disabled } = props;
  const selected = index === parent.getActive();

  return (
    <a className={cls(bem({ select: selected, disabled }))} onClick={onClick}>
      <Badge dot={dot} content={badge} className={cls(bem('text'))}>
        {title}
      </Badge>
    </a>
  );
};

export default SidebarItem;
