import React, { useMemo } from 'react';
import clsx from 'clsx';
import { config } from 'site-mobile-shared';

import DemoHomeNav from '../DemoHomeNav';
import './index.less';

const DemoHome = (props) => {
  const { lang } = props.meta;

  const siteConfig = useMemo(() => {
    const { locales } = config.site;
    if (locales) {
      return locales[lang];
    }
    return config.site;
  }, [config]);

  const smallTitle = useMemo(() => siteConfig.title.length >= 8, [siteConfig]);

  return (
    <div className="demo-home">
      <h1
        className={clsx('demo-home__title', {
          'demo-home__title--small': smallTitle,
        })}
      >
        <img src={siteConfig.logo} alt="" />
        <span>{siteConfig.title}</span>
      </h1>
      {siteConfig.description && <h2 className="demo-home__desc">{siteConfig.description}</h2>}
      {siteConfig.nav.map((group) => (
        <DemoHomeNav key={group.title} lang={lang} group={group} />
      ))}
    </div>
  );
};

export default DemoHome;
