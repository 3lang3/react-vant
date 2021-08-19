import React, { useState, useMemo, useEffect } from 'react';
import NavLink from '../NavLink';
import './index.less';

const Nav = (props) => {
  const { navConfig, lang } = props;
  const [top, setTop] = useState(60);
  const [bottom] = useState(0);

  const base = useMemo(() => {
    return lang ? `/${lang}/` : '/';
  }, [lang]);

  const onScroll = () => {
    const { pageYOffset: offset } = window;
    setTop(Math.max(0, 64 - offset));
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    onScroll();
  }, []);

  return (
    <div
      className="vant-doc-nav"
      style={{
        top: `${top}px`,
        bottom: `${bottom}px`,
      }}
    >
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
