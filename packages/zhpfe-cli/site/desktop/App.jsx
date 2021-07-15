import React, { useMemo, useEffect } from 'react';
import {
  Switch,
  Route,
  Redirect,
  useLocation,
  useHistory,
} from 'react-router-dom';
import { config as zfpConfig, packageVersion } from 'site-desktop-shared';

import { isMobile } from '../common';
import Doc from './components/index';
import routes, { getLangFromRoute } from './routes';

import './index.less';

const App = () => {
  const { pathname } = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (isMobile) {
      window.location.replace(`mobile.html${window.location.hash}`);
    }
  }, []);

  window.addEventListener(
    'message',
    (event) => {
      if (event.data.pathname && pathname !== event.data.pathname) {
        history.push(event.data.pathname);
      }
    },
    false
  );

  const path = window.location.pathname.replace(/\/index(\.html)?/, '/');
  const simulator = `${path}mobile.html${window.location.hash}`;

  const lang = useMemo(() => {
    return getLangFromRoute(pathname);
  }, [pathname]);

  const config = useMemo(() => {
    const { locales } = zfpConfig.site;
    if (locales) {
      return locales[lang];
    }
    return zfpConfig.site;
  }, [lang]);

  // 文档语言数据
  const langConfigs = React.useMemo(() => {
    const { locales = {} } = zfpConfig.site;
    return Object.keys(locales).map((key) => ({
      lang: key,
      label: locales[key].langLabel || '',
    }));
  }, [zfpConfig]);

  // 文档版本数据
  const versions = React.useMemo(() => {
    if (zfpConfig.site.versions) {
      return [{ label: packageVersion }, ...config.site.versions];
    }
    return [{ label: packageVersion }];
  }, []);

  return (
    <Doc
      lang={lang}
      config={config}
      langConfigs={langConfigs}
      versions={versions}
      simulator={simulator}
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
                <route.component {...props} routes={route.routes} />
              )}
            />
          )
        )}
      </Switch>
    </Doc>
  );
};

export default App;
