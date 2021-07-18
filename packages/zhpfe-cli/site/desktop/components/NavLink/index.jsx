import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classnames from 'classnames';

import './index.less';

const NavLink = (props) => {
  const { base, item } = props;
  const { pathname } = useLocation();

  const itemName = useMemo(() => {
    const name = (item.title || item.name).split(' ');
    return `${name[0]} <span>${name.slice(1).join(' ')}</span>`;
  }, [pathname]);

  const path = useMemo(() => {
    return `${base}${item.path}`;
  }, [pathname]);

  const active = useMemo(() => {
    if (pathname === path) {
      return true;
    }
    if (path.indexOf('/home') !== -1) {
      return pathname === base;
    }
    return false;
  }, [pathname]);

  return (
    <>
      {item.path ? (
        <Link
          className={classnames('vant-doc-navlink', {
            'vant-doc-navlink--active': active,
          })}
          to={path}
          dangerouslySetInnerHTML={{ __html: itemName }}
        />
      ) : item.link ? (
        <a href={item.link} dangerouslySetInnerHTML={{ __html: itemName }} />
      ) : (
        <a dangerouslySetInnerHTML={{ __html: itemName }} />
      )}
    </>
  );
};

export default NavLink;
