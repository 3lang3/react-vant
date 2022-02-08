/* eslint-disable no-nested-ternary */
import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';
import SearchInput from '../SearchInput';
import { GitHubIcon, HttpLinkIcon } from '../Icons';
import './index.less';

const Header = (props) => {
  const { lang, config, langConfigs } = props;
  const { pathname } = useLocation();

  const anotherLang = useMemo(() => {
    const items = langConfigs.filter((item) => item.lang !== lang);
    if (items.length) {
      return items[0];
    }
    return {};
  }, [lang, langConfigs]);

  const langLink = useMemo(() => {
    return `#${pathname.replace(lang, anotherLang.lang)}`;
  }, [anotherLang.lang, lang, pathname]);

  const langLabel = useMemo(() => {
    return anotherLang.label;
  }, [anotherLang.label]);

  return (
    <div className="vant-doc-header">
      <div className="vant-doc-row">
        <div className="vant-doc-header__top">
          {config.searchConfig && <SearchInput lang={lang} searchConfig={config.searchConfig} />}
          <ul className="vant-doc-header__top-nav">
            {config.links &&
              config.links.length &&
              config.links.map((item) => {
                const guessGithub = item.title?.toLowerCase() === 'github' && !item.logo;
                const hasImg = item.logo || guessGithub;
                return (
                  <li
                    key={item.url}
                    className={clsx(
                      'vant-doc-header__top-nav-item',
                      'vant-doc-header__top-nav-item--link',
                      {
                        'vant-doc-header__top-nav-item--img': hasImg,
                      },
                    )}
                  >
                    <a
                      className="vant-doc-header__cube"
                      target="_blank"
                      href={item.url}
                      title={item.alt}
                      rel="noreferrer"
                    >
                      {hasImg ? (
                        guessGithub ? (
                          <GitHubIcon alt={item.alt} />
                        ) : (
                          <img src={item.logo} alt={item.alt} />
                        )
                      ) : (
                        <>
                          {item.title}
                          <HttpLinkIcon className="vant-doc-header__cube--httplink" />
                        </>
                      )}
                    </a>
                  </li>
                );
              })}
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
