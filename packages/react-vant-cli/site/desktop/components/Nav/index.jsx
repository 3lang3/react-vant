import React, { useMemo } from 'react';
import NavLink from '../NavLink';
import './index.less';

const Nav = (props) => {
  const { navConfig, lang, config } = props;
  const base = useMemo(() => {
    return lang ? `/${lang}/` : '/';
  }, [lang]);

  return (
    <div className="vant-doc-nav">
      <a className="vant-doc-nav__logo">
        <img alt="vant" src={config.logo} />
        <span>{config.title}</span>
      </a>
      {navConfig.map((group) => (
        <div key={group.title} className="vant-doc-nav__group">
          <div className="vant-doc-nav__title">{group.title}</div>
          {group.items &&
            group.items.map((item) => (
              <div key={item.title} className="vant-doc-nav__item">
                <NavLink item={item} base={base} />
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default Nav;
