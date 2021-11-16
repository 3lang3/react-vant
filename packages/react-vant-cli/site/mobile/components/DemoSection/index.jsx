import React, { useMemo } from 'react';
import clsx from 'clsx';

import { useLocation } from 'react-router-dom';

import { decamelize } from '../../../common';
import routes from '../../routes';

import './index.less';

const DemoSection = (props) => {
  const { children } = props;
  const { pathname } = useLocation();

  const demoName = useMemo(() => {
    const route = routes.find((o) => o.path === pathname);
    const name = (route && route.meta && route.meta.name) || '';
    if (name) {
      return `demo-${decamelize(name)}`;
    }
    return '';
  }, [pathname]);

  return <section className={clsx('vant-doc-demo-section', demoName)}>{children}</section>;
};

export default DemoSection;
