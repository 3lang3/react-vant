/* eslint-disable react/no-danger */
/* eslint-disable no-nested-ternary */
import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

import './index.less';

const NavLink = (props) => {
  const { base, item } = props;
  const { pathname } = useLocation();

  const itemName = useMemo(() => {
    const name = (item.title || item.name).split(' ');
    return `${name[0]} <span>${name.slice(1).join(' ')}</span>`;
  }, [item.name, item.title]);

  const path = useMemo(() => {
    return `${base}${item.path}`;
  }, [base, item.path]);

  const active = useMemo(() => {
    if (pathname === path) {
      return true;
    }
    if (path.indexOf('/home') !== -1) {
      return pathname === base;
    }
    return false;
  }, [base, path, pathname]);

  return (
    <>
      {item.path ? (
        <Link
          className={clsx('vant-doc-navlink', {
            'vant-doc-navlink--active': active,
          })}
          to={path}
          dangerouslySetInnerHTML={{ __html: itemName }}
        />
      ) : item.link ? (
        // eslint-disable-next-line jsx-a11y/control-has-associated-label
        <a href={item.link} dangerouslySetInnerHTML={{ __html: itemName }} />
      ) : (
        <a dangerouslySetInnerHTML={{ __html: itemName }} />
      )}
    </>
  );
};

export default NavLink;
