import React, { useMemo, useCallback, useEffect } from 'react';
import { Switch, Route, Redirect, useLocation, useHistory } from 'react-router-dom';
import { config, packageVersion } from 'site-desktop-shared';

import { isMobile } from '../common';
import Doc from './components/index';
import routes, { getLangFromRoute } from './routes';

import './index.less';

const App = () => {
  const { pathname } = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (isMobile) {
      window.location.replace(`/mobile.html/${window.location.pathname}`);
    }
  }, []);

  window.addEventListener(
    'message',
    (event) => {
      if (event.data.pathname && pathname !== event.data.pathname) {
        history.push(event.data.pathname);
      }
    },
    false,
  );

  const simulatorSrc = useMemo(() => `/mobile.html#${window.location.pathname}`, []);

  const lang = useMemo(() => {
    return getLangFromRoute(pathname);
  }, [pathname]);

  const currentCompnentName = useMemo(() => pathname.replace(/\/.*\//, ''), [pathname]);

  const localeConfig = useMemo(() => {
    const { locales } = config.site;
    if (locales) {
      return locales[lang];
    }
    return config.site;
  }, [lang]);

  // 文档语言数据
  const langConfigs = React.useMemo(() => {
    const { locales = {} } = config.site;
    return Object.keys(locales).map((key) => ({
      lang: key,
      label: locales[key].langLabel || '',
    }));
  }, []);

  const navItems = useMemo(() => {
    return localeConfig.nav.reduce((result, nav) => [...result, ...nav.items], []);
  }, [localeConfig.nav]);

  const currentNav = useMemo(
    () => navItems.find((item) => item.path === currentCompnentName),
    [navItems, currentCompnentName],
  );

  const hideSimulatorMemo = useMemo(() => {
    // 文档模式
    const { hideSimulator = false } = config.site;
    return hideSimulator;
  }, []);

  // 更新标题
  const setTitle = useCallback(() => {
    let { title } = localeConfig;

    if (currentNav && currentNav.title) {
      title = `${currentNav.title} - ${title}`;
    } else if (localeConfig.description) {
      title += ` - ${localeConfig.description}`;
    }

    document.title = title;
  }, [localeConfig, currentNav]);

  useEffect(setTitle);

  // 文档版本数据
  const versions = React.useMemo(() => {
    if (config.site.versions) {
      return config.site.versions;
    }
    return [{ label: packageVersion }];
  }, []);

  return (
    <Doc
      lang={lang}
      config={localeConfig}
      langConfigs={langConfigs}
      versions={versions}
      simulatorSrc={simulatorSrc}
      hideSimulator={hideSimulatorMemo}
      currentCompnentName={currentCompnentName}
    >
      <Switch>
        {routes.map((route) =>
          route.redirect ? (
            <Redirect key={route.path} to={route.redirect(pathname)} />
          ) : (
            <Route
              key={route.path}
              exact={route.exact}
              path={route.path}
              render={(props) => (
                <route.component
                  hideSimulator={hideSimulatorMemo}
                  {...props}
                  routes={route.routes}
                />
              )}
            />
          ),
        )}
      </Switch>
    </Doc>
  );
};

export default App;
