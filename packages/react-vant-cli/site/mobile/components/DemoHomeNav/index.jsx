import React, { useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { isMobile } from '../../../common/index';
import ArrowRight from '../ArrowRight';
import './index.less';

const DemoHomeNav = (props) => {
  const { lang, group } = props;

  const history = useHistory();

  const base = useMemo(() => {
    return lang ? `/${lang}` : '';
  }, [lang]);

  return (
    <div className="demo-home-nav">
      <div className="demo-home-nav__title">{group.title}</div>
      <div className="demo-home-nav__group">
        {group.items.map((navItem) => (
          <div
            className="demo-home-nav__block"
            key={navItem.path}
            onClick={() => {
              history.push(`${base}/${navItem.path}`);
              if (!isMobile && window !== window.top) {
                window.top.postMessage({ pathname: `${base}/${navItem.path}` }, window.top);
              }
            }}
          >
            {navItem.title}
            <ArrowRight className="demo-home-nav__icon" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DemoHomeNav;
