import React, { useState, useRef, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';

import SearchInput from '../SearchInput';
import './index.less';

const Header = (props) => {
  const versionRef = useRef(null);
  const { lang, config, versions, langConfigs } = props;
  const { pathname } = useLocation();
  const [showVersionPop, setShowVersionPop] = useState(false);

  const checkHideVersionPop = (event) => {
    if (!versionRef.current.contains(event.target)) {
      setShowVersionPop(false);
    }
  };

  const anotherLang = useMemo(() => {
    const items = langConfigs.filter((item) => item.lang !== lang);
    if (items.length) {
      return items[0];
    }
    return {};
  }, [pathname]);

  const langLink = useMemo(() => {
    return `#${pathname.replace(lang, anotherLang.lang)}`;
  }, [pathname]);

  const langLabel = useMemo(() => {
    return anotherLang.label;
  }, [pathname]);

  const toggleVersionPop = () => {
    // eslint-disable-next-line react/no-this-in-sfc
    const val = !showVersionPop;
    const action = val ? 'add' : 'remove';
    document.body[`${action}EventListener`]('click', checkHideVersionPop);
    setShowVersionPop(val);
  };

  const onSwitchVersion = (version) => {
    if (version.link) {
      window.location.href = version.link;
    }
  };

  return (
    <div className="vant-doc-header">
      <div className="vant-doc-row">
        <div className="vant-doc-header__top">
          <a className="vant-doc-header__logo">
            <img alt="vant" src={config.logo} />
            <span>{config.title}</span>
          </a>
          {config.searchConfig && <SearchInput lang={lang} searchConfig={config.searchConfig} />}
          <ul className="vant-doc-header__top-nav">
            {config.links &&
              config.links.length &&
              config.links.map((item) => (
                <li key={item.url} className="vant-doc-header__top-nav-item">
                  <a
                    className="vant-doc-header__logo-link"
                    target="_blank"
                    href={item.url}
                    title={item.alt}
                    rel="noreferrer"
                  >
                    <img src={item.logo} alt={item.alt} />
                  </a>
                </li>
              ))}
            {versions && (
              <li ref={versionRef} className="vant-doc-header__top-nav-item">
                <span
                  className={clsx('vant-doc-header__cube vant-doc-header__version', {
                    'vant-doc-header__version-multiple': versions.length > 1,
                  })}
                  onClick={toggleVersionPop}
                >
                  v{versions[0].label}
                  <div name="vant-doc-dropdown">
                    {showVersionPop && (
                      <div className="vant-doc-header__version-pop">
                        {versions.map((item) => (
                          <div
                            key={item.label}
                            className="vant-doc-header__version-pop-item"
                            onClick={() => onSwitchVersion(item)}
                          >
                            {item.label}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </span>
              </li>
            )}
            {langLabel && langLink && (
              <li className="vant-doc-header__top-nav-item">
                <a className="vant-doc-header__cube" href={langLink}>
                  {langLabel}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
