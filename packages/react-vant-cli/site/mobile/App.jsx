import React, { useMemo } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import ScrollTop from './components/ScrollTop';
import DemoNav from './components/DemoNav';
import routes from './routes';

import './index.less';

const App = () => {
  const { pathname } = useLocation();

  const title = useMemo(() => {
    const route = routes.find((o) => o.path === pathname);
    return (route && route.meta && route.meta.name) || '';
  }, [pathname]);

  return (
    <div>
      <DemoNav title={title} />
      <ScrollTop />
      <Switch>
        {routes.map((route) => {
          return route.redirect ? (
            <Redirect key={route.path} to={route.redirect(pathname)} />
          ) : (
            <Route
              key={route.path}
              exact={route.exact}
              path={route.path}
              render={(props) => {
                return <route.component {...props} meta={route.meta} routes={route.routes} />;
              }}
            />
          );
        })}
      </Switch>
    </div>
  );
};

export default App;
